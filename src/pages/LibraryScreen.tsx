import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ArtistsScreen from './ArtistsScreen';
import PlaylistsScreen from './PlaylistsScreen';

// ================================================================================================
// ================================================================================================
// ================================================================================================

const Tab = createMaterialTopTabNavigator();

export default function LibraryScreen() {
  return (
    <NavigationContainer independent >
      <Tab.Navigator initialRouteName="ArtistsScreen">
        <Tab.Screen name="ArtistsScreen" component={ArtistsScreen} />
        <Tab.Screen name="PlaylistsScreen" component={PlaylistsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
