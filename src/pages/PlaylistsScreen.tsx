import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native';

import PlusButton from '../components/PlusButton';
import PlaylistContainer from '../components/Salvos/PlaylistContainer';

export default function PlaylistsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <PlaylistContainer playlistName="playlist" isLikedSongs={true}/>
          <PlaylistContainer playlistName="Continuum" imageSource={require('../images/Albuns/Continuum.jpg')} />
          <PlaylistContainer playlistName="Rock"/>
          <PlaylistContainer playlistName="Pagode"/>

        </ScrollView>
      </View>

      <PlusButton />

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    width: windowWidth,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 0,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 0,
  },
});