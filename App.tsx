
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

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

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 3,
    backgroundColor: '#000',
    height: '100%',
    width: '100%',
  },
  contentContainerView: {
    width: '100%',
    height: '93%',
  },
  contentContainer: {
    borderColor: '#ff0',
    borderWidth: 1,
    padding: '6%',
    paddingTop: '1%'
  },
  playlistsContainer: {
    borderColor: '#f0f',
    borderWidth: 0,
    height: 200,
  },
  titles: {
    color: '#fff',
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  playlistsView: {
    height: 150,
  },
  playlists: {
    borderColor: '#f00',
    borderWidth: 0,
    width: '100%',
  },
  playlist: {
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
    width: '100%'
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
