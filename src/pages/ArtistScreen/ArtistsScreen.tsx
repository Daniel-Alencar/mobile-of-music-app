import React from 'react';

import DefaultScreen from '../../components/DefaultScreen';
import ArtistContainer from './ArtistContainer/ArtistContainer';

export default function ArtistsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
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
