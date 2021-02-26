import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import MusicScreen from '../pages/MusicScreen';
import BottomsOfAllApp from './BottomTabNavigation';

const Stack = createStackNavigator();
export default function StackMusic() {
  return(
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomsOfAllApp" component={BottomsOfAllApp} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
      </Stack.Navigator>
    </>
  );
}
