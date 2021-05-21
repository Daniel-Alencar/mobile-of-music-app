import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { useAuth } from '../../context/auth';

import styles from './style';

export default function LoginScreen() {
  const { signed, signIn } = useAuth();
  console.log('LoginScreen => Tem alguém logado? ' + signed);

  function handleSignIn() {
    signIn();
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}