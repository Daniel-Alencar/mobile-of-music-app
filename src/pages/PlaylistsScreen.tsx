import React from 'react';

import DefaultScreen from '../components/DefaultScreen';
import PlusButton from '../components/PlusButton';
import PlaylistContainer from '../components/Salvos/PlaylistContainer';

export default function PlaylistsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            <PlaylistContainer playlistName="playlist" isLikedSongs={true}/>
            <PlaylistContainer playlistName="Continuum" imageSource={require('../images/Playlists/Continuum.jpg')} />
            <PlaylistContainer playlistName="Rock"/>
            <PlaylistContainer playlistName="Pagode"/>
          </>
        } 
      />
    </>
  );
}
