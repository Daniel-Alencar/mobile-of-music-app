import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './style';
import { useState } from 'react';

export default function PlaylistCreationScreen() {

  const [text, setText] = useState('');

  return (
    <View style={styles.contentContainer}>
      <View style={styles.uploadCoverView}>
        <TouchableOpacity style={styles.uploadMusicButton}>
          <Feather name="file-plus" size={50} color='white'/>
          <Text style={styles.uploadMusicText}>Adicione uma capa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputsContainer}>

        <Text style={styles.textOfTextInput}>Nome</Text>
        <TextInput
          returnKeyType="search"
          style={styles.input}
          onChangeText={(text) => {setText(text)}}
          value={text}
        />
        <View style={styles.playlistPrivadaContainer}>
          <View style={styles.selector}>

          </View>
          <Text style={{ color: '#fff' }}>Playlist privada</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={{ ...styles.Button, backgroundColor: '#d23535' }}
          onPress={() => {}}
        >
          <Text style={styles.ButtonText}>
            Cancelar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.Button}
          onPress={() => {}}
        >
          <Text style={styles.ButtonText}>
            Finalizar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}