import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';
import ChooseFolderScreen from '../pages/ChooseFolderScreen';

const Stack = createStackNavigator();
export default function App() {

  return(
    <>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ChooseFolderScreen" component={ChooseFolderScreen} />
      </Stack.Navigator>
    </>
  );
}

