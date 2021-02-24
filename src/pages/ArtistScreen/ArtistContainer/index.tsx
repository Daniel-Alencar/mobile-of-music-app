import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Image, 
  Text, 
  ImageSourcePropType 
} from 'react-native';

import styles from './style';

interface propsArtistContainer {
  imageSource?: ImageSourcePropType,
  artistName: string,
}

export default function ArtistContainer(props: propsArtistContainer) {
  return(
    <View style={styles.artistContainer}>

      <TouchableOpacity style={styles.artistButton}>

        <Image 
          style={styles.imageArtist} 
          source={props.imageSource ? props.imageSource : require('../../../assets/images/Artist/userDefault.png')} 
        />

        <Text style={styles.artistText}>
          {props.artistName}
        </Text>

      </TouchableOpacity>
      
    </View>
  );
}
