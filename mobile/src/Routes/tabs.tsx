import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import House from '../pages/House';
import DeviceList from '../pages/DeviceList';
import RoomList from '../pages/RoomList';
import Notifications from '../pages/Notifications';

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 64,
          backgroundColor: '#1E1B26',
          borderTopColor: '#1E1B26',
        },
        inactiveTintColor: '#fff',
      }}
    >
      <Screen
        name='House'
        component={House}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <MaterialIcons
                name='home'
                size={24}
                color={focused ? '#F96D41' : color}
              />
            );
          },
        }}
      />

      <Screen
        name='DeviceList'
        component={DeviceList}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name='search'
                size={24}
                color={focused ? '#F96D41' : color}
              />
            );
          },
        }}
      />
      <Screen
        name='RoomList'
        component={RoomList}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name='format-list-bulleted'
                size={24}
                color={focused ? '#F96D41' : color}
              />
            );
          },
        }}
      />
      <Screen
        name='Notifications'
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <MaterialIcons
                name='notifications'
                size={24}
                color={focused ? '#F96D41' : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default Tabs;
