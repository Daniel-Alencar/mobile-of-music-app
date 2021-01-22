import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Image, 
  ImageSourcePropType, 
  TouchableOpacity 
} from 'react-native';

interface propsArtistContainer {
  artistName: string,
  imageSource?: ImageSourcePropType,
}

export default function ArtistContainer(props: propsArtistContainer) {

  const defaultArtistImage = require('../images/Artists/userIcon.png');

  return (
    <TouchableOpacity style={styles.artistContainer}>
      <Image 
        style={styles.artist}
        source={
          props.imageSource ?
            props.imageSource
          :
            defaultArtistImage
        }
        >

      </Image>
      <Text style={styles.artistName}>
        {props.artistName}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  artistContainer: {
    borderColor: '#0ff',
    borderWidth: 0,

    width: 125,
    height: 175,
  },
  artist: {
    width: '100%',
    height: 125,

    borderColor: '#0ff',
    borderWidth: 0,
    borderRadius: 100,
  },
  artistName: {
    color: '#b7b7b7',
    fontSize: 16,

    borderColor: '#0ff',
    borderWidth: 0,

    textAlignVertical: 'center',
    textAlign: 'center',
  },
});