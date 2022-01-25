import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { MusicBarHeight } from "../../settingsDefault";
import { StateReducerData } from "../../store";
import PlaylistsContainer from "../UserScreen/PlaylistsContainer";

import styles from './style';

export default function PlaylistChoiceScreen() {

  const navigate = useNavigation();
  const handleToPlaylistCreationScreen = () => {
    navigate.navigate('PlaylistCreationScreen');
  };

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return (
    <>
      <View style={styles.generalContainer}>
        <View style={styles.createNewplaylistView}
        >
          <TouchableOpacity
            style={styles.addPlaylistButton}
            onPress={handleToPlaylistCreationScreen}
          >
            <Text style={styles.addPlaylistButtonText}>
              Criar nova playlist
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <PlaylistsContainer name="Playlists públicas"/>
          <PlaylistsContainer name="Playlists privadas"/>
          <PlaylistsContainer name="Playlists privadas"/>
          <PlaylistsContainer name="Playlists privadas"/>
        </ScrollView>
      </View>
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }}/>
    </>
  );
}