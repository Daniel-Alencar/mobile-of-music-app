import React from 'react';
import { 
  StyleSheet, 
  View, 
  ImageBackground, 
  Text, 
  ImageSourcePropType,
  TouchableOpacity
} from 'react-native';

interface propsGenreContainer {
  imageSource: ImageSourcePropType,
  name: string,
}

export default function GenreContainer(props: propsGenreContainer) {
  return(
    <TouchableOpacity style={styles.genreButton}>

      <ImageBackground 
        imageStyle={{ borderRadius: 16, width: '100%', height: '100%' }}
        style={styles.backgroundGenreContainer} 
        source={props.imageSource}
      >

        <View 
          style={styles.genreView}
        >
          <Text style={styles.genreName}>
            {props.name}
          </Text>
        </View>
        
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles =  StyleSheet.create({
  genreButton: {
    width: '90%',
    height: 100,

    borderRadius: 16,

    borderWidth: 0,
    borderColor: '#f0f',
  },
  backgroundGenreContainer: {
    borderWidth: 0,
    borderColor: '#0f0',
  },
  genreView: { 
    backgroundColor: '#00000085', 

    width: '100%', 
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 0,
    borderColor: '#f00',
  },
  genreName: {
    color: '#d4d4d4',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 30,

    borderWidth: 0,
    borderColor: '#f00',
  },
});