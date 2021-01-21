import React from 'react';
import {View, Dimensions, StyleSheet, ScrollView } from 'react-native';

import MusicContainer from '../components/Salvos/MusicContainer';
import PlusButton from '../components/PlusButton';

export default function DownloadsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <MusicContainer 
            musicName="Gravity" 
            imageSource={require('../images/Albuns/Continuum.jpg')}
            centerTextMusic={true} 
          />
          <MusicContainer 
            musicName="In Repair" 
            imageSource={require('../images/Albuns/Continuum.jpg')}
            centerTextMusic={true}  
          />

        </ScrollView>
      </View>

      <PlusButton onPress={() => {}} />

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
});