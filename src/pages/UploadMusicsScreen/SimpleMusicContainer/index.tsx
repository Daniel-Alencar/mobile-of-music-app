import { TouchableOpacity, View, Image, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from './styles';

interface SimpleMusicContainerProps {
  centerText?: boolean,
  rightIcon: string,
  rightFunction(): void,
}

export default function SimpleMusicContainer(props: SimpleMusicContainerProps) {
  return (
    <View style={styles.MusicContainer}>
      {
        props.centerText
        ? <TouchableOpacity 
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

            <TouchableOpacity 
              style={styles.trashButton}
              onPress={props.rightFunction}
            >
              <Feather name={props.rightIcon} color={"#fff"} size={25}/>
            </TouchableOpacity>

          </TouchableOpacity>
        :
          <TouchableOpacity 
            style={styles.MusicButton}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            </View>

            <TouchableOpacity 
              style={styles.trashButton}
              onPress={props.rightFunction}
            >
              <Feather name={props.rightIcon} color={"#fff"} size={25}/>
            </TouchableOpacity>

          </TouchableOpacity>
      }
    </View>
  );
}