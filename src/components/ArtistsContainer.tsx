import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import ArtistContainer from './ArtistContainer';

export default function ArtistsContainer() {
  return (
    <View style={styles.artistsContainer}>
      <Text style={styles.titles}>Artistas favoritos</Text>
      <View style={styles.artistsView}>
        <ScrollView overScrollMode="never" horizontal style={styles.artists}>
          
          <ArtistContainer/>
          <ArtistContainer/>
          <ArtistContainer/>

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  artistsContainer: {
    marginTop: 20,

    borderColor: '#f0f',
    borderWidth: 0,

    height: 215,
    width: '100%',
  },
  artistsView: {
    height: 180,
    width: '100%',
  },
  artists: {
    borderColor: '#f00',
    borderWidth: 0,

    marginTop: 7,
  },

  titles: {
    color: '#fff',

    marginLeft: '4%',

    fontSize: 22,
    fontWeight: "bold",
  },
});
