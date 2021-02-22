const INICIAL_STATE = {
  musicName: '',
	artist: '',
}

function infoMusic(state = INICIAL_STATE, action: any) {
  console.log(action);

  if(action.type === 'TOOGLE_MUSIC_AND_ARTIST') {
    return {
      musicName: action.musicName,
      artist: action.artist,
    }
  }
  if(action.type === 'SET_INITIAL_MUSIC') {
    return {
      musicName: action.musicName,
      artist: action.artist,
    }
  }
  return state;
}

export default infoMusic;