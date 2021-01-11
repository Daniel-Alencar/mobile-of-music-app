import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, TextInput, Text, ImageBackground, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import NavigationBar from '../components/NavigationBar';

export default function SearchScreen() {

  const [value, setValue] = React.useState("Artistas, músicas e podcasts");

  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView 
          style={styles.contentContainer} 
          contentContainerStyle={{ borderWidth: 0, borderColor: 'white' }}
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[0]}
        >

          <View style={styles.searchBarContainer} >
            <TextInput 
              style={styles.searchBar}
              onChangeText={text => setValue(text)}
              defaultValue={value}
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
    
  },

  searchBarContainer: {
    borderWidth: 0,
    borderColor: '#ff0',
    backgroundColor: '#000',

    width: '100%',
    height: 100,
    
    justifyContent: 'center',
    alignItems: 'center',

  },
  searchBar: {
    width: 300,
    height: '50%',

    borderWidth: 0,
    borderColor: '#ff0',
    borderRadius: 15,

    margin: 25,

    backgroundColor: '#fff',

    padding: 10
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
    
    fontSize: 30,
  },
});