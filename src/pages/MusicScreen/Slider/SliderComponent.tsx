import React from 'react';

import { SliderComp } from './SliderComponent.styles';
import { AudioSlider } from './SliderComponent.styles';

interface propsSliderComponent {
  musicDuration: string,
  currentMusicTime: string,

  value: number,
  maximumValue: number,
  minimumValue: number
}

export default function SliderComponent(props: propsSliderComponent) {  
  return (
    <SliderComp>
      <AudioSlider 
        thumbTintColor="#fff"
        maximumTrackTintColor="#777"
        minimumTrackTintColor="#f00"

        minimumValue={props.minimumValue}
        maximumValue={props.maximumValue}
        value={props.value}
      />

      <SliderComp.CurrentTime>
        {props.currentMusicTime}
      </SliderComp.CurrentTime>
      <SliderComp.TotalTime>
        {props.musicDuration}
      </SliderComp.TotalTime>
    </SliderComp>
  );
}
