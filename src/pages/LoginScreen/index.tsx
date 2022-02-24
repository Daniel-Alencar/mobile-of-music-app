import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { View, TouchableOpacity, Text } from 'react-native';

import { Dropbox } from 'dropbox';

import styles from './style';

export default function LoginScreen() {

  const _handleOpenURL = (ev: any) => {
    console.log(ev);
  }

  const openDropBox = () => {
    var dbx = new Dropbox({ accessToken: 'YOUR_ACCESS_TOKEN_HERE' });
    dbx.filesListFolder({path: ''})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {
    Linking.getInitialURL().then((ev) => {
      if (ev) {
        _handleOpenURL(ev);
      }
    }).catch(err => {
        console.warn('An error occurred', err);
    });
    Linking.addEventListener('exp://10.0.0.37:19000', _handleOpenURL);
  }, []);

  const link = "https://www.dropbox.com/oauth2/authorize?client_id=bupw6noqoenygsa&redirect_uri=exp://10.0.0.37:19000&response_type=token";

  async function handleSignIn() {
    await Linking.openURL(link);
  }

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}