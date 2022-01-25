import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { Feather } from '@expo/vector-icons';

import styles from './style';
import SimpleMusicContainer from "./SimpleMusicContainer";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { StateReducerData } from "../../store";
import { MusicBarHeight } from "../../settingsDefault";

export default function UploadMusicsScreen() {

  const navigate = useNavigation();
  function handleToPlaylistChoice() {
    navigate.navigate('PlaylistChoiceScreen');
  }

  const IncompleteSong = useSelector((state: StateReducerData) => {
    return state.MusicInformation.incomplete;
  });

  return (
    <>
      <View style={styles.generalContainer}>

        <View style={styles.uploadMusicView}>
          <TouchableOpacity style={styles.uploadMusicButton}>
            <Feather name="file-plus" size={50} color='white'/>
            <Text style={styles.uploadMusicText}>Adicione uma música</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.musicsScrollView}>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 100
            }}
          >
            <SimpleMusicContainer />
            <SimpleMusicContainer />
            <SimpleMusicContainer />
            <SimpleMusicContainer />
            <SimpleMusicContainer />
            <SimpleMusicContainer />
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
      <View style={{ height: IncompleteSong ? MusicBarHeight : 0 }}/>
    </>
  )
}
