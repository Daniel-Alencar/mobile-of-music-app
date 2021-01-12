import React, { useState } from 'react';
import { ScrollView, View, Dimensions, StyleSheet, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native';

import { useFonts } from 'expo-font';
import { Nunito_600SemiBold } from '@expo-google-fonts/nunito';

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

          <View style={styles.searchBarContainer} >
             <TextInput
              returnKeyType="search"
              style={styles.searchBar}
              onChangeText={(text) => setTextOnSearchBar(text)}
              value={textOnSearchBar}
              placeholder={"Que música você quer ouvir?"}
            />
            
            {/* <TouchableOpacity style={styles.xButton}>
              <Feather name="x" size={30} color="#f00"/>
            </TouchableOpacity> */}
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
    width: windowWidth - 2,
    height: windowHeight - 50,
  },
  contentContainer: {
    borderColor: '#0f0',
    borderWidth: 0,

    paddingBottom: '2%',
  },

  searchTitleContainer: {
    borderWidth: 0,
    borderColor: '#fff',

    width: '100%',
    height: 90,

    alignItems: 'center',
    justifyContent: 'center',
  },
  searchTitle: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Nunito_600SemiBold',
  },

  searchBarContainer: {
    borderWidth: 0,
    borderColor: '#fff',

    backgroundColor: '#000000aa',
    width: '100%',
    height: 90,

    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    backgroundColor: '#B7A9A7',
    width: windowWidth - 30,
    height: 50,

    borderRadius: 10,
    padding: 10,

    marginTop: 30,
  },
  xButton: {
    borderWidth: 0,
    borderColor: '#fff',

    width: 30,
    height: 30,

    justifyContent: 'center',
    alignItems: 'center',
  },

  genresContainer: {
    width: '100%',
    minHeight: windowHeight - 180 - 54,

    borderColor: '#fff',
    borderWidth: 0,

    alignItems: 'center',
  },
  genreContainer: {
    width: '90%',
    height: 100,

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