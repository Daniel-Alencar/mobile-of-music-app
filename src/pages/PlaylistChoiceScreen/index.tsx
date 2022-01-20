import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import PlaylistsContainer from "../UserScreen/PlaylistsContainer";

import styles from './style';

export default function PlaylistChoiceScreen() {

  const navigate = useNavigation();
  const handleToPlaylistCreationScreen = () => {
    navigate.navigate('PlaylistCreationScreen');
  };

  return (
    <View style={{ backgroundColor: '#000', height: '100%' }}>
      <View style={{ 
        height: 100,
        width: '100%',

        alignItems: 'center',
        justifyContent: 'center',
      }}
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
  );
}