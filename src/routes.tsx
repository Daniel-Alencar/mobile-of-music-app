import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './pages/Home';
import SearchScreen from './pages/SearchScreen';

import ArtistsScreen from './pages/ArtistsScreen';
import PlaylistsScreen from './pages/PlaylistsScreen';






const Tab = createMaterialTopTabNavigator();
function TabsOfLibraryScreen() {
  return(
    <Tab.Navigator initialRouteName="Artistas">
      <Tab.Screen name="Artistas" component={ArtistsScreen} />
      <Tab.Screen name="Playlists" component={PlaylistsScreen} />
    </Tab.Navigator>
  );
}

const Bottom = createBottomTabNavigator();
function BottomsOfAllApp() {
  return(
    <Bottom.Navigator screenOptions={{ tabBarVisible: false }}>
      <Bottom.Screen 
        name="Home" 
        component={Home} 
      />

      <Bottom.Screen 
        name="SearchScreen" 
        component={SearchScreen} 
      />

      <Bottom.Screen 
        name="LibraryScreen" 
        component={TabsOfLibraryScreen} 
      />
    </Bottom.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <BottomsOfAllApp/>
    </NavigationContainer>
  );
}
