import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SearchScreen from "../pages/SearchScreen/SearchScreen";
import TabsOfLibraryScreen from "./TopTabNavigation";
import HomeStack from './HomeStack';

import { Feather } from '@expo/vector-icons';

import MusicBar from '../components/MusicBar';

const Bottom = createBottomTabNavigator();
export default function BottomsOfAllApp() {
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
          name="HomeStack" 
          component={HomeStack}
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

      {
      true 
      ? <View style={styles.musicBarContainer}>
          <MusicBar/>
        </View>
      : undefined
      }
    </>
  );
}

const styles = StyleSheet.create({
  musicBarContainer: {
    position: 'absolute',
    bottom: 49,
  }
});