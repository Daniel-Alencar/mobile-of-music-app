
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

    backgroundColor: '#555',
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

    padding: '6%',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  playlistsContainer: {
    marginTop: 15,

    borderColor: '#f0f',
    borderWidth: 0,

    height: 200,
    width: '100%',
  },
  titles: {
    color: '#fff',

    fontSize: 25,
    fontWeight: "bold",
  },
  playlistsView: {
    height: 150,
    width: '100%',
  },
  playlists: {
    borderColor: '#f00',
    borderWidth: 0,
  },
  playlist: {
    borderColor: '#0ff',
    borderWidth: 1,

    width: 125,
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
