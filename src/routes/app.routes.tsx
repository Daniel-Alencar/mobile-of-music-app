import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MusicScreen from '../pages/MusicScreen';
import AppMainScreen from './AppMainScreen';

const Stack = createStackNavigator();
export default function App() {
  return(
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppMainScreen" component={AppMainScreen} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
      </Stack.Navigator>
    </>
  );
}

