import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Image, 
  Text, 
  ImageSourcePropType 
} from 'react-native';

import styles from './style';

import { useNavigation } from '@react-navigation/native';

import FavoriteButton from '../../../components/FavoriteButton';


interface propsMusicContainer {
  musicName: string,
  imageSource?: ImageSourcePropType,
  centerTextMusic?: boolean,
  artistName: string,
  isFavorite: boolean,
}

function MusicContainer(props: propsMusicContainer) {
  const navigation = useNavigation();

  function handleNavigateToMusicScreen() {
    navigation.navigate('MusicScreen', {
      music: props
    });
  }

  return(
    <View style={styles.musicContainer}>
      <TouchableOpacity 
        style={styles.musicButton}
        onPress={handleNavigateToMusicScreen}
      >
        
        {props.centerTextMusic ? 
          <>
            <Image
              source={
                props.imageSource ? props.imageSource : require('../../../assets/images/Music/musicDefault.jpg')
              }
              style={styles.imageMusic}
              
            />
            <View style={styles.centerTextContainer}>
              <Text style={styles.musicText}>
                {props.musicName}
              </Text>
              <Text style={styles.artistText}>
                John Mayer
              </Text>
            </View>
          </>
        : 
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={
                  props.imageSource ? props.imageSource : require('../../../assets/images/Music/musicDefault.jpg')
                }
                style={styles.imageMusic}
              />

              <View style={styles.flexStartTextContainer}>
                <Text style={styles.musicText}>
                  {props.musicName}
                </Text>
                <Text style={styles.artistText}>
                  John Mayer
                </Text>
              </View>
            </View>
          </>
        }
        <FavoriteButton 
          isFavorite={props.isFavorite}
        />

      </TouchableOpacity>
    </View>
  );
}

export default MusicContainer;