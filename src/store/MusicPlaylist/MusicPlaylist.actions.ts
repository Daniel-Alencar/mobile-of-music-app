import { MusicData } from "../index"

export function addMusic(music: MusicData, index: number) {
  return {
    type: 'ADD_MUSIC',
    musicToAdd: music,
    index: index
  }
}

export function removeMusic(index: number) {
  return {
    type: 'REMOVE_MUSIC',
    index: index
  }
}

export function clearPlaylist() {
  return {
    type: 'CLEAR_PLAYLIST'
  }
}

export function changeFavorite(index: number) {
  return {
    type: 'CHANGE_FAVORITE',
    index: index
  }
}
