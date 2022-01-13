
export function toggleMusicAndArtist(indexOfMusic: number) {
  return {
    type: 'TOOGLE_MUSIC_AND_ARTIST',
    indexOfMusic: indexOfMusic
  };
}

export function playOrPauseMusic(playing: boolean, index: number) {
  return {
    type: 'PLAY_OR_PAUSE_MUSIC',
    index: index,
    playing: playing
  };
}
