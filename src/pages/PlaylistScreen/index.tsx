import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity,
  Text,
  Switch,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import playlist from '../../assets/playlists/playlist';

import MusicContainer from '../DownloadsScreen/MusicContainer';

import styles from './style';

export default function PlaylistScreen() {

  const [switchValue, setSwitchValue] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  return(
    <View style={styles.generalContainer}>

      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        overScrollMode="never" 
      >
      
        <LinearGradient colors={['#464779',"#000"]}>

          <View style={{ height: 0, width: '100%' }}></View>

          <View style={styles.shortInformationsContainer}>

            <Image 
              source={require('../../assets/images/Playlist/playlistDefault.png')}
              style={styles.playlistImage}
            />
            <Text style={styles.playlistName}>
              Playlist
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

        </View>

        </LinearGradient>
        
        <View style={styles.shuffleButtonContainer}>
          <TouchableOpacity style={styles.shuffleButton}>
            <Text style={styles.shuffleButtonText}>
              Tocar aleatoriamente
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.downloadContainer}>
          <Text style={styles.downloadText}>
            Download
          </Text>

          <Switch 
            value={switchValue}
            onValueChange={() => setSwitchValue(!switchValue)}
            style={styles.switchButton}
            thumbColor="#b0b0b0"
            trackColor={{
              false: "#818181",
              true: "#818181"
            }}
          >

          </Switch>
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