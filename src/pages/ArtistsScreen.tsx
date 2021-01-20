import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export default function ArtistsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
          <View style={styles.artistContainer}>

            <TouchableOpacity style={styles.artistButton}>
              <Image style={styles.imageArtist} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </TouchableOpacity>
            
          </View>
          
        </ScrollView>
      </View>

        <RectButton style={styles.plusButton} onPress={() => {}} >
          <Feather name="plus" size={30} color="#000"/>
        </RectButton>

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
    height: '100%',
    width: windowWidth,
  },
  contentContainerView: {
    borderColor: '#00f',
    borderWidth: 0,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 0,
  },

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

  plusButton: {
    backgroundColor: 'white',
    height: 60,
    width: 60,

    borderRadius: 50,

    position: 'absolute',
    bottom: 20,
    right: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});