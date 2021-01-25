import React from 'react';
import styled from 'styled-components';

const Background = styled.View`
  flex: 1;
  background-color: grey;

  padding-top: 50px;
`;

const TopBar = styled.View`
  border-color: #f00;
  border-width: 3;
`;
TopBar.Title = styled.Text`
  color: white;
`;
TopBar.SubTitle = styled.Text`
  color: white;
`;

export default function Music() {
  return(
    <Background>
      <TopBar>

        <ChevronIcon />

        <TopBar.Title>
          Tocando podcast
        </TopBar.Title>
        <TopBar.SubTitle>
          Hipsters Ponto Tech
        </TopBar.SubTitle>

        <MoreVertIcon />

      </TopBar>
    </Background>
  );
}