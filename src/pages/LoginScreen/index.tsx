import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';

export default function LoginScreen() {
  const { signed } = { signed: true }

  function handleSignIn() {
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}