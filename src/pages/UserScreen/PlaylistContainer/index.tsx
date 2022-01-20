import { Image, Text, TouchableOpacity, View } from "react-native";

import styles from "./style";

export default function PlaylistContainer() {
  return (
    <View style={styles.playlistContainer}>
      <TouchableOpacity 
        style={styles.playlistButton}
      >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../../assets/images/Playlist/playlistDefault.png')}
            style={styles.playlistImage}
          />

          <View style={styles.flexStartTextContainer}>
            <Text style={styles.playlistText}>
              {"Gravity"}
            </Text>
            <Text style={styles.followersText}>
              {"0 seguidores"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}