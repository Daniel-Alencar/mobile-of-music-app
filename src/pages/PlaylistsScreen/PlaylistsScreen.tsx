import React from 'react';

import DefaultScreen from '../../components/DefaultScreen';
import PlusButton from '../../components/PlusButton';
import PlaylistContainer from './PlaylistContainer/PlaylistContainer';

export default function PlaylistsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            <PlaylistContainer playlistName="playlist" isLikedSongs={true}/>
            <PlaylistContainer playlistName="Continuum" imageSource={require('../../assets/images/Playlist/Continuum.jpg')} />
            <PlaylistContainer playlistName="Rock"/>
            <PlaylistContainer playlistName="Pagode"/>
          </>
        } 
      />
    </>
  );
}
