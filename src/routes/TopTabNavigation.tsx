import React from 'react';

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ArtistsScreen from "../pages/ArtistScreen/ArtistsScreen";
import DownloadsScreen from "../pages/DownloadsScreen/DownloadsScreen";
import PlaylistsScreen from "../pages/PlaylistsScreen/PlaylistsScreen";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { windowWidth } from '../settingsDefault';

const Tab = createMaterialTopTabNavigator();
export default function TabsOfLibraryScreen() {
  
  const insets = useSafeAreaInsets();
  return(
    <Tab.Navigator 
      initialRouteName="Artistas"
      tabBarPosition="top"
      
      style={{ 
        backgroundColor: '#4e4b4b', 
        paddingTop: insets.top,
      }}

      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#ffffff66',

        scrollEnabled: true,

        style: {
          backgroundColor: '#000',
          height: 50,
          width: windowWidth,
        },
        tabStyle: {
          backgroundColor: '#000',
          width: 'auto',

          paddingLeft: 10,
          paddingRight: 10,
          padding: 0,
        },
        labelStyle: {
          fontSize: 32,

          textTransform: 'none',
          backgroundColor: '#000',
        },
      }}

      sceneContainerStyle={{
        borderWidth: 0,
        borderColor: '#f00',
      }}
    >
      <Tab.Screen name="Artistas" component={ArtistsScreen} />
      <Tab.Screen name="Playlists" component={PlaylistsScreen} />
      <Tab.Screen name="Downloads" component={DownloadsScreen} />
    </Tab.Navigator>
  );
}
