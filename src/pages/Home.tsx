import React from 'react';
import { ScrollView, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import PlaylistsContainer from '../components/PlaylistsContainer';
import ArtistsContainer from '../components/ArtistsContainer';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <TouchableOpacity onPress={() => {}} style={styles.settingsContainer}>
            <Feather name="settings" size={25} color="white"></Feather>
          </TouchableOpacity>

          <PlaylistsContainer/>
          <ArtistsContainer/>
          <PlaylistsContainer/>
          <PlaylistsContainer/>

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
    borderWidth: 3,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 3,

    height: '100%',
  },
  contentContainer: {
    borderColor: '#f00',
    borderWidth: 3,
  },

  settingsContainer: {
    position: 'absolute',
    right: 15,
    top: 15,

    zIndex: 1,

    borderColor: '#f0f',
    borderWidth: 0,
  },
});
