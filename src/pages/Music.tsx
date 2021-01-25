import React from 'react';
import styled from 'styled-components';

import { LinearGradient } from 'expo-linear-gradient';

import ChevronIcon from '../components/MusicScreen/ChevronIcon';
import MoreVertIcon from '../components/MusicScreen/MoreVertIcon';

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

export default function Music() {
  return(
    <Background>

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

    </Background>
  );
}