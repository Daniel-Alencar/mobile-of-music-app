import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './style';

import FavoriteButton from '../FavoriteButton';

import { StateReducerData } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import * as infoMusicActions from '../../store/MusicInformation/MusicInformation.actions';

import songs from '../../assets/playlists/songsOfPlaylist';

import { windowWidth } from '../../settingsDefault';

function MusicBar() {

  const propsFromRedux = useSelector((state: StateReducerData) => {
    return {
      playing: state.MusicInformation.playing,
      indexOfMusic: state.MusicInformation.indexOfMusic
    }
  });

  const dispatch = useDispatch();
  async function pauseMusic() {
    dispatch(infoMusicActions.playOrPauseMusic(!propsFromRedux.playing));
  }

  async function playMusic() {
    dispatch(infoMusicActions.playOrPauseMusic(!propsFromRedux.playing));
  }

  // ====================================================================================

  const [width, setWidth] = useState(0);
  const [currentSecondsOfMusic, setCurrentSecondsOfMusic] = useState(0);

  // ====================================================================================

  return (
    <TouchableOpacity>
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
            source={{ uri:songs[propsFromRedux.indexOfMusic].imageSource }}
            style={styles.musicImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.musicName}>
              {songs[propsFromRedux.indexOfMusic].name}
            </Text>
            <Text style={styles.artistName}>
              {songs[propsFromRedux.indexOfMusic].artist}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={songs[propsFromRedux.indexOfMusic].favorite}
            indexOfMusic={propsFromRedux.indexOfMusic}
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
    </TouchableOpacity>
  );
}

export default MusicBar;