import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StackMusic from './StackNavigation';

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackMusic />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
