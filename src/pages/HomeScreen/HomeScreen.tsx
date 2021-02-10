import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import PlaylistsContainer from './PlaylistsContainer/PlaylistsContainer';
import ArtistsContainer from './ArtistsContainer/ArtistsContainer';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView 
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >

          <TouchableOpacity onPress={() => {}} style={styles.settingsContainer}>
            <Feather name="settings" size={25} color="white"></Feather>
          </TouchableOpacity>

          <ArtistsContainer title="Artistas recomendados"/>
          <PlaylistsContainer title="Playlists recomendadas"/>
          <ArtistsContainer title="Artistas recomendados"/>
          <PlaylistsContainer title="Playlists recomendadas"/>

        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: windowWidth,

    borderColor: '#f0f',
    borderWidth: 0,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 0,

    height: '100%',
  },
  contentContainer: {
    borderColor: '#f00',
    borderWidth: 0,
  },

  settingsContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1,

    borderColor: '#f0f',
    borderWidth: 0,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
