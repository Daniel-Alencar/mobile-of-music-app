import React, { useState } from 'react';
import styled from 'styled-components';

import Slider from '@react-native-community/slider';

const SliderComp = styled.View`

  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;
`;

const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

SliderComp.CurrentTime = styled.Text`
  color: #bbb; 
`;

SliderComp.TotalTime = styled.Text`
  color: #bbb;
`;

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
