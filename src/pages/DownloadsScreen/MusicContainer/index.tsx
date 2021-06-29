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
import { musicSong, playSound, prepareNewSound } from '../../Music';
import { useEffect } from 'react';

interface propsMusicContainer {
  musicName: string,
  imageSource?: string,
  centerTextMusic?: boolean,
  artistName: string,
  isFavorite: boolean,
  indexOfMusicInArray: number,
}

function MusicContainer(props: propsMusicContainer) {
  const dispatch = useDispatch();

  useEffect(() => {
    musicSong 
    ? () => {
      console.log('Unloading Sound');
      musicSong.unloadAsync(); }
    : undefined;
  }, [musicSong]);

  async function playMusic() {
    const status = await musicSong.getStatusAsync();

    if(status.isLoaded && status.isPlaying) {
      await musicSong.stopAsync();
    }

    dispatch(infoMusicActions.toggleMusicAndArtist(props.indexOfMusicInArray));
    dispatch(infoMusicActions.playOrPauseMusic(true));
    dispatch(infoMusicActions.setSongsIncomplete(true));

    await prepareNewSound(props.indexOfMusicInArray, true);
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
                source={{ uri: props.imageSource ? props.imageSource : require('../../../assets/images/Music/musicDefault.jpg')
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
          isFavorite={props.isFavorite}
        />

      </TouchableOpacity>
    </View>
  );
}

export default MusicContainer;