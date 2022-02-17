import { ScrollView, View, TouchableOpacity, Text } from "react-native";
import MusicView from "./MusicView";

import styles from './styles';

export default function ActualPlaylistScreen() {
  return(
    <>
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 120 }}
        style={{ backgroundColor: "#000" }}
      >
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <MusicView playing/>
          <MusicView />
          <MusicView />
          <MusicView />
          <MusicView />
          <MusicView />
          <MusicView />
          <MusicView />
          <MusicView />
          <MusicView />
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
