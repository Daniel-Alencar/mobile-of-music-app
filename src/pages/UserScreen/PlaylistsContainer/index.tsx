import { Text, View } from "react-native";

import PlaylistContainer from "../PlaylistContainer";
import styles from './style';

interface PlaylistsContainerProps {
  name: string
}

export default function PlaylistsContainer(props: PlaylistsContainerProps) {
  return(
    <View style={styles.playlistsContainer}>
          
      <Text style={styles.typeOfPlaylist}>
        {props.name}
      </Text>
      
      <PlaylistContainer />
      <PlaylistContainer />

    </View>
  );
}