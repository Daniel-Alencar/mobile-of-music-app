import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import NavigationBar from './src/components/NavigationBar';
import PlaylistContainer from './src/components/PlaylistContainer';
import ArtistContainer from './src/components/ArtistContainer';

import { Feather } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainerView}>

        <ScrollView style={styles.contentContainer}>

          <TouchableOpacity style={styles.settingsContainer}>
            <Feather name="settings" size={25} color="white"></Feather>
          </TouchableOpacity>

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
          
          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView overScrollMode="never" horizontal style={styles.playlists}>
                
                <PlaylistContainer/>
                <PlaylistContainer/>
                <PlaylistContainer/>

              </ScrollView>
            </View>
          </View>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Recomendações</Text>
            <View style={styles.playlistsView}>
              <ScrollView overScrollMode="never" horizontal style={styles.playlists}>
                
                <PlaylistContainer/>
                <PlaylistContainer/>
                <PlaylistContainer/>

              </ScrollView>
            </View>
          </View>
          
        </ScrollView>
      </View>

      <NavigationBar/>

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 0,

    backgroundColor: '#000',
    height: windowHeight,
    width: windowWidth,
  },
  contentContainerView: {
    width: windowWidth - 1,
    height: windowHeight - 50,
  },
  contentContainer: {
    borderColor: '#ff0',
    borderWidth: 0,

    padding: '0%',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  settingsContainer: {
    position: 'absolute',
    right: 15,
    top: 15,

    zIndex: 1,

    borderColor: '#f0f',
    borderWidth: 0,
  },




  playlistsContainer: {
    marginTop: 20,

    borderColor: '#f0f',
    borderWidth: 1,

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
});
