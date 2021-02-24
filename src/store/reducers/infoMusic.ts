const INICIAL_STATE = {
  key: 0
}

function infoMusic(state = INICIAL_STATE, action: any) {
  console.log(action);

  if(action.type === 'TOOGLE_MUSIC_AND_ARTIST') {
    return {
      key: action.key
    }
  }
  if(action.type === 'SET_INITIAL_MUSIC') {
    return {
      key: action.key
    }
  }
  return state;
}

export default infoMusic;
