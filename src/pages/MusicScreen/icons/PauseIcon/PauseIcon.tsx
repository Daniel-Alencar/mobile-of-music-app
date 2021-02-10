import React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';

export default function PauseIcon() {
  return(
    <Svg 
      width="60" 
      height="60" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="white" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
    >
      <Circle cx="12" cy="12" r="10">
      </Circle>
      <Line x1="10" y1="15" x2="10" y2="9"></Line>
      <Line x1="14" y1="15" x2="14" y2="9"></Line>
    </Svg>
  );
}