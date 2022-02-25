import React, { useState } from 'react';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { View, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';

import styles from './style';

export default function LoginScreen() {

  const [token, setToken] = useState<any>();

  const link = "https://www.dropbox.com/oauth2/authorize?client_id=bupw6noqoenygsa&response_type=token";
  const redirect_uri = Linking.createURL("");
  const full_link = link + '&redirect_uri=' + redirect_uri;








  
  const redirectData = () => {
    if(token) {
      return (
        <Text style={{ marginTop: 30 }}>
          {JSON.stringify(token)}
        </Text>
      );
    }
    return "NADA";
  };




  const getParameter = (url: string, parameter: string) => {
    const initialIndex = url.indexOf(parameter + '=') + parameter.length + 1;
    console.log(initialIndex)

    const str = url.substring(initialIndex);
    console.log(str);

    let length = str.indexOf('&');
    if(length === -1) {
      length = str.length;
    }
    console.log(length)

    const value = url.substring(initialIndex, initialIndex + length);
    console.log(value);
    return value;
  } 

  const _handleRedirect = (event: any) => {
    if (Constants.platform?.ios) {
      WebBrowser.dismissBrowser();
    } else {
      _removeLinkingListener();
    }

    console.log(event.url);

    const access_token = getParameter(event.url, 'access_token');
    setToken(access_token);
  };

  const _addLinkingListener = () => {
    Linking.addEventListener("url", _handleRedirect);
  };
  
  const _removeLinkingListener = () => {
    Linking.removeEventListener("url", _handleRedirect);
  };
  
  const _openBrowserAsync = async () => {
    _addLinkingListener();
    await WebBrowser.openBrowserAsync(full_link);

    if (Constants.platform?.ios) {
      _removeLinkingListener();
    }
  };



  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => _openBrowserAsync()}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>
        {redirectData()}
      </Text>
    </View>
  );
}