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


import NavigationBar from './components/NavigationBar';



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
    <Bottom.Navigator 
      // tabBar={(props) => <NavigationBar {...props} />}
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
            return <Feather name={iconName} color={color} size={size}/>
          },
          tabBarBadgeStyle: {
            backgroundColor: '#555',
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
            return <Text style={{ fontSize: 10 }}>{string}</Text>;
          },
          tabBarBadge: undefined,
          tabBarTestID: 'tabBar',
          tabBarVisible: true,
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
