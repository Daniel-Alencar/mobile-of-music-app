import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Image, 
  Text
} from 'react-native';

import styles from './style';

import FavoriteButton from '../../../components/FavoriteButton';

import { useDispatch } from 'react-redux';
import * as infoMusicActions from '../../../store/MusicInformation/MusicInformation.actions';
import { useEffect, useState } from 'react';

interface propsMusicContainer {
  musicName: string,
  imageSource?: string,
  centerTextMusic?: boolean,
  artistName: string,
  isFavorite: boolean,
  indexOfMusicInArray: number
}

function MusicContainer(props: propsMusicContainer) {

  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  useEffect(() => {
    setIsFavorite(props.isFavorite);
  }, [props.isFavorite]);

  const dispatch = useDispatch();
  async function playMusic() {
  }

  return(
    <View style={styles.musicContainer}>
      <TouchableOpacity 
        style={styles.musicButton}
        onPress={playMusic}
      >
        
        {props.centerTextMusic ? 
          <>
            <Image
              source={
                {
                  uri: props.imageSource ? props.imageSource : require('../../../assets/images/Music/musicDefault.jpg')
                }
              }
              style={styles.imageMusic}
              
            />
            <View style={styles.centerTextContainer}>
              <Text style={styles.musicText}>
                {props.musicName}
              </Text>
              <Text style={styles.artistText}>
                {props.artistName}
              </Text>
            </View>
          </>
        : 
          <>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ 
                  uri: props.imageSource ? props.imageSource : require('../../../assets/images/Music/musicDefault.jpg')
                }}
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
          isFavorite={isFavorite}
          indexOfMusic={props.indexOfMusicInArray}
        />

      </TouchableOpacity>
    </View>
  );
}

export default MusicContainer;