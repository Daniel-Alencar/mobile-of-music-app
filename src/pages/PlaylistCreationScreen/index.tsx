import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, ToastAndroid, Image } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import BouncyCheckbox from "react-native-bouncy-checkbox";

import styles from './style';

export default function PlaylistCreationScreen() {

  const [checkBoxState, setCheckBoxState] = useState(false);
  const [text, setText] = useState('');
  const [image, setImage] = useState<string>('');

  const navigate = useNavigation();
  const playlistCreated = () => {
    ToastAndroid.show(`Playlist "${text}" criada!`, ToastAndroid.SHORT);
    navigate.navigate('HomeScreen');
  }
  const handleToGoBack = () => {
    navigate.goBack();
  };

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if(status !== 'granted') {
      alert('Precisamos do acesso as suas fotos para escolher a capa');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    
    if(result.cancelled) {
      return;
    }
    const { uri: image } = result;

    setImage(image);
  }

  return (
    <View style={styles.contentContainer}>
      <View style={styles.uploadCoverView}>

        <TouchableOpacity 
          style={styles.uploadMusicButton}
          onPress={handleSelectImages}
        >
          <Feather name="file-plus" size={30} color='white'/>
          <Text style={styles.uploadMusicText}>Adicione uma capa</Text>
        </TouchableOpacity>

        <View>
          {
            image.length !== 0 &&
            <Image
              style={{ height: 100, width: 100 }}
              source={{ uri: image }}
            />
          }
        </View>
      </View>

      <View style={styles.inputsContainer}>

        <Text style={styles.textOfTextInput}>Nome</Text>
        <TextInput
          returnKeyType="search"
          style={styles.input}
          onChangeText={(text) => {setText(text)}}
          value={text}

          selectionColor={'white'}
        />
        <View style={styles.playlistPrivadaContainer}>
          <BouncyCheckbox 
            size={25}
            isChecked={checkBoxState}
            style={styles.selector}

            onPress={() => setCheckBoxState(!checkBoxState)}

            textStyle={{ color: '#fff', fontSize: 15, }}

            unfillColor="#000000"
            fillColor="#c4c4c4"
            iconStyle={{ borderColor: '#c4c4c4', borderRadius: 10 }}
          />

          <Text style={{ color: '#fff' }}>Playlist privada</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={{ ...styles.Button, backgroundColor: '#d23535' }}
          onPress={handleToGoBack}
        >
          <Text style={styles.ButtonText}>
            Cancelar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.Button}
          onPress={playlistCreated}
        >
          <Text style={styles.ButtonText}>
            Finalizar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}