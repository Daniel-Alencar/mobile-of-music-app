import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import {Feather} from '@expo/vector-icons';

import FavoriteButton from '../FavoriteButton';

import { connect } from 'react-redux';

import styles from './style';

import songs from '../../pages/MusicScreen/songs';

const windowWidth = Dimensions.get('window').width;

function MusicBar(state: any) {

  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <View style={{ width: state.value, height: 0.8, backgroundColor: '#fff' }}/>
      <View style={styles.container}>
        

        <View style={styles.leftContainer}>
          <Image 
            source={{ uri:songs[state.keyOfMusic].imageSource }}
            style={styles.musicImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.musicName}>
              {songs[state.keyOfMusic].name}
            </Text>
            <Text style={styles.artistName}>
              {songs[state.keyOfMusic].artist}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={songs[state.keyOfMusic].favorite}
          />
          <TouchableOpacity style={styles.playAndPauseButton} onPress={() => setIsPlaying(!isPlaying)}>
            <Feather name={isPlaying ? 'pause' : 'play'} color='#fff' size={25}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function mapStateToProps(state : any) {
  return {
    keyOfMusic: state.infoMusic.key,
    value: state.sliderValue.value
  }
}

export default connect(mapStateToProps)(MusicBar)