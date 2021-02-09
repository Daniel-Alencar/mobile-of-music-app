import React from 'react';
import { Dimensions, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import Home from './pages/Home';
import SearchScreen from './pages/SearchScreen';
import ArtistsScreen from './pages/ArtistsScreen';
import PlaylistsScreen from './pages/PlaylistsScreen';
import DownloadsScreen from './pages/DownloadsScreen';
import MusicScreen from './pages/Music';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createMaterialTopTabNavigator();
function TabsOfLibraryScreen() {
  
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

function MusicContainerScreen() {
  return(
    <MusicScreen
      author="John Mayer"
      duration={290}
      favorite={true}
      imageSource="https://upload.wikimedia.org/wikipedia/commons/0/0e/Continuum_by_John_Mayer_%282006%29.jpg"
      musicName="Gravity"
      musicSource="./assets/music/Gravity.mp3"
    />
  )
}

const Stack = createStackNavigator();
function StackMusic() {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomsOfAllApp" component={BottomsOfAllApp} />
      <Stack.Screen 
        name="MusicScreen" 
        component={
          MusicContainerScreen
        }
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackMusic />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
