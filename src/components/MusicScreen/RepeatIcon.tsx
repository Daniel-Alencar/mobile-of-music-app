import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface propsRepeatIcon {
  color: string,
}

export default function RepeatIcon(props: propsRepeatIcon) {
  return(
    <Svg 
      height="27" 
      width="27" 
      viewBox="0 0 20 20"
    >
      <Path 
        d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
        fill={props.color}  
      >
      </Path>
    </Svg>
  );
}