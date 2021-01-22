import React from 'react';
import { StyleSheet, View, ImageBackground, Text, Dimensions } from 'react-native';

export default function GenreContainer() {
  return(
    <View style={styles.genreContainer}>

      <ImageBackground 
        imageStyle={{ borderRadius: 16 }}
        style={styles.backgroundGenreContainer} 
        source={require('../images/Background/background-rock.jpg')}
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
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles =  StyleSheet.create({
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