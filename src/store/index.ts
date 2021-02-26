import { createStore, combineReducers } from 'redux';

import infoMusic from './infoMusic/infoMusic.reducer';
import sliderValue from './sliderValue/sliderValue.reducer';

const rootReducer = combineReducers({
  infoMusic,
  sliderValue
});

const store = createStore(rootReducer);

export default store;