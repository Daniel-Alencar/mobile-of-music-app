import React, { useState, useEffect } from 'react';
import { 
  View,
  NativeSyntheticEvent, 
  NativeScrollEvent, 
} from 'react-native';

import { Audio, AVPlaybackStatus } from 'expo-av';
import songs from './songsOfPlaylist';

import { useDispatch } from 'react-redux';
import * as sliderValueActions from './../store/sliderValue/sliderValue.actions';
import * as infoMusicActions from './../store/infoMusic/infoMusic.actions';

import { maxSliderValue, windowWidth } from './../settingsDefault';

function convertMillisInSeconds(millis: number) {
  return Math.floor(millis / 1000);
}

function convertSecondsToTimeInString(secs: number) {
  let minutes = Math.floor(secs / 60);
  let seconds = Math.ceil(secs - (minutes * 60));
  let stringMinutes = `${minutes}`;
  let stringSeconds = `${seconds}`;

  if(seconds < 10) {
    stringSeconds = `0${seconds}`;
  }
  return `${stringMinutes}:${stringSeconds}`;
}

export default function Sound() {
  const dispatch = useDispatch();

  const [idOfMusic, setIdOfMusic] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [musicDurationInSeconds, setMusicDurationInSeconds] = useState(0);
  const [musicDuration, setMusicDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");
  const [sliderTimeLineValue, setSliderTimeLineValue] = useState(0);

  async function setSettingsInAudio() {
    try {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,

        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });
    } catch(error) {
      console.log('\nErro na definição das configurações do Audio\n=> ' + error);
    }
  }

  async function prepareNewSound()  {
    console.log('Carregando o áudio');
    try {
      const { sound } = await Audio.Sound.createAsync(
        songs[idOfMusic].musicSource,
        { 
          shouldPlay: true,
          progressUpdateIntervalMillis: 1000,
        },
        onPlayBackStatusUpdate,
        true
      );

      console.log('Tocando o áudio');
      setSound(sound);
      setPlaying(true);
      
      const status = await sound.getStatusAsync();
      const durationInSeconds = convertMillisInSeconds(
        status.isLoaded ?
          status.durationMillis === undefined ?
            0
          :
            status.durationMillis
        :
          0
      );
      setMusicDurationInSeconds(durationInSeconds);
      setMusicDuration(convertSecondsToTimeInString(durationInSeconds));

    } catch(error) {
      console.log('ERRO no carregamento do áudio\n' + error + '\n\n');
    }
  }

  function onPlayBackStatusUpdate(PlaybackStatus: AVPlaybackStatus) {
    let currentSecondsOfMusic = convertMillisInSeconds(
      PlaybackStatus.isLoaded ? 
        PlaybackStatus.positionMillis === undefined ?
          0 
        :
          PlaybackStatus.positionMillis
      :
        0
    );
    let currentSecondsOfMusicInString = convertSecondsToTimeInString(currentSecondsOfMusic);
    setCurrentTime(currentSecondsOfMusicInString);
    
    if(musicDurationInSeconds === 0) {
      let allSecondsOfMusic = convertMillisInSeconds(
        PlaybackStatus.isLoaded ?
          PlaybackStatus.durationMillis === undefined ?
            0
          :
            PlaybackStatus.durationMillis
        :
          0
      );
      setMusicDurationInSeconds(allSecondsOfMusic);
    } else {
      let valueToSlider = convertCurrentSecondsOfMusicToValueFromSlider(currentSecondsOfMusic);

      setSliderTimeLineValue(valueToSlider);
      dispatch(sliderValueActions.changeValueFromSlider(valueToSlider));
    }
  }

  async function playOrPauseMusic() {
    if(playing) {
      await pauseSound();
    } else {
      await playSound();
    }
  }

  async function playSound() {
    console.log('Tocando o áudio');
    await sound?.playAsync();

    setPlaying(true);
  }

  async function pauseSound() {
    console.log('Pausando o áudio');
    await sound?.pauseAsync();

    setPlaying(false);
  }

  function musicExchange(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollX = event.nativeEvent.contentOffset.x;
    console.log("=======> " + scrollX);
    console.log("=======> " + windowWidth);
    if(scrollX % windowWidth === 0) {
      console.log("Alterando a música");
      const index = scrollX / windowWidth;

      dispatch(infoMusicActions.toggleMusicAndArtist(index));
      setIdOfMusic(index);
    }
  }

  function paraAProximaMusica() {
    if(songs.length !== idOfMusic + 1) {
      setIdOfMusic(idOfMusic + 1);
    }
  }

  function paraAMusicaAnterior() {
    if(0 !== idOfMusic) {
      setIdOfMusic(idOfMusic - 1);
    }
  }

  function convertCurrentSecondsOfMusicToValueFromSlider(currentSecondsOfMusic: number) {
    return Math.floor((maxSliderValue * currentSecondsOfMusic) / musicDurationInSeconds);
  }

  function convertValueFromSliderToCurrentSecondsOfMusic(value: number) {
    return Math.floor(value * musicDurationInSeconds / maxSliderValue)
  }


  function setValueToSlider(valueFromSlider: number) {
    setSliderTimeLineValue(valueFromSlider);
    let seconds = convertValueFromSliderToCurrentSecondsOfMusic(valueFromSlider);

    console.log('===============================================================================');
    console.log('Tempo atual: ' + convertSecondsToTimeInString(seconds));
    console.log('Value do slider: ' + sliderTimeLineValue);
    console.log('===============================================================================');

    sound?.setPositionAsync(seconds * 1000);
  }

  useEffect(() => {
    setSettingsInAudio()
      .then(() => {
        prepareNewSound();
      });
  }, []);

  useEffect(() => {
    prepareNewSound();
  }, [idOfMusic]);

  useEffect(() => {
    return sound
      ? 
        () => {
          console.log('Descarregando o som');
          // sound.unloadAsync();
        }
      : 
        undefined;
  }, [sound]);


  return(
    <View>
    </View>
  );
}