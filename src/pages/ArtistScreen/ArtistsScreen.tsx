import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import DefaultScreen from '../../components/DefaultScreen';
import { MusicBarHeight } from '../../settingsDefault';
import { StateReducerData } from '../../store';
import ArtistContainer from './ArtistContainer';

export default function ArtistsScreen() {

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

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
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            <ArtistContainer 
              artistName="John Mayer" 
              imageSource={require('../../assets/images/Artist/JohnMayer.png')}
            />
            
          </>
        }
      />
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }} />
    </>
  );
}
