import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen/HomeScreen';
import PlaylistScreen from '../pages/PlaylistScreen';
import ArtistDetailsScreen from '../pages/ArtistDetailsScreen';
import SettingsScreen from '../pages/SettingsScreen/SettingsScreen';

const Stack = createStackNavigator();
export default function HomeStack() {
  return(
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlaylistScreen" component={PlaylistScreen} />
        <Stack.Screen name="ArtistDetailsScreen" component={ArtistDetailsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
}
