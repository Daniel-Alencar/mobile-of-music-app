import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import NavigationBar from '../components/NavigationBar';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

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
    height: windowHeight - 50 - 50,
    width: windowWidth,
  },
  contentContainerView: {
    width: windowWidth - 4,
    height: '100%',

    borderColor: '#00f',
    borderWidth: 0,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 0,

    paddingBottom: '0%',
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
    height: 70,
    width: 70,

    borderRadius: 0,
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