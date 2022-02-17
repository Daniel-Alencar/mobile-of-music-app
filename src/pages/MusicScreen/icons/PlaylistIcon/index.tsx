import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export default function PlaylistIcon() {
  return(
    <Svg width="25" height="25" viewBox="0 0 75 75" fill="none" >
      <Path d="M65.625 37.75H9.375" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M65.625 18.75H9.375" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M65.625 56.75H9.375" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <Rect width="75" height="75" stroke="black"/>
    </Svg>
  );
}