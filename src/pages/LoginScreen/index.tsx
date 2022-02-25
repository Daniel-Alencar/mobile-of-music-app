import React, { useState } from 'react';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { View, TouchableOpacity, Text } from 'react-native';
import Constants from 'expo-constants';

import styles from './style';

export default function LoginScreen() {

  const [redirectedData, setRedirectedData] = useState<Linking.ParsedURL>();

  const link = "https://www.dropbox.com/oauth2/authorize?client_id=bupw6noqoenygsa&response_type=token";
  const redirect_uri = Linking.createURL("");

  const full_link = link + '&redirect_uri=' + redirect_uri;









  
  const redirectData = () => {
    if(redirectedData) {
      return (
        <Text style={{ marginTop: 30 }}>
          {JSON.stringify(redirectedData)}
        </Text>
      );
    }
    return "NADA";
  };






  const _handleRedirect = (event: any) => {
    if (Constants.platform?.ios) {
      WebBrowser.dismissBrowser();
    } else {
      _removeLinkingListener();
    }

    console.log(event.url)
    let data = Linking.parse(event.url);
    setRedirectedData(data);
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
      <TouchableOpacity style={styles.button} onPress={_openBrowserAsync}>
        <Text>Login</Text>
      </TouchableOpacity>
      <Text>
        {redirectData()}
      </Text>
    </View>
  );
}