
export function setInitialMusic(key: number) {
  return {
    type: 'SET_INITIAL_MUSIC',
    key: key 
  };
}

export function toggleMusicAndArtist(key: number) {
  return {
    type: 'TOOGLE_MUSIC_AND_ARTIST',
    key: key
  };
}

export function playMusic(playing: boolean) {
  return {
    type: 'PLAY_MUSIC',
    playing: playing
  }
}