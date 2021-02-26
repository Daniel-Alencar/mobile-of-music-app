import React from 'react';

import MusicContainer from './MusicContainer';
import DefaultScreen from '../../components/DefaultScreen';

import songs from '../songsOfPlaylist';

export default function DownloadsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            {songs.map((song) => {
              return (
                <MusicContainer key={song.key}
                  musicName={song.name}
                  artistName={song.artist}
                  isFavorite={song.favorite}
                  centerTextMusic
                />
              );
            })}
          </>
        }
      />

    </>
  );
}
