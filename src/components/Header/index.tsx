import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './style';

export default function Header() {

  const navigation = useNavigation();
  const handleToGobackScreen = () => {
    navigation.goBack();
  }

  return(
    <SafeAreaView >
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.goBackButton}
          onPress={handleToGobackScreen}  
        >
          <Feather name="arrow-left" color="#fff" size={20}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.goBackButton}>
          <Feather name="more-vertical" color="#fff" size={20}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}