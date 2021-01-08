import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import Home from './pages/Home';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ tabBarVisible: false }}>
        <Screen 
          name="Home" 
          component={Home} 
        />
      </Navigator>
    </NavigationContainer>
  );
}
