import React from 'react';

import { Dimensions, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import Home from './pages/Home';
import SearchScreen from './pages/SearchScreen';

import ArtistsScreen from './pages/ArtistsScreen';
import PlaylistsScreen from './pages/PlaylistsScreen';
import DownloadsScreen from './pages/DownloadsScreen';

const windowWidth = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();
function TabsOfLibraryScreen() {
  
  const insets = useSafeAreaInsets();

  return(

      <Tab.Navigator 
        sceneContainerStyle={{
          borderWidth: 0,
          borderColor: '#f00',
        }}
        initialRouteName="Artistas"
        screenOptions={{ 

        }}
        tabBarPosition="top"
        initialLayout={{ width: windowWidth }}

        style={{ 
          backgroundColor: '#000', 
          paddingTop: insets.top,
        }}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#ffffff66',
          scrollEnabled: true,
          tabStyle: {
            backgroundColor: '#000',
            height: 60,
            width: windowWidth - 170,
          },
          labelStyle: {
            fontSize: 35,
            fontStyle: 'normal',

            width: 200,
            textTransform: 'none',
            backgroundColor: '#000',
          },
          style: {
            borderColor: '#00f',
            boderWidth: 0,
          },
        }}
      >
        <Tab.Screen name="Artistas" component={ArtistsScreen} />
        <Tab.Screen name="Playlists" component={PlaylistsScreen} />
        <Tab.Screen name="Downloads" component={DownloadsScreen} />
      </Tab.Navigator>

  );
}

const Bottom = createBottomTabNavigator();
function BottomsOfAllApp() {
  return(
    <Bottom.Navigator 
      tabBarOptions={{
        activeBackgroundColor: '#4e4b4b',
        inactiveBackgroundColor: '#4e4b4b',
        activeTintColor: '#fff',
        inactiveTintColor: '#000',

        adaptive: true,

        style: {
          backgroundColor: '#4e4b4b',
          paddingLeft: 30,
          paddingRight: 30,
        },

        labelStyle: {
          color: '#fff',
        },
      }}
      screenOptions={
        ({route}) => ({ 
          tabBarIcon: ({color, size}) => {
            let iconName = 'circle';

            switch (route.name) {
              case 'Home':
                iconName = 'headphones';
                break;
              case 'SearchScreen':
                iconName = 'search';
                break;
              case 'LibraryScreen':
                iconName = 'user';
                break;
            }
            return <Feather name={iconName} color={color} size={30}/>
          },
          tabBarLabel: ({focused, color, position}) => {
            let string;

            switch (route.name) {
              case 'Home':
                string = 'Tela inicial';
                break;
              case 'SearchScreen':
                string = 'Pesquisa';
                break;
              case 'LibraryScreen':
                string = 'Seus salvos';
                break;
              default:
                string = 'circle';
                break;
            }
            return <Text style={{ fontSize: 10, color: color }}>{string}</Text>;
          },
        })
      }
      sceneContainerStyle={{
        height: '100%',
      }}
    >
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
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomsOfAllApp/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
