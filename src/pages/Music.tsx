import React, { useState } from 'react';
import { Slider } from 'react-native';
import styled from 'styled-components';

import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';
import { Feather } from '@expo/vector-icons';

import ChevronIcon from '../components/MusicScreen/ChevronIcon';
import MoreVertIcon from '../components/MusicScreen/MoreVertIcon';
import PlayIcon from '../components/MusicScreen/PlayIcon';
import ShuffleIcon from '../components/MusicScreen/ShuffleIcon';
import RepeatIcon from '../components/MusicScreen/RepeatIcon';

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

PlayerArea.Title = styled.Text`
  color: #fff;
  font-size: 20px;
`;

PlayerArea.Author = styled.Text`
  color: #bbb;
  font-size: 16px;
`;

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
Controls.Shuffle = styled.TouchableOpacity`

`;
Controls.Repeat = styled.TouchableOpacity`

`;

Controls.Slider = styled.View`

  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;

  
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;

  padding: 0px;
  margin: 0px;
`;

Controls.Slider.CurrentTime = styled.Text`
  color: #bbb; 
`;

Controls.Slider.TotalTime = styled.Text`
  color: #bbb;
`;

export default function Music() {

  const [currentTime, setCurrentTime] = useState(0);
  const [sound, setSound] = React.useState<Audio.Sound>();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/gravity.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return(
    <Background 
      children={
        <>

          <TopBar>

            <TopBar.Left>
              <ChevronIcon />
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
              <MoreVertIcon />
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
              <PlayerArea.Title>
                Angular vs React - Hipsters #14
              </PlayerArea.Title>
              <PlayerArea.Author>
                Hipsters ponto Tech
              </PlayerArea.Author>
            </PlayerArea>

            <Controls>

              <Controls.Slider>

                <AudioSlider 
                  thumbTintColor="#fff"
                  maximumTrackTintColor="#777"
                  minimumTrackTintColor="#1dd65f"

                  minimumValue={0}
                  maximumValue={100}
                  value={currentTime}

                  onValueChange={(value) => setCurrentTime(value)}
                />

                <Controls.Slider.CurrentTime>
                  {currentTime}
                </Controls.Slider.CurrentTime>
                <Controls.Slider.TotalTime>
                  100
                </Controls.Slider.TotalTime>

              </Controls.Slider>

              <Controls.Shuffle>
                <ShuffleIcon />
              </Controls.Shuffle>
              
              <Controls.SkipBack>
                <Feather name="skip-back" color="#fff" size={33}/>
              </Controls.SkipBack>

              <Controls.Play onPress={() => playSound()}>
                <PlayIcon />
              </Controls.Play>
              
              <Controls.SkipForward>
                <Feather name="skip-forward" color="#fff" size={33}/>
              </Controls.SkipForward>
              
              <Controls.Repeat>
                <RepeatIcon />
              </Controls.Repeat>

            </Controls>

          </ScreenArea>

        </>
      }
    />
  );
}