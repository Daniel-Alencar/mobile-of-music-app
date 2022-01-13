import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import MusicInformation from './MusicInformation/MusicInformation.reducer';

export interface MusicData {
  imageSource: string,
  musicSource: any,
  key: string,
  name: string,
  artist: string,
  favorite: boolean
}

export interface MusicInformation {
  indexOfMusic: number,
  playing: boolean,
  incomplete: boolean
}

export interface StateReducerData {
  MusicInformation: MusicInformation,
  MusicPlaylist: MusicData[]
}

const rootReducer = combineReducers({
  MusicInformation: MusicInformation
});

const persistedReducer = persistReducer({
  key: 'root',
  storage: storage
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
