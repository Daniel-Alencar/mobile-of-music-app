import React from 'react';
import { 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ImageSourcePropType 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

interface propsPlaylistContainer {
  playlistName: string,
  playlistCreator: string,
  playlistImage?: ImageSourcePropType,
}

export default function PlaylistContainer(props: propsPlaylistContainer) {

  const navigation = useNavigation();
  const handleToPlaylistScreen = () => {
  }
  
  const defaultPlaylistImage = require('../../../assets/images/Playlist/playlistDefault.png');

  return (
    <TouchableOpacity 
      style={styles.playlistContainer}
      onPress={handleToPlaylistScreen}
    >
      <Image 
        style={styles.playlist}
        source={
          props.playlistImage ?
            props.playlistImage
          :
            defaultPlaylistImage
        }
      >

      </Image>
      <Text style={styles.playlistName}>
        {props.playlistName}
      </Text>
      <Text style={styles.playlistCreator}>
        {props.playlistCreator}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  playlistContainer: {
    borderColor: '#0ff',
    borderWidth: 0,

    width: 125,
    height: 175,

    marginLeft: 7.5,
    marginRight: 7.5,
  },
  playlist: {
    width: '100%',
    height: 125,

    borderColor: '#0ff',
    borderWidth: 0,
  },
  playlistName: {
    color: '#fff',
    fontSize: 20,

    borderColor: '#00f',
    borderWidth: 0,
  },
  playlistCreator: {
    color: '#b7b7b7',
    fontSize: 12,

    borderColor: '#f00',
    borderWidth: 0,
  },
});