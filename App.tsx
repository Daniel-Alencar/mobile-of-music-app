
import React from 'react';

import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainerView}>

        <ScrollView style={styles.contentContainer}>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
                <View style={styles.playlist}>

                </View>
              </ScrollView>
            </View>
          </View>

        </ScrollView>
      </View>

      <View style={styles.navigationBar}>
        <View style={styles.subNavigationBar}>
          <View style={styles.itemNavigationBar}>
          
          </View>
          <View style={styles.itemNavigationBar}>
          
          </View>
          <View style={styles.itemNavigationBar}>
          
          </View>
        </View>
      </View>

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
  contentContainer: { // ScrollView
    borderColor: '#ff0',
    borderWidth: 0,

    padding: '6%',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  playlistsContainer: {
    borderColor: '#f0f',
    borderWidth: 0,

    height: 200,
    width: '100%',
  },
  titles: {  // falta ver began
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  playlistsView: {
    height: 150,
  },
  playlists: { // ScrollView
    borderColor: '#f00',
    borderWidth: 0,
    width: '100%',
  },
  playlist: {   // falta ver end
    borderColor: '#0ff',
    borderWidth: 1,
    width: 150,
    height: 150,
    marginRight: 10,
  },
  navigationBar: {
    borderColor: '#0f0',
    borderWidth: 1,

    alignItems: 'center',

    height: 50,
    width: windowWidth,
  },
  subNavigationBar: {
    borderColor: '#0f0',
    borderWidth: 1,

    height: '100%',
    width: '70%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemNavigationBar: {
    borderColor: '#0ff',
    borderWidth: 1,
    
    height: '100%',
    width: 50,
  },
});
