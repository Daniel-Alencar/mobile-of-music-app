import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

import ArtistsScreen from './pages/ArtistsScreen';
import PlaylistsScreen from './pages/PlaylistsScreen';
import DownloadsScreen from './pages/DownloadsScreen';

export default function routesLibrary() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="ArtistsScreen" >
        <Screen 
          name="ArtistsScreen" 
          component={ArtistsScreen} 
        />
        <Screen 
          name="PlaylistsScreen" 
          component={PlaylistsScreen} 
        />
        <Screen 
          name="DownloadsScreen" 
          component={DownloadsScreen} 
        />
      </Navigator>
    </NavigationContainer>
  );
}
