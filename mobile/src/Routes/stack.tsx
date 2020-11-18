import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Room from '../pages/Room';
import Device from '../pages/Device';
import Tabs from './tabs';

const { Navigator, Screen } = createStackNavigator();

function Stack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name='Tabs' component={Tabs} />
        <Screen name='Room' component={Room} />
        <Screen name='Device' component={Device} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Stack;
