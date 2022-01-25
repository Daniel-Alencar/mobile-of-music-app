import React, { useEffect, useState } from 'react';
import { 
  View, 
  ScrollView, 
  TouchableOpacity,
  Text,
  Switch,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { PanGestureHandler } from 'react-native-gesture-handler';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  withSequence,
  useAnimatedGestureHandler
} from 'react-native-reanimated';

import songs from '../../assets/playlists/songsOfPlaylist';

import MusicContainer from '../DownloadsScreen/MusicContainer';

import styles from './style';
import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { MusicBarHeight } from '../../settingsDefault';

export default function PlaylistScreen() {

  const [switchValue, setSwitchValue] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  const imageStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY,
        [0, 200],
        [1, 0],
        Extrapolate.CLAMP
      ),
      height: interpolate(
        scrollY,
        [0, 200],
        [170, 140],
        Extrapolate.CLAMP
      ),
      width: interpolate(
        scrollY,
        [0, 200],
        [170, 140],
        Extrapolate.CLAMP
      ),
    }
  });

  function animationForImagePlaylist(event: any) {
    const scrollY = event.nativeEvent.contentOffset.y
    console.log(event.nativeEvent.contentOffset.y);

    setScrollY(scrollY);
  }

  // ===================================================================

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return(
    <>
      <View style={styles.generalContainer}>

        <ScrollView
          stickyHeaderIndices={[1,0]}
          showsVerticalScrollIndicator={false}
          overScrollMode="never" 
          onScroll={animationForImagePlaylist}
          
        >
        
          <LinearGradient style={styles.linearGradient} colors={['#464779',"#000"]}>

            <View style={styles.shortInformationsContainer}>

              <Animated.Image 
                source={require('../../assets/images/Playlist/playlistDefault.png')}
                style={[styles.playlistImage, imageStyle, {  }]}
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

          <View style={{ height: 30, width: '100%', backgroundColor: '#000', zIndex: 10 }}></View>

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

        </ScrollView>
      </View>
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }} />
    </>
  );
}