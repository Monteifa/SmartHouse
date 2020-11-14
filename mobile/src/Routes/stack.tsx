import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import House from '../pages/House';
import Room from '../pages/Room';
import Device from '../pages/Device';

const { Navigator, Screen } = createStackNavigator();

function Stack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='House' component={House} />
        <Screen name='Room' component={Room} />
        <Screen name='Device' component={Device} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Stack;
