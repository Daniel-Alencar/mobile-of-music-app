import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultScreen from '../../components/DefaultScreen';
import { MusicBarHeight } from '../../settingsDefault';
import { StateReducerData } from '../../store';
import PlaylistContainer from './PlaylistContainer/PlaylistContainer';

export default function PlaylistsScreen() {

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return (
    <>
      <DefaultScreen 
        content={
          <>
            <PlaylistContainer 
              playlistName="playlist" 
              isLikedSongs
            />
            <PlaylistContainer 
              playlistName="Continuum" 
              imageSource={require('../../assets/images/Playlist/Continuum.jpg')} 
            />
            <PlaylistContainer 
              playlistName="Rock"
            />
            <PlaylistContainer 
              playlistName="Pagode"
            />
            <PlaylistContainer 
              playlistName="Rock"
            />
            <PlaylistContainer 
              playlistName="Pagode"
            />
            <PlaylistContainer 
              playlistName="Rock"
            />
            <PlaylistContainer 
              playlistName="Pagode"
            />
            <PlaylistContainer 
              playlistName="Rock"
            />
            <PlaylistContainer 
              playlistName="Pagode"
            />
          </>
        } 
      />
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }} />
    </>
  );
}
