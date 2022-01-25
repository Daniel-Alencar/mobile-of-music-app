import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppSearchScreen from "../pages/SearchScreen";
import AppLibraryScreen from "./AppLibraryScreen";
import AppHomeScreen from './AppHomeScreen';

import { Feather } from '@expo/vector-icons';

import MusicBar from '../components/MusicBar';

import { useSelector } from 'react-redux';
import { StateReducerData } from '../store';

const Bottom = createBottomTabNavigator();
export default function AppMainScreen() {

  const propsFromRedux = useSelector((state: StateReducerData) => {
    return {
      incompleteSong: state.MusicInformation.incomplete
    }
  });

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
            tabBarIcon: ({color}) => {
              let iconName = 'circle';

              switch (route.name) {
                case 'AppHomeScreen':
                  iconName = 'headphones';
                  break;
                case 'AppSearchScreen':
                  iconName = 'search';
                  break;
                case 'AppLibraryScreen':
                  iconName = 'user';
                  break;
              }
              return <Feather name={iconName} color={color} size={30}/>
            },
            tabBarLabel: ({focused, color, position}) => {
              let string;

              switch (route.name) {
                case 'AppHomeScreen':
                  string = 'Tela inicial';
                  break;
                case 'AppSearchScreen':
                  string = 'Pesquisa';
                  break;
                case 'AppLibraryScreen':
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
          name="AppHomeScreen" 
          component={AppHomeScreen}
        />

        <Bottom.Screen 
          name="AppSearchScreen" 
          component={AppSearchScreen} 
        />

        <Bottom.Screen 
          name="AppLibraryScreen" 
          component={AppLibraryScreen} 
        />
      </Bottom.Navigator>

      {
        propsFromRedux.incompleteSong &&
          <View style={styles.musicBarContainer}>
            <MusicBar/>
          </View>
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