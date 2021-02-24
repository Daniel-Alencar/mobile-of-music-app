import React from 'react';

import DefaultScreen from '../../components/DefaultScreen';
import PlaylistContainer from './PlaylistContainer/PlaylistContainer';

export default function PlaylistsScreen() {
  return (
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
        </>
      } 
    />
  );
}
