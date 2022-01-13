import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {

  const signed = true;

  if(false) {
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size={50} color="#666"/>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {signed ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
