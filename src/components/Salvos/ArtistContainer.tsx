import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, ImageSourcePropType } from 'react-native';

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
          source={props.imageSource ? props.imageSource : require('../../images/Artists/userIcon.png')} 
        />

        <Text style={styles.artistText}>
          {props.artistName}
        </Text>

      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  artistContainer: {
    height: 85,
    justifyContent: 'center',
  },
  artistButton: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingLeft: 20,
  },
  imageArtist: {
    height: 65,
    width: 65,

    borderRadius: 50,
  },
  artistText:{
    color: '#FFF',
    
    fontSize: 18,
    margin: 10,
  },
});