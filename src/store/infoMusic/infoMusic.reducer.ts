const INICIAL_STATE = {
  key: 0,
  playing: false,
  incomplete: false,
}

function infoMusic(state = INICIAL_STATE, action: any) {
  console.log(action);

  switch(action.type) {
    case 'SET_INITIAL_MUSIC':
      return {
        ...state,
        key: action.key
      }
    case 'TOOGLE_MUSIC_AND_ARTIST':
      return {
        ...state,
        key: action.key
      }
    case 'PLAY_OR_PAUSE_MUSIC':
      return {
        ...state,
        playing: action.playing
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

export default infoMusic;
