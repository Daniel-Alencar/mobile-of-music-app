import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import PlaylistIcon from "../../MusicScreen/icons/PlaylistIcon";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import styles from './styles';

import { useDispatch } from "react-redux";
import { playOrPauseMusic, toggleMusicAndArtist } from '../../../store/MusicInformation/MusicInformation.actions';

interface MusicViewProps {
  playing?: boolean
  selected?: boolean
  musicName: string
  artistName: string
  indexOfMusicInArray: number
}

export default function MusicView(props: MusicViewProps) {

  const [checkBoxState, setCheckBoxState] = useState(false);

  const dispatch = useDispatch();
  function playMusic() {
    dispatch(toggleMusicAndArtist(props.indexOfMusicInArray))
    dispatch(playOrPauseMusic(true, props.indexOfMusicInArray));
  }

  return(
    <TouchableOpacity style={styles.container} onPress={playMusic}>
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
          >
            {props.musicName}
          </Text>
          <Text 
            style={styles.artistName}
          >
            {props.artistName}
          </Text>
        </View>
      </View>

      <TouchableOpacity style={styles.right}>
        <PlaylistIcon />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}