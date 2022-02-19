import { ScrollView, View, TouchableOpacity, Text } from "react-native";

import MusicView from "./MusicView";

import { useSelector } from "react-redux";
import { StateReducerData } from "../../store";

import styles from './styles';

export default function ActualPlaylistScreen() {

  const { songs } = useSelector((state: StateReducerData) => {
    return {
      songs: state.MusicPlaylist,
    };
  });

  return(
    <>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 120 }}
        style={{ backgroundColor: "#000" }}
      >
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          {
            songs.map((song, index) => {
              return (
                <MusicView 
                  key={song.key}
                  musicName={song.name}
                  artistName={song.artist}
                  indexOfMusicInArray={index}
                />
              );
            })
          }
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={{ ...styles.Button, backgroundColor: '#d23535' }}
        >
          <Text style={styles.ButtonText}>
            Remover
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.Button}
        >
          <Text style={styles.ButtonText}>
            Adicionar a fila
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
