import React, { useState } from 'react';
import RepeatIcon from '../icons/RepeatIcon/RepeatIcon';

import { Repeat } from './style';

interface propsRepeatButton {
  isClicked: boolean,
}

export default function RepeatButton(props: propsRepeatButton) {

  const [clicked, setClicked] = useState(props.isClicked);
  return(
    <Repeat onPress={() => setClicked(!clicked)} >
      <RepeatIcon color={clicked ? '#0f0' : '#fff'} />
    </Repeat>
  );
}