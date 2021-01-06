import React from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import homeIcon from './src/images/home-icon.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainerView}>

        <ScrollView style={styles.contentContainer}>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                
                <View style={styles.playlistContainer}>
                  <View style={styles.playlist}>

                  </View>
                  <Text style={styles.playlistName}>
                    Lo-Fi
                  </Text>
                  <Text style={styles.playlistCreator}>
                    Chilled cow
                  </Text>
                </View>
                <View style={styles.playlistContainer}>
                  <View style={styles.playlist}>

                  </View>
                  <Text style={styles.playlistName}>
                    Lo-Fi
                  </Text>
                  <Text style={styles.playlistCreator}>
                    Chilled cow
                  </Text>
                </View>
                <View style={styles.playlistContainer}>
                  <View style={styles.playlist}>

                  </View>
                  <Text style={styles.playlistName}>
                    Lo-Fi
                  </Text>
                  <Text style={styles.playlistCreator}>
                    Chilled cow
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={styles.playlistsContainer}>
            <Text style={styles.titles}>Mais ouvidas</Text>
            <View style={styles.playlistsView}>
              <ScrollView horizontal style={styles.playlists}>
                
                <View style={styles.playlistContainer}>
                  <View style={styles.playlist}>

                  </View>
                  <Text style={styles.playlistName}>
                    Lo-Fi
                  </Text>
                  <Text style={styles.playlistCreator}>
                    Chilled cow
                  </Text>
                </View>
                <View style={styles.playlistContainer}>
                  <View style={styles.playlist}>

                  </View>
                  <Text style={styles.playlistName}>
                    Lo-Fi
                  </Text>
                  <Text style={styles.playlistCreator}>
                    Chilled cow
                  </Text>
                </View>
                <View style={styles.playlistContainer}>
                  <View style={styles.playlist}>

                  </View>
                  <Text style={styles.playlistName}>
                    Lo-Fi
                  </Text>
                  <Text style={styles.playlistCreator}>
                    Chilled cow
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
          
        </ScrollView>
      </View>

      <View style={styles.navigationBar}>
        <View style={styles.subNavigationBar}>
          <TouchableOpacity style={styles.itemNavigationBar} onPress={() => {}}>
            <Feather name="home" size={35}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemNavigationBar} onPress={() => {}}>
            <Feather name="search" size={35}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemNavigationBar} onPress={() => {}}>
            <Feather name="disc" size={35}/>
          </TouchableOpacity>
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
  contentContainer: {
    borderColor: '#ff0',
    borderWidth: 0,

    padding: '0%',
    paddingTop: '1%',
    paddingBottom: '1%',
  },
  playlistsContainer: {
    marginTop: 0,

    borderColor: '#f0f',
    borderWidth: 0,

    height: 215,
    width: '100%',
  },
  titles: {
    color: '#fff',

    marginLeft: '4%',

    fontSize: 25,
    fontWeight: "bold",
  },
  playlistsView: {
    height: 180,
    width: '100%',
  },
  playlists: {
    borderColor: '#f00',
    borderWidth: 0,
  },
  playlistContainer: {
    borderColor: '#0ff',
    borderWidth: 0,

    width: 125,
    height: 175,
    marginLeft: 15,
  },
  playlist: {
    width: '100%',
    height: 125,

    backgroundColor: '#342d2d',

    borderColor: '#0ff',
    borderWidth: 0,
  },
  playlistName: {
    color: '#fff',
    fontSize: 20,
  },
  playlistCreator: {
    color: '#b7b7b7',
    fontSize: 12,
  },
  navigationBar: {
    backgroundColor: '#4e4b4b',

    borderColor: '#0f0',
    borderWidth: 0,

    alignItems: 'center',

    height: 50,
    width: windowWidth,
  },
  subNavigationBar: {
    borderColor: '#0f0',
    borderWidth: 0,

    height: '100%',
    width: '70%',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemNavigationBar: {
    borderColor: '#0ff',
    borderWidth: 0,

    height: '100%',
    width: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
