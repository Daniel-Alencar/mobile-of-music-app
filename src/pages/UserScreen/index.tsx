import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import PlaylistsContainer from "./PlaylistsContainer";

import styles from "./style";

export default function UserScreen() {
  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <View style={styles.mainInformationContainer}>
          <View style={styles.photoContainer}>
            <Image 
              style={styles.userImage}
              source={require('../../assets/images/User/userImage.png')}
            />
          </View>
          <Text style={styles.username}>
            Daniel Alencar
          </Text>

          <View style={styles.numbersInformationContainer}>
            <TouchableOpacity>
              <Text style={styles.numberInformation}>0 Playlists</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.numberInformation}>0 Seguidores</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.numberInformation}>0 Seguindo</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.typesOfPlaylistsContainer}>

          <PlaylistsContainer name={"Playlists públicas"}/>
          <PlaylistsContainer name={"Playlists privadas"}/>

        </View>
      </ScrollView>
    </View>
  )
}
