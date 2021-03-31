import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen/HomeScreen';
import PlaylistScreen from '../pages/PlaylistScreen';
import ArtistDetailsScreen from '../pages/ArtistDetailsScreen';
import SettingsScreen from '../pages/SettingsScreen/SettingsScreen';

import Header from '../components/Header';

const Stack = createStackNavigator();
export default function HomeStack() {
  return(
    <>
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: true, 
          header: () => <Header /> 
        }}
      >
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PlaylistScreen" 
          component={PlaylistScreen} 
          options={{ headerShown: true, header: () => <Header/> }}
        />
        <Stack.Screen name="ArtistDetailsScreen" component={ArtistDetailsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
}
