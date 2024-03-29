import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import PlaylistContainer from '../PlaylistContainer/PlaylistContainer';

interface propsPlaylistsContainer {
  title: string,
}

const defaultMargin = 7.5;

export default function PlaylistsContainer(props: propsPlaylistsContainer) {
  return (
    <View style={styles.playlistsContainer}>

      <Text style={styles.titles}>{props.title}</Text>

      <View style={styles.playlistsView}>
        <ScrollView 
          overScrollMode="never" 
          horizontal 
          style={styles.playlists}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: defaultMargin,
            paddingLeft: defaultMargin,

            flexGrow: 0,
            justifyContent: 'space-between',
            
            flexDirection: 'row',
            alignItems: 'center',

            width: 'auto',

            borderColor: '#0f0',
            borderWidth: 0,
          }}
        >
          
          <PlaylistContainer 
            playlistName="Lo-Fi"
            playlistCreator="Chilled cow"
          />
          <PlaylistContainer 
            playlistName="Lo-Fi"
            playlistCreator="Chilled cow"
          />
          <PlaylistContainer 
            playlistName="Lo-Fi"
            playlistCreator="Chilled cow"
          />
          <PlaylistContainer 
            playlistName="Lo-Fi"
            playlistCreator="Chilled cow"
          />
          <PlaylistContainer 
            playlistName="Lo-Fi"
            playlistCreator="Chilled cow"
          />
          <PlaylistContainer 
            playlistName="Lo-Fi"
            playlistCreator="Chilled cow"
          />

        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  playlistsContainer: {

    borderColor: '#f0f',
    borderWidth: 0,

    height: 240,
    width: '100%',

    flexDirection: 'column',
    justifyContent: 'center',
  },
  titles: {
    color: '#fff',
    fontSize: 22,
    fontWeight: "bold",

    borderColor: '#f00',
    borderWidth: 0,

    marginLeft: defaultMargin + 7.5,
  },
  playlistsView: {
    height: 200,
    width: '100%',

    borderColor: '#0f0',
    borderWidth: 0,
  },
  playlists: {
    borderColor: '#f00',
    borderWidth: 0,
  },
});
