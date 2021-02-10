import React, { useState } from 'react';
import styled from 'styled-components';

import RepeatIcon from '../icons/RepeatIcon/RepeatIcon';

const Repeat = styled.TouchableOpacity`

`;

interface propsRepeatButton {
  isClicked: boolean,
}

export default function RepeatButton(props: propsRepeatButton) {

  const [clicked, setClicked] = useState(props.isClicked);
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