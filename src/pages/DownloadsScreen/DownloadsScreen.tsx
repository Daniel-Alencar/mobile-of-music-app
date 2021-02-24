import React from 'react';

import MusicContainer from './MusicContainer';
import DefaultScreen from '../../components/DefaultScreen';

export default function DownloadsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            <MusicContainer 
              musicName="Gravity" 
              imageSource={require('../../assets/images/Playlist/Continuum.jpg')}
              artistName="John Mayer"
              isFavorite
              centerTextMusic
            />
            <MusicContainer 
              musicName="In Repair" 
              imageSource={require('../../assets/images/Playlist/Continuum.jpg')}
              artistName="John Mayer"
              isFavorite
              centerTextMusic
            />
            <MusicContainer 
              musicName="Its been a long, long time"
              imageSource={require('../../assets/images/Playlist/playlistDefault.png')}
              artistName="Harry James"
              isFavorite
              centerTextMusic
            />
          </>
        }
      />

    </>
  );
}
