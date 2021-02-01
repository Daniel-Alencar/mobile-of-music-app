import React, { useState } from 'react';
import styled from 'styled-components';

import ShuffleIcon from './ShuffleIcon';

const Shuffle = styled.TouchableOpacity`

`;

export default function ShuffleButton() {

  const [clicked, setClicked] = useState(false);
  return(
    <Shuffle
      onPress={
        () => {
          setClicked(!clicked)
        }
      }
    >
      <ShuffleIcon
        color={
          clicked ?
            '#0f0'
          :
            '#fff'
        }
      />
    </Shuffle>
  );
}