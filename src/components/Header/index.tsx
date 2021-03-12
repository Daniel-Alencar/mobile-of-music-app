import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';

interface propsHeader {
  title?: string,
  colors?: string[],
}

export default function Header(props: propsHeader) {

  const navigation = useNavigation();
  const handleToGobackScreen = () => {
    navigation.goBack();
  }

  return(
    <SafeAreaView >
      <LinearGradient 
        colors={
          props.colors
          ? props.colors
          : ['#000', '#000']
        }
      >
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.goBackButton}
          onPress={handleToGobackScreen}  
        >
          <Feather name="arrow-left" color="#fff" size={20}/>
        </TouchableOpacity>

        <Text style={{ color: '#fff' }}>
          {props.title ? props.title : "Playlist"}
        </Text>

        <TouchableOpacity style={styles.goBackButton}>
          <Feather name="more-vertical" color="#fff" size={20}/>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}