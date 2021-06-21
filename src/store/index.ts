import { createStore, combineReducers } from 'redux';

import infoMusic from './infoMusic/infoMusic.reducer';
import sliderValue from './sliderValue/sliderValue.reducer';

export interface StateReducerData {
  infoMusicData: {
    key: number,
    playing: boolean,
    incomplete: boolean,
  },
  sliderValueData: {
    value: number,
  }
}

const rootReducer = combineReducers({
  infoMusic,
  sliderValue
});

const store = createStore(rootReducer);

export default store;