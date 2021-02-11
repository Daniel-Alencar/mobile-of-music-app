import React, { useState } from 'react';

import { SliderComp } from './SliderComponent.styles';
import { AudioSlider } from './SliderComponent.styles';

interface propsSliderComponent {
  musicDuration: string,
  musicDurationInSeconds: number,
  currentMusicTime: string,
  currentMusicTimeInSeconds: number,
}

export default function SliderComponent(props: propsSliderComponent) {

  const maxValueToSliderTimeLine = 100;
  const minValueToSliderTimeLine = 0;

  const [sliderTimeLineValue, setSliderTimeLineValue] = useState(0);

  function convertCurrentTimeOfMusicToValueFromSlider() {
    const value = (maxValueToSliderTimeLine * props.currentMusicTimeInSeconds) / props.musicDurationInSeconds;
    setSliderTimeLineValue(value);
  }
  
  return (
    <SliderComp>
      <AudioSlider 
        thumbTintColor="#fff"
        maximumTrackTintColor="#777"
        minimumTrackTintColor="#f00"

        minimumValue={minValueToSliderTimeLine}
        maximumValue={maxValueToSliderTimeLine}
        value={sliderTimeLineValue}
        onValueChange={() => {}}
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
