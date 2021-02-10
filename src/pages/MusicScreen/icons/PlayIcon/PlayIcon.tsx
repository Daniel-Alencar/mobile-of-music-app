import React from 'react';
import Svg, { Circle, Polygon } from 'react-native-svg';

export default function PlayIcon() {
  return(
    <Svg 
      width="60" 
      height="60" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="white" 
      stroke-width="1.5" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <Circle cx="12" cy="12" r="10"></Circle>
      <Polygon points="10 8 16 12 10 16 10 8"></Polygon>
    </Svg>
  );
}