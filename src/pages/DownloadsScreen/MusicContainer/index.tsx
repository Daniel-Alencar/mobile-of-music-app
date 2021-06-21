import React from 'react';
import { 
  View, 
  TouchableOpacity, 
  Image, 
  Text, 
  ImageSourcePropType 
} from 'react-native';

import styles from './style';

import FavoriteButton from '../../../components/FavoriteButton';

import { useDispatch } from 'react-redux';
import * as infoMusicActions from '../../../store/infoMusic/infoMusic.actions';
import { playSound } from '../../Music';

interface propsMusicContainer {
  musicName: string,
  imageSource?: ImageSourcePropType,
  centerTextMusic?: boolean,
  artistName: string,
  isFavorite: boolean,
}

function MusicContainer(props: propsMusicContainer) {
  const dispatch = useDispatch();

  async function playMusic() {
    dispatch(infoMusicActions.playOrPauseMusic(true));
    dispatch(infoMusicActions.setSongsIncomplete(true));
    await playSound();
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