import React, { useState, useEffect } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ChevronIcon from './icons/ChevronIcon/ChevronIcon';
import MoreVertIcon from './icons/MoreVerIcon/MoreVertIcon';


import ShuffleButton from './ShuffleButton/ShuffleButton';
import RepeatButton from './RepeatButton/RepeatButton';
import PauseIcon from './icons/PauseIcon/PauseIcon';
import PlayIcon from './icons/PlayIcon/PlayIcon';

import SliderComponent from './Slider/SliderComponent';

import { TopBar } from './MusicScreen.styles';
import { ScreenArea } from './MusicScreen.styles';
import { CoverArea } from './MusicScreen.styles';
import { PlayerArea } from './MusicScreen.styles';
import { Controls } from './MusicScreen.styles';

import { Audio, AVPlaybackStatus } from 'expo-av';

interface propsBackground {
  children: JSX.Element,
}

interface propsMusic {
  imageSource: string,
  favorite: boolean,
  musicName: string,
  musicSource: string,
  duration: number,

  author: string,
}

const Background = (props: propsBackground) => {
  return(
    <LinearGradient
        colors={['#464779', '#1b1a1f']}
        style={{
          flex: 1,
          paddingTop: 40,
        }}
    >
      {props.children}
    </LinearGradient>
  );
};

export default function MusicScreen(props: propsMusic) {

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

// ==================================================================

  const [playing, setPlaying] = useState(false);
  const [musicDuration, setMusicDuration] = useState("");

  const [sound, setSound] = useState<Audio.Sound>();
  const [statusOfSound, setStatusOfSound] = useState<AVPlaybackStatus>();

// ==================================================================
  
  async function prepareSound() {
    console.log('Carregando o áudio...');
    const { sound, status } = await Audio.Sound.createAsync(
      require('../../assets/music/Gravity.mp3')
    );
    setSound(sound);
    setStatusOfSound(status);

    const duration = convertSecondsToTimeInString(status.durationMillis / 1000);
    setMusicDuration(duration);
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

    if(minutes < 10) {
      stringMinutes = `0${minutes}`;
    }
    if(seconds < 10) {
      stringSeconds = `0${seconds}`;
    }
    return `${stringMinutes}:${stringSeconds}`;
  }

  useEffect(() => {
    prepareSound();
  }, []);

  useEffect(() => {
    return sound
      ? 
        () => {
          console.log('Descarregando o som...');
          const promessa = sound.unloadAsync();
          console.log("PROMESSA DE DESCARREGAMENTO DO SOM: " + promessa);
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
                {props.author}
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
              <CoverArea.Image 
                resizeMode="contain"
                source={{
                  uri: props.imageSource
                }}
              />
            </CoverArea>

            <PlayerArea>
              
              <PlayerArea.Content>

                <PlayerArea.Content.Info>
                  <PlayerArea.Content.Info.Title>
                    {props.musicName}
                  </PlayerArea.Content.Info.Title>
                  <PlayerArea.Content.Info.Author>
                    {props.author}
                  </PlayerArea.Content.Info.Author>
                </PlayerArea.Content.Info>

                <PlayerArea.Content.FavoriteButton isFavorite={true}/>

              </PlayerArea.Content>

            </PlayerArea>

            <Controls>

              <SliderComponent 
                musicDuration={musicDuration}
                currentMusicTime={"00:00"}
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