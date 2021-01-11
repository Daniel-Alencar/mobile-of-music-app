import React, { useState } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold } from '@expo-google-fonts/nunito';

import { Feather } from '@expo/vector-icons';

import NavigationBar from '../components/NavigationBar';

export default function SearchScreen() {

  const [textOnSearchBar, setTextOnSearchBar] = useState("");
  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold
  });

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView 
          style={styles.contentContainer} 
          contentContainerStyle={{ borderWidth: 0, borderColor: 'white' }}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[1]}
        >

          <View style={styles.searchBarContainer} >
            <Text style={styles.searchTitle}>
              Explore
            </Text>
          </View>

          <View style={styles.searchBarContainer} >
            <TextInput 
              style={styles.searchBar}
              onChangeText={(text) => setTextOnSearchBar(text)}
              value={textOnSearchBar}
              placeholder={"Que música você quer ouvir?"}
            >
            </TextInput>
          </View>

          <View style={styles.genresContainer}>


            <View style={styles.genreContainer}>

              <ImageBackground 
                imageStyle={{ borderRadius: 16 }}
                style={styles.backgroundGenreContainer} 
                source={require('../images/background/background-rock.jpg')}
              >

                <View 
                  style={{ 
                    backgroundColor: '#00000085', 
                    width: '100%', 
                    height: '100%',         
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.genreName}>
                    Rock
                  </Text>
                </View>
                
              </ImageBackground>
            </View>

            <View style={styles.genreContainer}>

              <ImageBackground 
                imageStyle={{ borderRadius: 16 }}
                style={styles.backgroundGenreContainer} 
                source={require('../images/background/background-rock.jpg')}
              >

                <View 
                  style={{ 
                    backgroundColor: '#00000085', 
                    width: '100%', 
                    height: '100%',         
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.genreName}>
                    Rock
                  </Text>
                </View>
                
              </ImageBackground>
            </View>

            <View style={styles.genreContainer}>

              <ImageBackground 
                imageStyle={{ borderRadius: 16 }}
                style={styles.backgroundGenreContainer} 
                source={require('../images/background/background-rock.jpg')}
              >

                <View 
                  style={{ 
                    backgroundColor: '#00000085', 
                    width: '100%', 
                    height: '100%',         
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.genreName}>
                    Rock
                  </Text>
                </View>
                
              </ImageBackground>
            </View>

            <View style={styles.genreContainer}>

              <ImageBackground 
                imageStyle={{ borderRadius: 16 }}
                style={styles.backgroundGenreContainer} 
                source={require('../images/background/background-rock.jpg')}
              >

                <View 
                  style={{ 
                    backgroundColor: '#00000085', 
                    width: '100%', 
                    height: '100%',         
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.genreName}>
                    Rock
                  </Text>
                </View>
                
              </ImageBackground>
            </View>

            <View style={styles.genreContainer}>

              <ImageBackground 
                imageStyle={{ borderRadius: 16 }}
                style={styles.backgroundGenreContainer} 
                source={require('../images/background/background-rock.jpg')}
              >

                <View 
                  style={{ 
                    backgroundColor: '#00000085', 
                    width: '100%', 
                    height: '100%',         
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.genreName}>
                    Rock
                  </Text>
                </View>
                
              </ImageBackground>
            </View>

            <View style={styles.genreContainer}>

              <ImageBackground 
                imageStyle={{ borderRadius: 16 }}
                style={styles.backgroundGenreContainer} 
                source={require('../images/background/background-rock.jpg')}
              >

                <View 
                  style={{ 
                    backgroundColor: '#00000085', 
                    width: '100%', 
                    height: '100%',         
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.genreName}>
                    Rock
                  </Text>
                </View>
                
              </ImageBackground>
            </View>


          </View>

        </ScrollView>
      </View>

      <NavigationBar/>
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
    height: windowHeight,
    width: windowWidth,
  },
  contentContainerView: {
    width: windowWidth - 1,
    height: windowHeight - 50,
  },
  contentContainer: {
    borderColor: '#ff0',
    borderWidth: 0,

    padding: '0%',
    paddingTop: '0%',
    paddingBottom: '1%',
    
    flex: 1,
  },

  searchTitle: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Nunito_600SemiBold',
  },

  searchBarContainer: {
    borderWidth: 0,
    borderColor: '#fff',

    backgroundColor: '#000',
    width: '100%',
    height: 90,

    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  searchBar: {
    backgroundColor: '#fff',
    width: windowWidth - 30,
    height: 50,

    borderRadius: 10,
    marginBottom: 15,
    marginTop: 25,
    padding: 10,
  },

  genresContainer: {
    width: '100%',
    height: '100%',

    borderColor: '#f9f9f9',
    borderWidth: 0,

    alignItems: 'center',
  },
  genreContainer: {
    width: '90%',
    height: 100,

    backgroundColor: '#fff',

    borderRadius: 16,

    marginTop: 10,
    marginBottom: 10,
  },
  backgroundGenreContainer: {
    width: '100%',
    height: '100%',
  },
  genreName: {
    color: '#d4d4d4',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 30,
  },
});