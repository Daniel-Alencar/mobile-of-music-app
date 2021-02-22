
export function toggleMusicAndArtist(musicName: string, artist: string) {
  return {
    type: 'TOOGLE_MUSIC_AND_ARTIST',
    musicName: musicName,
    artist: artist, 
  };
}

export function setInitialMusic(musicName: string, artist: string) {
  return {
    type: 'SET_INITIAL_MUSIC',
    musicName: musicName,
    artist: artist, 
  };
}