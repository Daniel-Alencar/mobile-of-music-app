import React from 'react';

import MusicContainer from '../components/Salvos/MusicContainer';
import PlusButton from '../components/PlusButton';
import DefaultScreen from '../components/DefaultScreen';

export default function DownloadsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            <MusicContainer 
            musicName="Gravity" 
            imageSource={require('../images/Playlists/Continuum.jpg')}
            centerTextMusic={true} 
            />
            <MusicContainer 
              musicName="In Repair" 
              imageSource={require('../images/Playlists/Continuum.jpg')}
              centerTextMusic={true}  
            />
            <MusicContainer 
              musicName="Ao som do mar"
              centerTextMusic={true}  
            />
          </>
        }
      />
    </>
  );
}
