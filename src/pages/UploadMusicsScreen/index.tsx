import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Feather } from '@expo/vector-icons';

import styles from './style';
import SimpleMusicContainer from "./SimpleMusicContainer";
import { useNavigation } from "@react-navigation/native";

export default function UploadMusicsScreen() {

  const navigate = useNavigation();
  function handleToPlaylistChoice() {
    navigate.navigate('PlaylistChoiceScreen');
  }

  return (
    <View style={{ backgroundColor: '#000' }}>

      <View style={styles.uploadMusicView}>
        <TouchableOpacity style={styles.uploadMusicButton}>
          <Feather name="file-plus" size={50} color='white'/>
          <Text style={styles.uploadMusicText}>Adicione uma música</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.musicsScrollView}>
        <ScrollView>
          <SimpleMusicContainer />
          <SimpleMusicContainer />
          <SimpleMusicContainer />
        </ScrollView>
      </View>

      <TouchableOpacity 
        style={styles.addPlaylistButton}
        onPress={handleToPlaylistChoice}
      >
        <Text style={styles.addPlaylistButtonText}>
          Adicionar em uma playlist
        </Text>
      </TouchableOpacity>
    </View>
  )
}
