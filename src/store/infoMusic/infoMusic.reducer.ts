const INICIAL_STATE = {
  key: 0
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

    default:
      return state;
  }
}

export default infoMusic;
