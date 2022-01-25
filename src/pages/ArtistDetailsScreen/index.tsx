import React, { useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity, 
  ImageBackground,
  Text
} from 'react-native';


import styles from './style';
import PlaylistsContainer from '../HomeScreen/PlaylistsContainer/PlaylistsContainer';
import ArtistsContainer from '../HomeScreen/ArtistsContainer/ArtistsContainer';
import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { MusicBarHeight } from '../../settingsDefault';

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

          <PlaylistsContainer 
            title="Álbuns mais famosos"
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
