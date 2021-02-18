import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

import {Feather} from '@expo/vector-icons';

import FavoriteButton from './FavoriteButton';

interface propsMusicBar {
  isPlaying: boolean,
}

export default function MusicBar(props: propsMusicBar) {

  const [isPlaying, setIsPlaying] = useState(props.isPlaying);

  return (
    <>
      <View style={{ width: '10%', height: 0.8, backgroundColor: '#fff' }}/>
      <View style={styles.container}>
        

        <View style={styles.leftContainer}>
          <Image 
            source={require('../assets/images/Music/musicDefault.jpg')}
            style={styles.musicImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.musicName}>
              Gravity
            </Text>
            <Text style={styles.artistName}>
              John Mayer
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton 
            isFavorite={false}
          />
          <TouchableOpacity style={styles.playAndPauseButton} onPress={() => setIsPlaying(!isPlaying)}>
            <Feather name={isPlaying ? 'pause' : 'play'} color={defaultColorText} size={25}/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const defaultDimension = 65;
const defaultColorText = '#fff';
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderWidth: 0,
    borderColor: 'red',

    backgroundColor: '#4e4b4b',

    width: windowWidth,
    height: defaultDimension,
  },
  leftContainer: {
    borderWidth: 0,
    borderColor: 'red',

    flex: 1,

    flexDirection: 'row',
  },
  textContainer: {
    borderWidth: 0,
    borderColor: 'red',

    justifyContent: 'center',

    padding: 10,
  },
  musicName: {
    color: defaultColorText,
  },
  artistName: {
    color: '#bbb',
  },
  rightContainer: {
    borderWidth: 0,
    borderColor: 'red',

    flexDirection: 'row',
  },
  musicImage: {
    width: defaultDimension,
    height: defaultDimension,
  },

  playAndPauseButton: {
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    width: 50,
  }
});