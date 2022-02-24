import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {

  const login = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {login ? <AuthRoutes/> : <AppRoutes />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
