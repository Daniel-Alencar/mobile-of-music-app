import React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function PlayIcon() {
  return(
    <Svg 
      width="70" 
      height="70" 
      viewBox="0 0 56 56" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path 
        d="M28 0C12.544 0 0 12.544 0 28C0 43.456 12.544 56 28 56C43.456 56 56 43.456 56 28C56 12.544 43.456 0 28 0ZM22.4 40.6V15.4L39.2 28L22.4 40.6Z" 
        fill="white"
      />
    </Svg>

  );
}