import React, { useState } from 'react';

import { SliderComp } from './SliderComponent.styles';
import { AudioSlider } from './SliderComponent.styles';

export default function SliderComponent() {

  const maxValueToSliderTimeLine = 100;
  const minValueToSliderTimeLine = 0;

  const [sliderTimeLineValue, setSliderTimeLineValue] = useState(0);

  function convertSecondsInTime(secs: number) {
    let minutes = Math.floor(secs / 60);
    let seconds = Math.ceil(secs - (minutes * 60));
    let stringMinutes;
    let stringSeconds;

    if(minutes < 10) {
      stringMinutes = `0${minutes}`;
    }
    if(seconds < 10) {
      stringSeconds = `0${seconds}`;
    }
    return `${stringMinutes}:${stringSeconds}`;
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
        {}
      </SliderComp.CurrentTime>
      <SliderComp.TotalTime>
        {}
      </SliderComp.TotalTime>
    </SliderComp>
  );
}
