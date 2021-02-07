import React, { useState } from 'react';
import styled from 'styled-components';

import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ChevronIcon from '../components/MusicScreen/ChevronIcon';
import MoreVertIcon from '../components/MusicScreen/MoreVertIcon';

import FavoriteButton from '../components/FavoriteButton';
import ShuffleButton from '../components/MusicScreen/ShuffleButton';
import RepeatButton from '../components/MusicScreen/RepeatButton';
import PauseIcon from '../components/MusicScreen/PauseIcon';
import PlayIcon from '../components/MusicScreen/PlayIcon';

import SliderComponent from '../components/MusicScreen/SliderComponent';

import api from '../services/api';

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

const TopBar = styled.View`
  border-color: #f00;
  border-width: 0;

  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  justify-content: center;

  padding-left: 16px;
`;
TopBar.Middle = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;
TopBar.Right = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;

  padding-right: 16px;
`;

TopBar.Left.ToBackScreen = styled.TouchableOpacity`

`;
TopBar.Right.MoreOptions = styled.TouchableOpacity`

`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;

`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

// ==========================================================================

const ScreenArea = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
`;

// ==========================================================================

const CoverArea = styled.View`
  flex: 4;
  padding-top: 20px;
`;

CoverArea.Image = styled.Image`
  
  flex: 1;
  width: 100%;
`;

const PlayerArea = styled.View`
  flex: 2;
  justify-content: flex-end;
`;

PlayerArea.Content = styled.View`
  flex-direction: row;
`;

PlayerArea.Content.Info = styled.View`
  flex: 1;
`;

PlayerArea.Content.Info.Title = styled.Text`
  color: #fff;
  font-size: 16px;
`;

PlayerArea.Content.Info.Author = styled.Text`
  color: #bbb;
  font-size: 14px;
`;


PlayerArea.Content.FavoriteButton = styled(FavoriteButton)`

`;

// =======================================================

const Controls = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
`;

Controls.Play = styled.TouchableOpacity`

`;
Controls.SkipBack = styled.TouchableOpacity`

`;
Controls.SkipForward = styled.TouchableOpacity`

`;

export default function Music() {

  const [playing, setPlaying] = useState(true);

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

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

              <Controls.Play onPress={() => setPlaying(playing == false)}>
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