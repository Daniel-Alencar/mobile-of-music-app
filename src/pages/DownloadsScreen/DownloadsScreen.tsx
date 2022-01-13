import React, { useEffect } from 'react';

import MusicContainer from './MusicContainer';
import DefaultScreen from '../../components/DefaultScreen';

import { useSelector } from 'react-redux';
import { StateReducerData } from '../../store';

function DownloadsScreen() {

  const songs = useSelector((state: StateReducerData) => {
    return state.MusicPlaylist;
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
    </>
  );
}

export default DownloadsScreen;