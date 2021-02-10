import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface propsShuffleIcon {
  color: string,
}

export default function ShuffleIcon(props: propsShuffleIcon) {
  return(
    <Svg 
      height="27" 
      width="27" 
      viewBox="0 0 20 20" 
      fill="none"
    >
      <Path 
        d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
        fill={props.color}
      >
      </Path>
    </Svg>
  );
}