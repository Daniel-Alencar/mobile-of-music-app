import { TouchableOpacity, View, Image, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function SimpleMusicContainer() {
  return (
    <View style={styles.MusicContainer}>
      <TouchableOpacity 
        style={styles.MusicButton}
      >
        <Image
          source={require('../../../assets/images/Playlist/playlistDefault.png')}
          style={styles.MusicImage}
        />

        <View style={styles.flexStartTextContainer}>
          <Text style={styles.MusicText}>
            {"Gravity"}
          </Text>
          <Text style={styles.artistName}>
            {"John Mayer"}
          </Text>
        </View>

        <TouchableOpacity style={styles.trashButton}>
          <Feather name='trash-2' color={"#f00"} size={25}/>
        </TouchableOpacity>

      </TouchableOpacity>
    </View>
  );
}