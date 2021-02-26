import React from 'react';
import { maxSliderValue, minSliderValue } from '../../../settingsDefault';

import { SliderComp } from './Slider.styles';
import { AudioSlider } from './Slider.styles';

export default function Slider(props: any) {
  return (
    <SliderComp>
      <AudioSlider 
        thumbTintColor="#fff"
        maximumTrackTintColor="#777"
        minimumTrackTintColor="#f00"
        minimumValue={minSliderValue}
        maximumValue={maxSliderValue}

        value={props.value}

        onSlidingComplete={props.onSlidingComplete}
        onSlidingStart={props.onSlidingStart}
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
