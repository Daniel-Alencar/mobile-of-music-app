import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ArtistContainer() {
  return (
    <View style={styles.artistContainer}>
      <View style={styles.artist}>

      </View>
      <Text style={styles.artistName}>
        John Mayer
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  artistContainer: {
    borderColor: '#0ff',
    borderWidth: 0,

    width: 125,
    height: 175,
    marginLeft: 15,
  },
  artist: {
    width: '100%',
    height: 125,

    backgroundColor: '#342d2d',

    borderColor: '#0ff',
    borderWidth: 0,
    borderRadius: 100,
  },
  artistName: {
    color: '#b7b7b7',
    fontSize: 16,

    borderColor: '#0ff',
    borderWidth: 0,

    textAlignVertical: 'center',
    textAlign: 'center',
  },
});