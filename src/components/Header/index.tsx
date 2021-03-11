import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Feather } from '@expo/vector-icons';

import styles from './style';

export default function Header() {
  return(
    <SafeAreaView >
      <View style={styles.container}>
        <TouchableOpacity style={styles.goBackButton}>
          <Feather name="arrow-left" color="#fff" size={20}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.goBackButton}>
          <Feather name="more-vertical" color="#fff" size={20}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}