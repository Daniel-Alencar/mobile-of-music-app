import React, { useState, useEffect } from 'react';

import MusicContainer from './MusicContainer';
import DefaultScreen from '../../components/DefaultScreen';

import songs from '../../assets/playlists/songsOfPlaylist';

export default function DownloadsScreen() {
  return (
    <>
      <DefaultScreen 
        content={
          <>
            {songs.map((song, index) => {
              return (
                <MusicContainer 
                  key={song.key}
                  musicName={song.name}
                  artistName={song.artist}
                  isFavorite={song.favorite}
                  centerTextMusic
                  indexOfMusicInArray={index}
                  imageSource={song.imageSource}
                />
              );
            })}
          </>
        }
      />

    </>
  );
}
