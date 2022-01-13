import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';
import PlaylistScreen from '../pages/PlaylistScreen';
import ArtistDetailsScreen from '../pages/ArtistDetailsScreen';
import SettingsScreen from '../pages/SettingsScreen';
import MusicScreen from '../pages/MusicScreen';

import Header from '../components/Header';

const Stack = createStackNavigator();
export default function AppHomeScreen() {
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
          options={{ headerShown: true, header: () => <Header title="Playlist"/> }}
        />
        <Stack.Screen 
          name="ArtistDetailsScreen" 
          component={ArtistDetailsScreen}
          options={{ headerShown: true, header: () => <Header title="Artista"/> }} 
        />
        <Stack.Screen 
          name="SettingsScreen" 
          component={SettingsScreen}
          options={{ headerShown: true, header: () => <Header title="Configurações"/> }}  
        />
        <Stack.Screen 
          name="MusicScreen" 
          component={MusicScreen}
          options={{ headerShown: false, header: () => <Header title="Tela de Música"/> }}  
        />
      </Stack.Navigator>
    </>
  );
}
