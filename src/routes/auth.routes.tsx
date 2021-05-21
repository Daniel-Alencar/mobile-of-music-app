import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../pages/LoginScreen';

const AuthStack = createStackNavigator();
export default function AuthRoutes() {
  return(
    <>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      </AuthStack.Navigator>
    </>
  );
}