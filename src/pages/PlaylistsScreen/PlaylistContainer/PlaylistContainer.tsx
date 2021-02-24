import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Image, 
  Text, 
  ImageSourcePropType 
} from 'react-native';

import styles from './style';

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
              (require('../../../assets/images/Playlist/likedSongs.png'))
            :
              (props.imageSource ? 
                props.imageSource 
              : 
                require('../../../assets/images/Playlist/playlistDefault.png'))
          } 
        />

        <Text style={styles.playlistText}>
          {props.isLikedSongs ? "Músicas favoritas" : props.playlistName}
        </Text>
      </TouchableOpacity>
  
    </View>
  );
}
