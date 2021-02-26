import React, { useState } from 'react';
import ShuffleIcon from '../icons/ShuffleIcon/ShuffleIcon';

import { Shuffle } from './style';

interface propsShuffleButton {
  isClicked: boolean,
}

export default function ShuffleButton(props: propsShuffleButton) {

  const [clicked, setClicked] = useState(props.isClicked);
  return(
    <Shuffle onPress={() => setClicked(!clicked)} >
      <ShuffleIcon color={clicked ? '#0f0' : '#fff'} />
    </Shuffle>
  );
}
