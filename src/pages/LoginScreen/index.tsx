import React from 'react';
import { Linking } from 'react-native';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';

export default function LoginScreen() {

  const link = "https://www.dropbox.com/oauth2/authorize?client_id=bupw6noqoenygsa&redirect_uri=https://translate.google.com.br/&response_type=code";

  function handleSignIn() {
    Linking.openURL(link);
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}