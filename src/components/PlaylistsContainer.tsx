import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import PlaylistContainer from './PlaylistContainer';

export default function() {
  return (
    <View style={styles.playlistsContainer}>
      <Text style={styles.titles}>Tocadas recentemente</Text>
      <View style={styles.playlistsView}>
        <ScrollView overScrollMode="never" horizontal style={styles.playlists}>
          
          <PlaylistContainer/>
          <PlaylistContainer/>
          <PlaylistContainer/>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playlistsContainer: {
    marginTop: 20,

    borderColor: '#f0f',
    borderWidth: 0,

    height: 215,
    width: '100%',
  },
  titles: {
    color: '#fff',

    marginLeft: '4%',

    fontSize: 22,
    fontWeight: "bold",
  },
  playlistsView: {
    height: 180,
    width: '100%',
  },
  playlists: {
    borderColor: '#f00',
    borderWidth: 0,

    marginTop: 7,
  },
});