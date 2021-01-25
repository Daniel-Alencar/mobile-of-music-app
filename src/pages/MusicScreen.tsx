import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import FavoriteButton from '../components/FavoriteButton';

export default function MusicScreen() {
  return(

    <SafeAreaView style={styles.defaultContainer}>
      <View style={{
        height: '100%', 
        
        borderColor: '#00f',
        borderWidth: 0,
      }}>
        <View style={styles.header}>

        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageMusic} 
            source={require("../images/Music/musicIcon.jpg")}
          />
        </View>
        <View style={styles.handleContainer}>
          <View style={styles.informationMusic}>

            <View style={styles.musicAndArtistContainer}>
              <Text style={styles.musicText}>
                Gravity
              </Text>
              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </View>

            <FavoriteButton />

          </View>
          <View style={styles.handleMusicBar}>

          </View>
          <View style={styles.handleMusicButtons}>

          </View>
          <View style={styles.footer}>

          </View>
        </View>
      </View>
      
    </SafeAreaView>
  );
}

const windowHeight = Dimensions.get('screen').height;
const windowWidth = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  defaultContainer: {
    borderColor: '#f00',
    borderWidth: 0,

    backgroundColor: '#444',

    width: '100%',
    height: '100%',
  },

  header: {
    width: '100%',
    height: 0,

    borderColor: '#0f0',
    borderWidth: 0,
  },

  imageContainer: {
    borderColor: '#f00',
    borderWidth: 3,

    height: '65%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  imageMusic: {
    height: 320,
    width: 320,
  },

  handleContainer: {
    borderColor: '#f00',
    borderWidth: 0,

    height: '35%',
    width: '100%',
  },

  informationMusic: {
    width: '100%',
    height: 50,

    borderColor: '#00f',
    borderWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingLeft: 20,
    paddingRight: 20,
  },
  musicAndArtistContainer: {
    borderColor: '#00f',
    borderWidth: 1,

    justifyContent: 'center',
  },
  musicText: {
    color: '#fff',
    fontSize: 20,
  },
  artistText: {
    color: '#c0c0c0',
    fontSize: 15,
  },

  handleMusicBar: {
    width: '100%',
    height: 50,

    borderColor: '#00f',
    borderWidth: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingLeft: 20,
    paddingRight: 20,
  },
  handleMusicButtons: {

  },
  footer: {

  },
});