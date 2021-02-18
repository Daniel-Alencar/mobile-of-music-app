import React from 'react';

import MusicContainer from './MusicContainer/MusicContainer';
import DefaultScreen from '../../components/DefaultScreen';
import MusicBar from '../../components/MusicBar';

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
            />
            <MusicContainer 
              musicName="In Repair" 
              imageSource={require('../../assets/images/Playlist/Continuum.jpg')}
              centerTextMusic={true}  
            />
            <MusicContainer 
              musicName="Ao som do mar"
              centerTextMusic={true}  
            />
            <MusicBar />
          </>
        }
      />
      
    </>
  );
}
