import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import App from './app.routes';
import Auth from './auth.routes';

export default function Routes() {
  const verificar = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {verificar ? <Auth /> : <App />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
