import React from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

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
            <View>
              <Text>

              </Text>
              <Text>

              </Text>
            </View>
            {/* adad */}
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
  },
  handleMusicBar: {

  },
  handleMusicButtons: {

  },
  footer: {

  },
});