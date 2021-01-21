import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';

interface propsPlaylistContainer {
  playlistName: string,
  imageSource?: ImageSourcePropType,
  isLikedSongs?: boolean,
}

export default function PlaylistContainer(props: propsPlaylistContainer) {
  return(
    <View style={styles.playlistContainer}>

      <TouchableOpacity style={styles.playlistButton}>
        <Image 
          style={styles.playlistImage} 
          source={
            props.isLikedSongs ? 
              (require('../../images/Albuns/likedSongs.png'))
            :
              (props.imageSource ? 
                props.imageSource 
              : 
                require('../../images/Albuns/playlistBanner.png'))
          } 
        />

        <Text style={styles.playlistText}>
          {props.isLikedSongs ? "Músicas favoritas" : props.playlistName}
        </Text>
      </TouchableOpacity>
  
    </View>
  );
}

const styles = StyleSheet.create({
  playlistContainer: {
    height: 85,
    justifyContent: 'center',
  },
  playlistButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 20,
  },
  playlistImage: {
    height: 75,
    width: 75,
  },
  playlistText:{
    color: '#FFF',
    
    fontSize: 18,
    margin: 10,
  },
});