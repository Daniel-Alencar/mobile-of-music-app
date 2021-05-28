const INICIAL_STATE = {
  key: 0,
  playing: false,
}

function infoMusic(state = INICIAL_STATE, action: any) {
  console.log(action);

  switch(action.type) {
    case 'SET_INITIAL_MUSIC':
      return {
        key: action.key
      }
    case 'TOOGLE_MUSIC_AND_ARTIST':
      return {
        key: action.key
      }
    case 'PLAY_MUSIC':
      return {
        playing: action.playing
      }

    default:
      return state;
  }
}

export default infoMusic;
