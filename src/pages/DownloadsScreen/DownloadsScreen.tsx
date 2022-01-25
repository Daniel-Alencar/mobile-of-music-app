import React from 'react';

import MusicContainer from './MusicContainer';
import DefaultScreen from '../../components/DefaultScreen';

import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';
import { View } from 'react-native';
import { MusicBarHeight } from '../../settingsDefault';

function DownloadsScreen() {

  const { songs, IncompleteSong } = useSelector((state: StateReducerData) => {
    return {
      songs: state.MusicPlaylist,
      IncompleteSong: state.MusicInformation.incomplete
    };
  });

  return (
    <>
      <DefaultScreen 
        content={
          <>
            {songs.map((song, index) => {
              return (
                <MusicContainer 
                  key={song.key}
                  keyValue={song.key}
                  musicName={song.name}
                  artistName={song.artist}
                  isFavorite={song.favorite}
                  centerTextMusic
                  indexOfMusicInArray={index}
                  imageSource={song.imageSource}
                  musicSource={song.musicSource}
                />
              );
            })}
          </>
        }
      />
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }}/>
    </>
  );
}

export default DownloadsScreen;