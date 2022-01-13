import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';

import styles from './style';

import FavoriteButton from '../FavoriteButton';

import { StateReducerData } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { playOrPauseMusic } from '../../store/MusicInformation/MusicInformation.actions';
import { useNavigation } from '@react-navigation/native';

function MusicBar() {

  const navigation = useNavigation()
  function handleToMusicScreen() {
    navigation.navigate('MusicScreen', { fromMusicBar: true });
  }

  const propsFromRedux = useSelector((state: StateReducerData) => {
    return {
      playing: state.MusicInformation.playing,
      indexOfMusic: state.MusicInformation.indexOfMusic
    }
  });

  const musicPlaylist = useSelector((state: StateReducerData) => {
    return state.MusicPlaylist;
  })

  const dispatch = useDispatch();
  function playOrPauseTheSong(playing: boolean, index: number) {
    dispatch(playOrPauseMusic(playing, index));
  }

  // ====================================================================================

  const [width, setWidth] = useState(0);
  const [currentSecondsOfMusic, setCurrentSecondsOfMusic] = useState(0);

  // ====================================================================================

  return (
    <TouchableOpacity
      onPress={handleToMusicScreen}
    >
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
            source={{ uri:musicPlaylist[propsFromRedux.indexOfMusic].imageSource }}
            style={styles.musicImage}
          />
          <View style={styles.textContainer}>
            <Text style={styles.musicName}>
              {musicPlaylist[propsFromRedux.indexOfMusic].name}
            </Text>
            <Text style={styles.artistName}>
              {musicPlaylist[propsFromRedux.indexOfMusic].artist}
            </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <FavoriteButton
            isFavorite={musicPlaylist[propsFromRedux.indexOfMusic].favorite}
            indexOfMusic={propsFromRedux.indexOfMusic}
          />
          {
            propsFromRedux.playing ?
              <TouchableOpacity style={styles.playAndPauseButton} onPress={
                () => playOrPauseTheSong(false, propsFromRedux.indexOfMusic)
              }>
                <Feather name={'pause'} color='#fff' size={25}/>
              </TouchableOpacity>
            :
              <TouchableOpacity style={styles.playAndPauseButton} onPress={
                () => playOrPauseTheSong(true, propsFromRedux.indexOfMusic)
              }>
                <Feather name={'play'} color='#fff' size={25}/>
              </TouchableOpacity>
          }
          
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MusicBar;