import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './style';

import FavoriteButton from '../FavoriteButton';

import { useDispatch, useSelector } from 'react-redux';
import * as infoMusicActions from '../../store/infoMusic/infoMusic.actions';

import songs from '../../pages/songsOfPlaylist';

import { windowWidth } from '../../settingsDefault';
import { convertMillisInSeconds, pauseSound, playSound } from '../../pages/Music';

import { musicSong } from '../../pages/Music';

function MusicBar() {

  const dispatch = useDispatch();
  const propsFromRedux = useSelector((state: any) => {
    return {
      playing: state.infoMusic.playing,
      indexOfMusicInArray: state.infoMusic.key
    }
  });

  const [isFavorite, setIsFavorite] = useState(songs[propsFromRedux.indexOfMusicInArray].favorite);
  useEffect(() => {
    setIsFavorite(songs[propsFromRedux.indexOfMusicInArray].favorite);
  }, [songs[propsFromRedux.indexOfMusicInArray].favorite]);

  async function pauseMusic() {
    dispatch(infoMusicActions.playOrPauseMusic(!propsFromRedux.playing));
    await pauseSound();
  }

  async function playMusic() {
    dispatch(infoMusicActions.playOrPauseMusic(!propsFromRedux.playing));
    await playSound();
  }

  // ====================================================================================

  const [width, setWidth] = useState(0);
  const [currentSecondsOfMusic, setCurrentSecondsOfMusic] = useState(0);

  async function convertMillisecondsOfMusicToWidth() {
    console.log("=> convertMillisecondsOfMusicToWidth");

    const statusOfMusic = await musicSong.getStatusAsync();
    if(statusOfMusic.isLoaded) {
      let durationMillis = statusOfMusic.durationMillis;
      let currentMillis = statusOfMusic.positionMillis;

      let durationSeconds = convertMillisInSeconds(durationMillis);
      let currentSeconds = convertMillisInSeconds(currentMillis);

      if(currentSeconds !== currentSecondsOfMusic) {
        if(currentSeconds && durationSeconds) {
          setCurrentSecondsOfMusic(currentSeconds);
          setWidth(Math.floor(currentSeconds * windowWidth / durationSeconds));
        }
      }
    }
  }
  musicSong.setOnPlaybackStatusUpdate(convertMillisecondsOfMusicToWidth);

  // ====================================================================================

  return (
    <>
      <View 
        style={{ 
          width: width, 
          height: 0.8, 
          backgroundColor: '#fff' 
        }}
      />
      <View style={styles.container}>
        

        <View style={styles.leftContainer}>
          <Image 
            source={{ uri:songs[propsFromRedux.indexOfMusicInArray].imageSource }}
            style={styles.musicImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.musicName}>
              {songs[propsFromRedux.indexOfMusicInArray].name}
            </Text>
            <Text style={styles.artistName}>
              {songs[propsFromRedux.indexOfMusicInArray].artist}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={isFavorite}
            indexOfMusic={propsFromRedux.indexOfMusicInArray}
          />
          {
            propsFromRedux.playing ?
              <TouchableOpacity style={styles.playAndPauseButton} onPress={pauseMusic}>
                <Feather name={'pause'} color='#fff' size={25}/>
              </TouchableOpacity>
            :
              <TouchableOpacity style={styles.playAndPauseButton} onPress={playMusic}>
                <Feather name={'play'} color='#fff' size={25}/>
              </TouchableOpacity>
          }
          
        </View>
      </View>
    </>
  );
}

export default MusicBar;