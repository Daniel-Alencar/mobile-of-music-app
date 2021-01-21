import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

export default function ArtistContainer() {
  return(
    <View style={styles.artistContainer}>

      <TouchableOpacity style={styles.artistButton}>
        <Image style={styles.imageArtist} source={require('../../images/Artists/JohnMayer.png')} />

        <Text style={styles.artistText}>
          John Mayer
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