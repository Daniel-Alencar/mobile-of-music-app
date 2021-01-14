import React from 'react';

import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from './pages/Home';
import SearchScreen from './pages/SearchScreen';

import ArtistsScreen from './pages/ArtistsScreen';
import PlaylistsScreen from './pages/PlaylistsScreen';




const windowWidth = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();
function TabsOfLibraryScreen() {
  return(
    <Tab.Navigator 
      initialRouteName="Artistas"
      screenOptions={{  }}
      tabBarPosition={"top"}
      initialLayout={{ width: windowWidth }}
      style={{ backgroundColor: '#0f0', borderRadius: 0, marginTop: 40 }}
    >
      <Tab.Screen name="Artistas" component={ArtistsScreen} />
      <Tab.Screen name="Playlists" component={PlaylistsScreen} />
    </Tab.Navigator>
  );
}

const Bottom = createBottomTabNavigator();
function BottomsOfAllApp() {
  return(
    <Bottom.Navigator screenOptions={{ tabBarVisible: true }}>
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
