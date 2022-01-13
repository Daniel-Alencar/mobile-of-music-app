import { MusicInformation } from "../index";

const INICIAL_STATE: MusicInformation = {
  indexOfMusic: 0,
  playing: false,
  incomplete: false,
}

export default function(state = INICIAL_STATE, action: any) {
  console.log(action);

  switch(action.type) {
    case 'TOOGLE_MUSIC_AND_ARTIST':
      return {
        ...state,
        indexOfMusic: action.indexOfMusic
      }
    case 'PLAY_OR_PAUSE_MUSIC':
      return {
        ...state,
        playing: action.playing,
        indexOfMusic: action.index,
        incomplete: true
      }
    case 'ARE_THE_SONGS_INCOMPLETE':
      return {
        ...state,
        incomplete: action.incomplete
      }

    default:
      return state;
  }
}
