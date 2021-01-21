import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet } from 'react-native';

import PlusButton from '../components/PlusButton';
import ArtistContainer from '../components/Salvos/ArtistContainer';

export default function ArtistsScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <ArtistContainer 
            artistName="John Mayer" 
            imageSource={require('../images/Artists/JohnMayer.png')}
          />
          <ArtistContainer 
            artistName="Daniel Alencar" 
          />

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
});