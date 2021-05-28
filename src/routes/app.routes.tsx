import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MusicScreen from '../pages/MusicScreen';
import AppMainScreen from './AppMainScreen';

import { setSettingsInAudio, prepareNewSound } from '../pages/Music';

const Stack = createStackNavigator();
export default function App() {

  useEffect(() => {
    setSettingsInAudio()
      .then(() => {
        prepareNewSound();
    });
  },[]);

  return(
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppMainScreen" component={AppMainScreen} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
      </Stack.Navigator>
    </>
  );
}

