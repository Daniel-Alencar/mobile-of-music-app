import React from 'react';

import MusicContainer from './MusicContainer/MusicContainer';
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
              centerTextMusic={true} 
              artistName="John Mayer"
            />
            <MusicContainer 
              musicName="In Repair" 
              imageSource={require('../../assets/images/Playlist/Continuum.jpg')}
              centerTextMusic={true}  
              artistName="John Mayer"
            />
            <MusicContainer 
              musicName="Its been a long, long time"
              imageSource={require('../../assets/images/Playlist/playlistDefault.png')}
              centerTextMusic={true}  
              artistName="Harry James"
            />
            
          </>
        }
      />

    </>
  );
}
