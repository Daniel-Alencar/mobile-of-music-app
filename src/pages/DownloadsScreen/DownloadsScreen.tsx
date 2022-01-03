import React, { useState, useEffect } from 'react';

import MusicContainer from './MusicContainer';
import DefaultScreen from '../../components/DefaultScreen';

import songs from '../songsOfPlaylist';

export default function DownloadsScreen() {

  const [sounds, setSounds] = useState(songs);
  useEffect(() => {
    setSounds(songs);
  }, [songs]);

  return (
    <>
      <DefaultScreen 
        content={
          <>
            {sounds.map((song, index) => {
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
