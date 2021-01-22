import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, Text, ImageBackground } from 'react-native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold } from '@expo-google-fonts/nunito';
import { SafeAreaView } from 'react-native-safe-area-context';

import SearchBar from '../components/SearchBar';
import GenreContainer from '../components/GenreContainer';

export default function SearchScreen() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold
  });

  if(fontsLoaded == false) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView 
          style={styles.contentContainer} 
          contentContainerStyle={{ 
            borderWidth: 0, 
            borderColor: 'white',
          }}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
        >

          <View style={styles.searchTitleContainer} >
            <Text style={styles.searchTitle}>
              Explore
            </Text>
          </View>

          <SearchBar/>

          <View style={styles.genresContainer}>
            <GenreContainer 
              imageSource={require('../images/Background/background-rock.jpg')}
              name="Rock"
            />
            <GenreContainer 
              imageSource={require('../images/Background/background-jazz.jpg')}
              name="Jazz"
            />
            <GenreContainer 
              imageSource={require('../images/Background/background-blues.jpg')}
              name="Blues"
            />
          </View>

        </ScrollView>
      </View>

    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    borderColor: '#4b4b4b',
    borderWidth: 0,

    backgroundColor: '#000',
    height: windowHeight,
    width: windowWidth,
  },
  contentContainerView: {
    width: windowWidth - 2,
    height: windowHeight - 72,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 1,

    paddingBottom: '2%',
  },

  searchTitleContainer: {
    borderWidth: 1,
    borderColor: '#fff',

    width: '100%',
    height: 100,

    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchTitle: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Nunito_600SemiBold',
  },

  genresContainer: {
    width: '100%',
    minHeight: windowHeight - 180 - 80,

    borderColor: '#fff',
    borderWidth: 1,

    alignItems: 'center',
  },
});