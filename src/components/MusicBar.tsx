import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import FavoriteButton from './FavoriteButton';

export default function MusicBar() {
  return (
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
          isFavorite={true}
        />
        <FavoriteButton 
          isFavorite={true}
        />
      </View>
    </View>
  );
}

const defaultDimension = 65;
const defaultColorText = '#fff';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderWidth: 1,
    borderColor: 'red',

    backgroundColor: '#4e4b4b',

    width: '100%',
    height: defaultDimension
  },
  leftContainer: {
    borderWidth: 1,
    borderColor: 'red',

    flex: 1,

    flexDirection: 'row',
  },
  textContainer: {
    borderWidth: 1,
    borderColor: 'red',

    justifyContent: 'center',

    padding: 10,
  },
  musicName: {
    color: defaultColorText
  },
  artistName: {
    color: '#bbb'
  },
  rightContainer: {
    borderWidth: 1,
    borderColor: 'red',

    flexDirection: 'row',

  },
  musicImage: {
    width: defaultDimension,
    height: defaultDimension,
  }
});