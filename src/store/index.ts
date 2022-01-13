import { createStore, combineReducers } from 'redux';

import infoMusic from './infoMusic/infoMusic.reducer';

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
});

const store = createStore(rootReducer);

export default store;