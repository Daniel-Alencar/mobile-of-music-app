import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
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
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    borderColor: '#fff',
    borderWidth: 0,
    marginTop: 0,
    height: '100%',
    width: '100%',
    padding: '6%'
  },
  playlistsContainer: {
    borderColor: '#fff',
    borderWidth: 0,
    height: '33%'
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
    borderWidth: 0,
    width: '100%',
  },
  playlist: {
    borderColor: '#555',
    borderWidth: 1,
    width: 150,
    height: 150,
    marginRight: 10,
  },
});
