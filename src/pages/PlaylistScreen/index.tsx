import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';

import playlist from '../../assets/playlists/playlist';

import MusicContainer from '../DownloadsScreen/MusicContainer';

import styles from './style';

export default function PlaylistScreen() {
  return(
    <View style={styles.generalContainer}>
      <ScrollView
        stickyHeaderIndices={[1]}
      >

        <View style={styles.shortInformationsContainer}>
        </View>

        <View style={styles.shuffleButtonContainer}>
          <TouchableOpacity style={styles.shuffleButton}>
            <Text style={styles.shuffleButtonText}>
              Tocar aleatoriamente
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.shuffleButtonContainerFalse}>

        </View>

        {
          playlist.map((song) => {
            return(
              <MusicContainer 
                key={song.key}
                musicName={song.name}
                artistName={song.artist}
                isFavorite={song.favorite}
                centerTextMusic
              />
            );
          })
        }
      </ScrollView>
    </View>
  );
}