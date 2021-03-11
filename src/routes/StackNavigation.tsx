import React from 'react';
import { StyleSheet, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import MusicScreen from '../pages/MusicScreen';
import BottomsOfAllApp from './BottomTabNavigation';

import MusicBar from '../components/MusicBar';

const Stack = createStackNavigator();
export default function StackMusic() {
  return(
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomsOfAllApp" component={BottomsOfAllApp} />
        <Stack.Screen name="MusicScreen" component={MusicScreen} />
      </Stack.Navigator>

      {
        false 
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