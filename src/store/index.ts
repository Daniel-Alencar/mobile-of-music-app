import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MusicInformationReducer from './MusicInformation/MusicInformation.reducer';
import MusicPlaylistReducer from './MusicPlaylist/MusicPlaylist.reducer';

export interface MusicData {
  imageSource?: string,
  musicSource: any,
  key: string,
  name: string,
  artist: string,
  favorite: boolean,
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
  MusicInformation: MusicInformationReducer,
  MusicPlaylist: MusicPlaylistReducer
});

const persistedReducer = persistReducer({
  key: 'root',
  storage: AsyncStorage
}, rootReducer);

export const store = createStore(persistedReducer);
export const persistedStore = persistStore(store);
