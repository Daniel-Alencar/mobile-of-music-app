import React, { useState, useEffect } from 'react';
import { FlatList, Image, View } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Audio, AVPlaybackStatus } from 'expo-av';

import songs from './songs';

import {
  TopBar, 
  ScreenArea, 
  CoverArea, 
  PlayerArea, 
  Controls,
  styles
} from './MusicScreen.styles';

import Background from './Background/Background';
import ShuffleButton from './ShuffleButton/ShuffleButton';
import RepeatButton from './RepeatButton/RepeatButton';
import SliderComponent from './Slider/SliderComponent';

import ChevronIcon from './icons/ChevronIcon/ChevronIcon';
import MoreVertIcon from './icons/MoreVerIcon/MoreVertIcon';
import PauseIcon from './icons/PauseIcon/PauseIcon';
import PlayIcon from './icons/PlayIcon/PlayIcon';

export default function MusicScreen() {

  const [idOfMusic, setIdOfMusic] = useState(0);

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

// ==================================================================

  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound>();

  const [musicDurationInSeconds, setMusicDurationInSeconds] = useState(0);

  const [musicDuration, setMusicDuration] = useState("0:00");
  const [currentTime, setCurrentTime] = useState("0:00");

// ==================================================================
  
  const [sliderTimeLineValue, setSliderTimeLineValue] = useState(0);
  const maxValueToSliderTimeLine = 1000;
  const minValueToSliderTimeLine = 0;

  function convertCurrentSecondsOfMusicToValueFromSlider(currentSecondsOfMusic: number, duracaoDaMusicaEmSeconds: number) {
    return Math.floor((maxValueToSliderTimeLine * currentSecondsOfMusic) / duracaoDaMusicaEmSeconds);
  }

  function convertValueFromSliderToCurrentSecondsOfMusic(value: number) {
    return Math.floor(value * musicDurationInSeconds / maxValueToSliderTimeLine)
  }

// ==================================================================

  const [prioridade, setPrioridade] = useState(false);

  function convertMillisInSeconds(millis: number) {
    return Math.floor(millis / 1000);
  }

  async function prepareSound()  {
    try {
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,

        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      });
    } catch(error) {
      console.log('\nErro na definição das configurações do Audio\n=> ' + error);
    }


    console.log('Carregando o áudio...');
    const { sound } = await Audio.Sound.createAsync(
      songs[idOfMusic].musicSource,
      { 
        shouldPlay: true,
        progressUpdateIntervalMillis: 1000,
      },
      onPlayBackStatusUpdate,
      true
    );
    setSound(sound);
    setPlaying(true);
    console.log('Tocando o áudio...');

    sound.getStatusAsync()
      .then((status) => {
        let durationInSeconds = convertMillisInSeconds(
          status.isLoaded ?
            (
              status.durationMillis === undefined ?
                60000
              :
                status.durationMillis
            )
          :
            60000
        );
        
        setMusicDuration(convertSecondsToTimeInString(durationInSeconds));
      })
      .catch((error) => {
        console.log('\nErro na definição das configurações do Audio\n=> ' + error);
      });
  }

  function onPlayBackStatusUpdate(PlaybackStatus: AVPlaybackStatus) {
    let currentSecondsOfMusic = convertMillisInSeconds(
      PlaybackStatus.isLoaded ? 
        (
          PlaybackStatus.positionMillis === undefined ?
            0 
          :
            PlaybackStatus.positionMillis
        )
      :
        0
    );
    let currentSecondsOfMusicInString = convertSecondsToTimeInString(currentSecondsOfMusic);
    setCurrentTime(currentSecondsOfMusicInString);

    let duracaoDaMusicaEmSeconds = convertMillisInSeconds(
      PlaybackStatus.isLoaded ? 
        (
          PlaybackStatus.durationMillis === undefined ?
            0 
          :
            PlaybackStatus.durationMillis
        )
      :
        0
    );
    if(duracaoDaMusicaEmSeconds !== 0) {
      setMusicDurationInSeconds(duracaoDaMusicaEmSeconds);
      let valueToSlider = convertCurrentSecondsOfMusicToValueFromSlider(currentSecondsOfMusic, duracaoDaMusicaEmSeconds);
      setSliderTimeLineValue(valueToSlider);
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

  useEffect(() => {
    prepareSound();
  }, []);

  useEffect(() => {
    prepareSound();
  }, [idOfMusic]);

  useEffect(() => {
    return sound
      ? 
        () => {
          console.log('Descarregando o som...');
          sound.unloadAsync();
        }
      : 
        undefined;
  }, [sound]);

  return(
    <Background 
      children={
        <>

          <TopBar>

            <TopBar.Left>
              <TopBar.Left.ToBackScreen onPress={
                () => handleToPreviousScreen()
              }>
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
              centerContent
              contentContainerStyle={styles.contentFlatListContainer}
              horizontal
              style={styles.flatListContainer}
              scrollEventThrottle={16}

              data={songs}
              renderItem={({item}) => renderImageFromFlatList({item})}
              keyExtractor={(item) => item.key}
              onScroll={() => {setIdOfMusic(1)}}
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

                <PlayerArea.Content.FavoriteButton isFavorite={true}/>

              </PlayerArea.Content>

            </PlayerArea>

            <Controls>

              <SliderComponent 
                musicDuration={musicDuration}
                currentMusicTime={currentTime}

                value={sliderTimeLineValue}
                minimumValue={minValueToSliderTimeLine}
                maximumValue={maxValueToSliderTimeLine}

                onSlidingComplete={(value: number) => {
                  sound?.setPositionAsync(convertValueFromSliderToCurrentSecondsOfMusic(value) * 1000);
                  setPrioridade(!prioridade);
                }}
                onSlidingStart={() => {
                  setPrioridade(!prioridade);
                }}
                prioridade={prioridade}
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

