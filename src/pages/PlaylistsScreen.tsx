import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import PlusButton from '../components/PlusButton';

export default function PlaylistsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <View style={styles.playlistContainer}>

            <TouchableOpacity style={styles.playlistButton}>
              <Image style={styles.playlistImage} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.playlistText}>
                Lo-fi
              </Text>
            </TouchableOpacity>
            
          </View>

          <View style={styles.playlistContainer}>

            <TouchableOpacity style={styles.playlistButton}>
              <Image style={styles.playlistImage} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.playlistText}>
                Lo-fi
              </Text>
            </TouchableOpacity>
            
          </View>
        
          <View style={styles.playlistContainer}>

            <TouchableOpacity style={styles.playlistButton}>
              <Image style={styles.playlistImage} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.playlistText}>
                Lo-fi
              </Text>
            </TouchableOpacity>
            
          </View>

          <View style={styles.playlistContainer}>

            <TouchableOpacity style={styles.playlistButton}>
              <Image style={styles.playlistImage} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.playlistText}>
                Lo-fi
              </Text>
            </TouchableOpacity>
            
          </View>
        
          <View style={styles.playlistContainer}>

            <TouchableOpacity style={styles.playlistButton}>
              <Image style={styles.playlistImage} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.playlistText}>
                Lo-fi
              </Text>
            </TouchableOpacity>
            
          </View>

          <View style={styles.playlistContainer}>

            <TouchableOpacity style={styles.playlistButton}>
              <Image style={styles.playlistImage} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.playlistText}>
                Lo-fi
              </Text>
            </TouchableOpacity>
            
          </View>
        
          <View style={styles.playlistContainer}>

            <TouchableOpacity style={styles.playlistButton}>
              <Image style={styles.playlistImage} source={require('../images/Artists/JohnMayer.png')} />

              <Text style={styles.playlistText}>
                Lo-fi
              </Text>
            </TouchableOpacity>
            
          </View>
        
        </ScrollView>
      </View>

      <PlusButton />

    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
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