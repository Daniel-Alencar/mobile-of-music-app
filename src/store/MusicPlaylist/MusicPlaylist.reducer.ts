import songs from "../../assets/playlists/songsOfPlaylist";
import { MusicData } from "../index";

const INITIAL_STATE: MusicData[] = songs; 

export default function(state = INITIAL_STATE, action: any) {
  console.log(action);

  switch(action.type) {
    case 'ADD_MUSIC':
      return [
        ...state,
        action.musicToAdd
      ]
    case 'REMOVE_MUSIC':
      state.pop();
      return [
        ...state
      ]
    case 'CLEAR_PLAYLIST':
      return [];
    case 'CHANGE_FAVORITE':
      const favorite = state[action.index].favorite;
      state[action.index].favorite = !favorite;
      return [
        ...state
      ];

    default:
      return state;
  }
}