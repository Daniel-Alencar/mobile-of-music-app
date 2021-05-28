import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './style';

import FavoriteButton from '../FavoriteButton';

import { useSelector } from 'react-redux';

import songs from '../../pages/songsOfPlaylist';

import { maxSliderValue, windowWidth } from '../../settingsDefault';

function MusicBar() {

  // const propsFromRedux = useSelector((state: any) => {
  //   return {
  //     keyOfMusic: state.infoMusic.key,
  //     value: state.sliderValue.value
  //   }
  // });

  function convertValueFromSliderToWidth(valueFromSlider: number) {
    return valueFromSlider * windowWidth / maxSliderValue;
  }

  return (
    <>
      <View style={{ width: convertValueFromSliderToWidth(100), height: 0.8, backgroundColor: '#fff' }}/>
      <View style={styles.container}>
        

        <View style={styles.leftContainer}>
          <Image 
            source={{ uri:songs[0].imageSource }}
            style={styles.musicImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.musicName}>
              {songs[0].name}
            </Text>
            <Text style={styles.artistName}>
              {songs[0].artist}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={songs[0].favorite}
          />
          <TouchableOpacity style={styles.playAndPauseButton} onPress={() => {}}>
            <Feather name={'play'} color='#fff' size={25}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default MusicBar;