import React, { useContext } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import { signIn } from '../../services/auth';
import styles from './style';

import AuthContext from '../../context/auth';

export default function LoginScreen() {
  const { signed } = useContext(AuthContext);

  async function handleSignIn() {
    const response = await signIn();
    console.log(response);
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}