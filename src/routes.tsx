import React from 'react';

import { Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';


import Home from './pages/Home';
import SearchScreen from './pages/SearchScreen';

import ArtistsScreen from './pages/ArtistsScreen';
import PlaylistsScreen from './pages/PlaylistsScreen';
import DownloadsScreen from './pages/DownloadsScreen';

const windowWidth = Dimensions.get('window').width;

const Tab = createMaterialTopTabNavigator();
function TabsOfLibraryScreen() {
  return(
    <Tab.Navigator 
      initialRouteName="Artistas"
      screenOptions={{  }}
      tabBarPosition={"top"}
      initialLayout={{ width: windowWidth }}
      style={{ 
        backgroundColor: '#0f0', 
        borderRadius: 0, 
        marginTop: 24,
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
          boderWidth: 3,
        },
        indicatorStyle: {
        },
        iconStyle: {

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
        adaptive: true,
        allowFontScaling: true,
        style: {
          backgroundColor: '#4e4b4b',
          paddingLeft: 30,
          paddingRight: 30,
        }
      }}
      screenOptions={
        ({route}) => ({ 
          tabBarIcon: ({color, size}) => {
            let iconName = 'circle';

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'SearchScreen':
                iconName = 'search';
                break;
              case 'LibraryScreen':
                iconName = 'user';
                break;
            }
            return <Feather name={iconName} color='#fff' size={30}/>
          },
          tabBarLabel: ({focused, color, position}) => {
            let string;

            switch (route.name) {
              case 'Home':
                string = 'Casa';
                break;
              case 'SearchScreen':
                string = 'Pesquise';
                break;
              case 'LibraryScreen':
                string = 'Salvos';
                break;
              default:
                string = 'circle';
                break;
            }
            return <Text style={{ fontSize: 10, color: '#fff' }}>{string}</Text>;
          },
        })
      }
    >
      <Bottom.Screen 
        name="Home" 
        component={Home}
        options={{
          
        }}
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
