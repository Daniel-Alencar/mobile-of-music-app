import React, { useState, useEffect } from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ChevronIcon from '../components/MusicScreen/ChevronIcon';
import MoreVertIcon from '../components/MusicScreen/MoreVertIcon';


import ShuffleButton from '../components/MusicScreen/ShuffleButton';
import RepeatButton from '../components/MusicScreen/RepeatButton';
import PauseIcon from '../components/MusicScreen/PauseIcon';
import PlayIcon from '../components/MusicScreen/PlayIcon';

import SliderComponent from '../components/MusicScreen/SliderComponent';

import { TopBar } from './Music.styles';
import { ScreenArea } from './Music.styles';
import { CoverArea } from './Music.styles';
import { PlayerArea } from './Music.styles';
import { Controls } from './Music.styles';

import { Audio } from 'expo-av';

interface propsBackground {
  children: JSX.Element,
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

export default function Music() {

  const [playing, setPlaying] = useState(false);

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

// ==================================================================

  const [sound, setSound] = useState<Audio.Sound>();

  async function playOrPauseMusic() {
    await prepareSound();
  }
  
  async function prepareSound() {
    const isNotPlaying = !playing;

    if(isNotPlaying) {
      if(sound === undefined) {

        console.log('Carregando o áudio...');
        const { sound } = await Audio.Sound.createAsync(
          require('../assets/music/Gravity.mp3')
        );
        setSound(sound);

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
                Tocando podcast
              </TopBar.Title>
              <TopBar.SubTitle>
                Hipsters Ponto Tech
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
                  uri: "https://upload.wikimedia.org/wikipedia/pt/9/9f/Continuum_por_John_Mayer.jpg"
                }}
              />
            </CoverArea>

            <PlayerArea>
              
              <PlayerArea.Content>

                <PlayerArea.Content.Info>
                  <PlayerArea.Content.Info.Title>
                    Gravity
                  </PlayerArea.Content.Info.Title>
                  <PlayerArea.Content.Info.Author>
                    John Mayer
                  </PlayerArea.Content.Info.Author>
                </PlayerArea.Content.Info>

                <PlayerArea.Content.FavoriteButton />

              </PlayerArea.Content>

            </PlayerArea>

            <Controls>

              <SliderComponent />

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