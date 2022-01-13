import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity, 
  ImageBackground,
  Text
} from 'react-native';

import songs from '../../assets/playlists/songsOfPlaylist';

import MusicContainer from '../DownloadsScreen/MusicContainer';

import styles from './style';
import PlaylistsContainer from '../HomeScreen/PlaylistsContainer/PlaylistsContainer';
import ArtistsContainer from '../HomeScreen/ArtistsContainer/ArtistsContainer';

export default function ArtistDetailsScreen() {

  const [isFollowing, setIsFollowing] = useState(false);

  return(
    <View style={styles.generalContainer}>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" 
      >

        <View style={styles.shortInformationsContainer}>

          <ImageBackground
            style={styles.artistImage}
            source={require('../../assets/images/Artist/JohnMayer.png')}
          >
            <Text style={styles.artistName}>
              John Mayer
            </Text>
            <TouchableOpacity
              style={styles.followButton}
              onPress={() => setIsFollowing(!isFollowing)}
            >
              <Text style={{ color: '#fff', fontSize: 12 }}>
              {
                isFollowing
                ? "FOLLOWING"
                : "FOLLOW"
              }
              </Text>
            </TouchableOpacity>
          </ImageBackground>

        </View>

        <View style={styles.shuffleButtonContainer}>
          <TouchableOpacity style={styles.shuffleButton}>
            <Text style={styles.shuffleButtonText}>
              Tocar aleatoriamente
            </Text>
          </TouchableOpacity>
        </View>
        
        {
          songs.map((song, index) => {
            return(
              <MusicContainer 
                indexOfMusicInArray={index}
                key={song.key}
                musicName={song.name}
                artistName={song.artist}
                isFavorite={song.favorite}
                centerTextMusic
              />
            );
          })
        }

        <PlaylistsContainer 
          title="Álbuns mais famosos"
        />
        <ArtistsContainer 
          title="Artistas parecidos"
        />
      </ScrollView>
    </View>
  );
}
