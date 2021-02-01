import React, { useState } from 'react';
import styled from 'styled-components';

import RepeatIcon from './RepeatIcon';

const Repeat = styled.TouchableOpacity`

`;

export default function RepeatButton() {

  const [clicked, setClicked] = useState(false);
  return(
    <Repeat
      onPress={
        () => {
          setClicked(!clicked)
        }
      }
    >
      <RepeatIcon
        color={
          clicked ?
            '#0f0'
          :
            '#fff'
        }
      />
    </Repeat>
  );
}