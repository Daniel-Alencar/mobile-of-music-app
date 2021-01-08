import React from 'react';
import { ScrollView, View, Dimensions, StyleSheet, TextInput, Text, ImageBackground } from 'react-native';
import NavigationBar from '../components/NavigationBar';

export default function SearchScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.contentContainerView}>
        <ScrollView style={styles.contentContainer}>

          <View style={styles.searchBarContainer} >
            <TextInput style={styles.searchBar}>
              
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
                    backgroundColor: '#00000055', 
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
                    backgroundColor: '#00000055', 
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
                    backgroundColor: '#00000055', 
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
                    backgroundColor: '#00000055', 
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
    borderWidth: 1,

    padding: '0%',
    paddingTop: '1%',
    paddingBottom: '1%',

  },

  searchBarContainer: {
    borderWidth: 0,
    borderColor: '#ff0',

    width: '100%',
    height: 100,

    padding: '0%',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '90%',
    height: 60,

    borderRadius: 16,

    backgroundColor: '#fff',

    position: 'relative',
  },
  genresContainer: {
    width: '100%',
    height: windowHeight - 150,

    borderColor: '#f9f9f9',
    borderWidth: 1,

    flex: 1,
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