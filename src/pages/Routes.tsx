import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();

import ArtistsScreen from './ArtistsScreen';
import PlaylistsScreen from './PlaylistsScreen';
import DownloadsScreen from './DownloadsScreen';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
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
