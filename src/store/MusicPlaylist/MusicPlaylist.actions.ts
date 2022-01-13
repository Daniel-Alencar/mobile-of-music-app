import { MusicData } from "../index"

export function addMusicInLastPosition(music: MusicData, index: number) {
  return {
    type: 'ADD_MUSIC_IN_LAST_POSITION',
    musicToAdd: music,
    index: index
  }
}

export function removeMusicInLastPosition(index: number) {
  return {
    type: 'REMOVE_MUSIC_IN_LAST_POSITION',
    index: index
  }
}

export function clearPlaylist() {
  return {
    type: 'CLEAR_PLAYLIST'
  }
}