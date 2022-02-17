import React from 'react';
import { 
  FlatList, 
  Image, 
  NativeScrollEvent, 
  NativeSyntheticEvent, 
  TouchableOpacity, 
  View 
} from 'react-native';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  TopBar, 
  ScreenArea, 
  CoverArea, 
  PlayerArea, 
  Controls,
  styles
} from './style';

import Background from './Background';
import ShuffleButton from './ShuffleButton';
import RepeatButton from './RepeatButton';
import Slider from './Slider';

import ChevronIcon from './icons/ChevronIcon/ChevronIcon';
import MoreVertIcon from './icons/MoreVerIcon/MoreVertIcon';
import PlayIcon from './icons/PlayIcon/PlayIcon';
import PauseIcon from './icons/PauseIcon/PauseIcon';

import { useDispatch, useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { playOrPauseMusic, toggleMusicAndArtist } from '../../store/MusicInformation/MusicInformation.actions';

import { windowWidth } from '../../settingsDefault';
import PlaylistIcon from './icons/PlaylistIcon';

// =====================================================================================
// =====================================================================================

function MusicScreen({ route }: any) {

  const actualMusic = useSelector((state: StateReducerData) => {
    return state.MusicInformation;
  });

  const songs = useSelector((state: StateReducerData) => {
    return state.MusicPlaylist;
  });

  // ==================================================================

  const playOrPause = () => {
    dispatch(playOrPauseMusic(!actualMusic.playing, actualMusic.indexOfMusic));
  };

  // ==================================================================

  let { fromMusicBar } = route.params;

  const navigation = useNavigation();
  function handleToPreviousScreen() {
    navigation.goBack();
  }

  // ==================================================================
  // ==================================================================

  const dispatch = useDispatch();

  function renderImageFromFlatList({item}: any) {
    return (
      <View style={styles.imageContainer}>
        <Image 
          style={styles.itemFlatListContainer}
          source={{ uri: item.imageSource }}
        />
      </View>
    );
  }

  function musicExchange(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollX = event.nativeEvent.contentOffset.x;

    if(scrollX % windowWidth === 0) {
      const index = scrollX / windowWidth;

      if(!fromMusicBar) {
        dispatch(toggleMusicAndArtist(index));
        dispatch(playOrPauseMusic(true, index));
      }
      fromMusicBar = false;
    }
  }
  
  // ==================================================================
  // ==================================================================

  const handleToActualPlaylistScreen = () => {
    navigation.navigate('ActualPlaylistScreen');
  };

  return(
    <Background 
      children={
        <>
          <TopBar>

            <TopBar.Left>
              <TopBar.Left.ToBackScreen onPress={handleToPreviousScreen}>
                <ChevronIcon />
              </TopBar.Left.ToBackScreen>
            </TopBar.Left>

            <TopBar.Middle>
              <TopBar.Title>
                {"TOCANDO MÚSICA"}
              </TopBar.Title>
              <TopBar.SubTitle>
                {songs[actualMusic.indexOfMusic].artist}
              </TopBar.SubTitle>
            </TopBar.Middle>

            <TopBar.Right>
              <TopBar.Right.MoreOptions>
                <MoreVertIcon />
              </TopBar.Right.MoreOptions>
            </TopBar.Right>

          </TopBar>

          <ScreenArea>

            <CoverArea>
              <FlatList 
                initialScrollIndex={actualMusic.indexOfMusic}
                pagingEnabled
                overScrollMode="never" 
                showsHorizontalScrollIndicator={false}
                horizontal
                style={styles.flatListContainer}

                data={songs}
                renderItem={({item, index}) => renderImageFromFlatList({item, index})}
                keyExtractor={(item) => item.key}
                onScroll={musicExchange}
              />
              
            </CoverArea>
            <PlayerArea>
              
              <PlayerArea.Content>

                <PlayerArea.Content.Info>
                  <PlayerArea.Content.Info.Title>
                    {songs[actualMusic.indexOfMusic].name}
                  </PlayerArea.Content.Info.Title>
                  <PlayerArea.Content.Info.Author>
                    {songs[actualMusic.indexOfMusic].artist}
                  </PlayerArea.Content.Info.Author>
                </PlayerArea.Content.Info>

                <PlayerArea.Content.FavoriteButton 
                  isFavorite={songs[actualMusic.indexOfMusic].favorite}
                  indexOfMusic={actualMusic.indexOfMusic}
                />

              </PlayerArea.Content>

            </PlayerArea>
            <Controls>

              <Slider
                musicDuration={160}
                currentMusicTime={130}

                value={100}

                onSlidingComplete={() => {}}
                onSlidingStart={() => {}}

                onValueChange={() => {}}
              />

              <ShuffleButton isClicked={false}/>
              
              <Controls.SkipBack onPress={() => {}}>
                <Feather name="skip-back" color="#fff" size={27}/>
              </Controls.SkipBack>

              <Controls.Play onPress={playOrPause}>
                  {
                    actualMusic.playing
                    ? <PauseIcon />
                    : <PlayIcon />
                  }
              </Controls.Play>
              
              <Controls.SkipForward onPress={() => {}}>
                <Feather name="skip-forward" color="#fff" size={27}/>
              </Controls.SkipForward>
              
              <TouchableOpacity onPress={handleToActualPlaylistScreen}>
                <PlaylistIcon />
              </TouchableOpacity>

            </Controls>
          </ScreenArea>

        </>
      }
    />
  );
}

export default MusicScreen;