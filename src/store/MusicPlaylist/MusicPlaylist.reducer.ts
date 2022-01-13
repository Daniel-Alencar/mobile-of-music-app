import { MusicData } from "../index";

const INITIAL_STATE: MusicData[] = []; 

export default function(state = INITIAL_STATE, action: any) {
  console.log(action);

  switch(action.type) {
    case 'ADD_MUSIC_IN_LAST_POSITION':
      state.push(action.musicToAdd)
      return (
        state
      )
    case 'REMOVE_MUSIC_IN_LAST_POSITION':
      state.pop()
      return (
        state
      )
    case 'CLEAR_PLAYLIST':
      return [];

    default:
      return state;
  }
}