import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import PlaylistIcon from "../../MusicScreen/icons/PlaylistIcon";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Feather } from '@expo/vector-icons';
import styles from './styles';

interface MusicViewProps {
  playing?: boolean
}

export default function MusicView(props: MusicViewProps) {

  const [checkBoxState, setCheckBoxState] = useState(false);

  return(
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.selectButton}>
          {
            props.playing
            ?
              <Image
                source={require('../../../assets/images/Playlist/playlistDefault.png')}
                style={styles.image}
              />
            : 
              <BouncyCheckbox
                size={25}
                isChecked={checkBoxState}
                onPress={() => setCheckBoxState(!checkBoxState)}

                unfillColor="#000000"
                fillColor="#c4c4c4"
                iconStyle={{ borderColor: '#c4c4c4' }}

                style={{
                  height: 25,
                  width: 25,
                }}
              />
          }

        </View>

        <View style={styles.textContainer}>
          <Text 
            style={{
              ...styles.musicName, 
              color: props.playing ? '#0f0' : '#fff',
            }}
          >Gravity</Text>
          <Text style={styles.artistName}>John Mayer</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.right}>
        <PlaylistIcon />
      </TouchableOpacity>
    </View>
  );
}