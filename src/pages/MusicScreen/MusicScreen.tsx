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

import { Audio } from 'expo-av';

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

  const [playing, setPlaying] = useState(false);

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

// ==================================================================

  const [sound, setSound] = useState<Audio.Sound>();

  useEffect(() => {
    prepareSound();
  }, []);

  async function playOrPauseMusic() {
    await prepareSound();
  }
  
  async function prepareSound() {
    const isNotPlaying = !playing;

    if(isNotPlaying) {
      if(sound === undefined) {

        console.log('Carregando o áudio...');
        const { sound } = await Audio.Sound.createAsync(
          require('../../assets/music/Gravity.mp3')
        );
        setSound(sound);

        console.log('Tocando o áudio...');
        await sound.playAsync();
        setPlaying(true);

      } else {
        console.log('Tocando o áudio...');
        await sound.playAsync();
        setPlaying(true);
      }

    } else {
      
      if(sound !== undefined) {
        console.log('Pausando o áudio...');
        await sound.pauseAsync();
        setPlaying(false);
      }
    }
  }

  async function playSound() {
    
  }

  async function pauseSound() {

  }

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
                musicDuration={"06:12"}
                currentMusicTime={"00:00"}
              />

              <ShuffleButton />
              
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
              
              <RepeatButton />

            </Controls>

          </ScreenArea>

        </>
      }
    />
  );
}