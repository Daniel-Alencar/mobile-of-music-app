import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function() {
  return (
    <View style={styles.playlistContainer}>
      <View style={styles.playlist}>

      </View>
      <Text style={styles.playlistName}>
        Lo-Fi
      </Text>
      <Text style={styles.playlistCreator}>
        Chilled cow
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  playlistContainer: {
    borderColor: '#0ff',
    borderWidth: 0,

    width: 125,
    height: 175,
    marginLeft: 15,
  },
  playlist: {
    width: '100%',
    height: 125,

    backgroundColor: '#342d2d',

    borderColor: '#0ff',
    borderWidth: 0,
  },
  playlistName: {
    color: '#fff',
    fontSize: 20,
  },
  playlistCreator: {
    color: '#b7b7b7',
    fontSize: 12,
  },
});