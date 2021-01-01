import { StatusBar } from 'expo-status-bar';
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
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#fff',
    borderWidth: 0,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainerView: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    borderColor: '#fff',
    borderWidth: 0,
    marginTop: '20%',
    padding: '6%',
    paddingTop: '1%'
  },
  playlistsContainer: {
    borderColor: '#fff',
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
    borderColor: '#555',
    borderWidth: 1,
    width: '100%',
  },
  playlist: {
    borderColor: '#555',
    borderWidth: 1,
    width: 150,
    height: 150,
    marginRight: 10,
  },
  navigationBar: {
    borderColor: '#555',
    borderWidth: 1,
    height: 100,
    width: '100%'
  },
  subNavigationBar: {

  },
  itemNavigationBar: {

  },
});
