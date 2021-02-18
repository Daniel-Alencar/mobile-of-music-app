import React from 'react';
import { Dimensions, Text, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

import HomeScreen from './pages/HomeScreen/HomeScreen';
import SearchScreen from './pages/SearchScreen/SearchScreen';
import ArtistsScreen from './pages/ArtistScreen/ArtistsScreen';
import PlaylistsScreen from './pages/PlaylistsScreen/PlaylistsScreen';
import DownloadsScreen from './pages/DownloadsScreen/DownloadsScreen';
import MusicScreen from './pages/MusicScreen/MusicScreen';
import MusicBar from './components/MusicBar';

const windowWidth = Dimensions.get('window').width;

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
    <>
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
                case 'HomeScreen':
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
                case 'HomeScreen':
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
          name="HomeScreen" 
          component={HomeScreen}
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

      {true ?
        <View style={styles.musicBarContainer}>
          <MusicBar isPlaying={false}/>
        </View>
      : 
        undefined
      }
    </>
  );
}

const Stack = createStackNavigator();
function StackMusic() {
  return(
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomsOfAllApp" component={BottomsOfAllApp} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
      </Stack.Navigator>
    </>
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

const styles = StyleSheet.create({
  musicBarContainer: {
    borderColor: '#f00',
    borderWidth: 0,

    position: 'absolute',
    bottom: 49,
  }
});