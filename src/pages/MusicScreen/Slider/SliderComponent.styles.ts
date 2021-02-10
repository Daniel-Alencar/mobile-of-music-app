import styled from 'styled-components';
import Slider from '@react-native-community/slider';

export const SliderComp = styled.View`

  flex-basis: 100%;
  flex-direction: row;
  justify-content: space-between;

  flex-wrap: wrap;
`;

export const AudioSlider = styled(Slider)`
  flex-basis: 100%;
  padding-bottom: 5px;
`;

SliderComp.CurrentTime = styled.Text`
  color: #bbb; 
`;

SliderComp.TotalTime = styled.Text`
  color: #bbb;
`;