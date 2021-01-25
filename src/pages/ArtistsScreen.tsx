import React from 'react';

import DefaultScreen from '../components/DefaultScreen';
import PlusButton from '../components/PlusButton';
import ArtistContainer from '../components/Salvos/ArtistContainer';

export default function ArtistsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../images/Artists/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="Daniel Alencar" 
            />
          </>
        }
      />
    </>
  );
}
