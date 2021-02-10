import React, { useState } from 'react';
import styled from 'styled-components';

import ShuffleIcon from '../icons/ShuffleIcon/ShuffleIcon';

const Shuffle = styled.TouchableOpacity`

`;


interface propsShuffleButton {
  isClicked: boolean,
}

export default function ShuffleButton(props: propsShuffleButton) {

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