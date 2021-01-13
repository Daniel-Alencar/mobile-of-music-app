import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import Home from './pages/Home';
import SearchScreen from './pages/SearchScreen';
import ArtistsScreen from './pages/ArtistsScreen';
import SettingsScreen from './pages/SettingsScreen';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ tabBarVisible: false }}>
        <Screen 
          name="Home" 
          component={Home} 
        />

        <Screen 
          name="SearchScreen" 
          component={SearchScreen} 
        />

        <Screen 
          name="ArtistsScreen" 
          component={ArtistsScreen} 
        />

        <Screen 
          name="SettingsScreen" 
          component={SettingsScreen} 
        />
      </Navigator>
    </NavigationContainer>
  );
}
