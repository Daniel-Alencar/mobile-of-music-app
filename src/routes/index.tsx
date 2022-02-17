import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppRoutes from './app.routes';

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {<AppRoutes />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
