import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity, 
  ImageBackground,
  Text,
  Image
} from 'react-native';


import styles from './style';
import PlaylistsContainer from '../HomeScreen/PlaylistsContainer/PlaylistsContainer';
import ArtistsContainer from '../HomeScreen/ArtistsContainer/ArtistsContainer';
import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { MusicBarHeight } from '../../settingsDefault';
import MusicContainer from '../DownloadsScreen/MusicContainer';
import SimpleMusicContainer from '../UploadMusicsScreen/SimpleMusicContainer';

export default function ArtistDetailsScreen() {

  const [isFollowing, setIsFollowing] = useState(false);

  // ===================================================================

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return(
    <>
      <View style={styles.generalContainer}>
        <ScrollView
          stickyHeaderIndices={[1]}
          showsVerticalScrollIndicator={false}
          overScrollMode="never" 
        >

          <View style={styles.shortInformationsContainer}>

            <Image 
              source={require('../../assets/images/Artist/JohnMayer.png')}
              style={styles.artistImage}
            />
            <Text style={styles.artistName}>
              John Mayer
            </Text>
            <TouchableOpacity
              style={{
                ...styles.followButton,
                borderColor: isFollowing ? '#42E12C' : '#fff',
              }}
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

          <View style={styles.shuffleButtonContainer}>
            <TouchableOpacity style={styles.shuffleButton}>
              <Text style={styles.shuffleButtonText}>
                Tocar aleatoriamente
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.musicsView}>
            <Text style={styles.musicsViewText}>Músicas recentemente adicionadas</Text>
            <SimpleMusicContainer 
              rightIcon='more-vertical'
              rightFunction={() => {}}
              centerText={false}
            />
            <SimpleMusicContainer 
              rightIcon='more-vertical'
              rightFunction={() => {}}
              centerText={false}
            />
            <SimpleMusicContainer 
              rightIcon='more-vertical'
              rightFunction={() => {}}
              centerText={false}
            />
          </View>
          <PlaylistsContainer 
            title="Álbuns"
          />
          <PlaylistsContainer 
            title="Playlists"
          />
          <ArtistsContainer 
            title="Artistas parecidos"
          />
        </ScrollView>
      </View>
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }} />
    </>
  );
}
