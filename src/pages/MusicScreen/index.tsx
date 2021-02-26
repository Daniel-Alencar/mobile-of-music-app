import React, { useState, useEffect } from 'react';
import { 
  FlatList, 
  NativeSyntheticEvent, 
  NativeScrollEvent, 
  Image, 
  View 
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio, AVPlaybackStatus } from 'expo-av';

import songs from '../songsOfPlaylist';

import {
  TopBar, 
  ScreenArea, 
  CoverArea, 
  PlayerArea, 
  Controls,
  styles
} from './style';

import Background from './Background';
import ShuffleButton from './ShuffleButton';
import RepeatButton from './RepeatButton';
import Slider from './Slider';

import ChevronIcon from './icons/ChevronIcon/ChevronIcon';
import MoreVertIcon from './icons/MoreVerIcon/MoreVertIcon';
import PauseIcon from './icons/PauseIcon/PauseIcon';
import PlayIcon from './icons/PlayIcon/PlayIcon';

import { useDispatch } from 'react-redux';
import * as sliderValueActions from '../../store/sliderValue/sliderValue.actions';
import * as infoMusicActions from '../../store/infoMusic/infoMusic.actions';

import { maxSliderValue, windowWidth } from '../../settingsDefault';

// =====================================================================================

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

// =====================================================================================

function MusicScreen() {
  const dispatch = useDispatch();

  const [idOfMusic, setIdOfMusic] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [musicDurationInSeconds, setMusicDurationInSeconds] = useState(0);
  const [musicDuration, setMusicDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");
  const [sliderTimeLineValue, setSliderTimeLineValue] = useState(0);

// ==================================================================

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

// ==================================================================

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
    console.log('Carregando o áudio...');
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

      console.log('Tocando o áudio...');
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
    console.log('Tocando o áudio...');
    await sound?.playAsync();

    setPlaying(true);
  }

  async function pauseSound() {
    console.log('Pausando o áudio...');
    await sound?.pauseAsync();

    setPlaying(false);
  }

// =====================================================================================

  function renderImageFromFlatList({item}: any) {
    return (
      <View style={styles.imageContainer}>
        <Image 
          style={styles.itemFlatListContainer}
          source={{ uri: item.imageSource }}
        />
      </View>
    );
  }

  function musicExchange(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollX = event.nativeEvent.contentOffset.x;
    if(scrollX % windowWidth === 0) {
      console.log("Alterando a música");
      const index = scrollX / windowWidth;

      dispatch(infoMusicActions.toggleMusicAndArtist(index));
      setIdOfMusic(index);
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


// ==================================================================

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
          sound.unloadAsync();
        }
      : 
        undefined;
  }, [sound]);

// ==================================================================

  return(
    <Background 
      children={
        <>
          <TopBar>

            <TopBar.Left>
              <TopBar.Left.ToBackScreen onPress={handleToPreviousScreen}>
                <ChevronIcon />
              </TopBar.Left.ToBackScreen>
            </TopBar.Left>

            <TopBar.Middle>
              <TopBar.Title>
                Tocando música
              </TopBar.Title>
              <TopBar.SubTitle>
                {songs[idOfMusic].artist}
              </TopBar.SubTitle>
            </TopBar.Middle>

            <TopBar.Right>
              <TopBar.Right.MoreOptions>
                <MoreVertIcon />
              </TopBar.Right.MoreOptions>
            </TopBar.Right>

          </TopBar>

          <ScreenArea>

            <CoverArea>
              <FlatList 
                pagingEnabled
                overScrollMode="never" 
                showsHorizontalScrollIndicator={false}
                horizontal

                style={styles.flatListContainer}

                data={songs}
                renderItem={({item}) => renderImageFromFlatList({item})}
                keyExtractor={(item) => item.key}
                onScroll={musicExchange}
              />
              
            </CoverArea>

            <PlayerArea>
              
              <PlayerArea.Content>

                <PlayerArea.Content.Info>
                  <PlayerArea.Content.Info.Title>
                    {songs[idOfMusic].name}
                  </PlayerArea.Content.Info.Title>
                  <PlayerArea.Content.Info.Author>
                    {songs[idOfMusic].artist}
                  </PlayerArea.Content.Info.Author>
                </PlayerArea.Content.Info>

                <PlayerArea.Content.FavoriteButton isFavorite={songs[idOfMusic].favorite}/>

              </PlayerArea.Content>

            </PlayerArea>

            <Controls>

              <Slider
                musicDuration={musicDuration}
                currentMusicTime={currentTime}

                value={sliderTimeLineValue}

                onSlidingComplete={() => {}}
                onSlidingStart={() => {}}

                onValueChange={(value: number) => {
                  let seconds = convertValueFromSliderToCurrentSecondsOfMusic(value);
                  let timeInString = convertSecondsToTimeInString(seconds);
                  setCurrentTime(timeInString);
                }}
              />

              <ShuffleButton isClicked={false}/>
              
              <Controls.SkipBack>
                <Feather name="skip-back" color="#fff" size={27}/>
              </Controls.SkipBack>

              <Controls.Play onPress={playOrPauseMusic}>
                  {
                    playing ?
                      <PauseIcon /> 
                    :
                      <PlayIcon />
                  }
              </Controls.Play>
              
              <Controls.SkipForward>
                <Feather name="skip-forward" color="#fff" size={27}/>
              </Controls.SkipForward>
              
              <RepeatButton isClicked={false}/>

            </Controls>
          </ScreenArea>

        </>
      }
    />
  );
}

export default MusicScreen;