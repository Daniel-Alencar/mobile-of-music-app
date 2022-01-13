
export function toggleMusicAndArtist(indexOfMusic: number) {
  return {
    type: 'TOOGLE_MUSIC_AND_ARTIST',
    indexOfMusic: indexOfMusic
  };
}

export function playOrPauseMusic(playing: boolean) {
  return {
    type: 'PLAY_OR_PAUSE_MUSIC',
    playing: playing
  };
}

export function setSongsIncomplete(incomplete: boolean) {
  return {
    type: 'ARE_THE_SONGS_INCOMPLETE',
    incomplete: incomplete
  };
}

export function changeFavorite(isFavorite: boolean) {
  return {
    type: 'CHANGE_FAVORITE',
    isFavorite: isFavorite
  };
}
