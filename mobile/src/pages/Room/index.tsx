import React, { useState } from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import api from '../../services/api';

interface DeviceProps {
  name: string;
  status: boolean;
  icon?: string;
}

interface RoomProps {
  name: string;
  icon?: string;
  add?: boolean;
  devices?: DeviceProps[];
}

const Room = () => {
  const { goBack, navigate } = useNavigation();

  const [devices, setDevices] = useState<DeviceProps[]>([]);

  useFocusEffect(() => {
    api.get('/houses/1').then(({ data }) => {
      let deviceList = [] as DeviceProps[];
      const rooms: RoomProps[] = data.rooms;
      rooms.map((room: RoomProps) => {
        room.devices?.map((device) => {
          deviceList.push(device);
        });
      });

      setDevices(deviceList);
    });
  });

  function next() {
    navigate('Room');
  }

  function back() {
    goBack();
  }

  function handleNavigateToDevice(name: string, status: boolean) {
    navigate('Device');
  }

  return (
    <View style={styles.container}>
      <View style={styles.roomHeader}>
        <TouchableOpacity onPress={back}>
          <MaterialIcons name='keyboard-backspace' size={24} color='#fff' />
        </TouchableOpacity>
        <Text style={styles.roomName}>Sala</Text>

        <MaterialIcons name='more-vert' size={24} color='#fff' />
      </View>
      <View style={styles.deviceList}>
        <FlatList<DeviceProps>
          contentContainerStyle={styles.deviceListContainer}
          numColumns={2}
          data={devices}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.deviceItem}
              onPress={() => handleNavigateToDevice(item.name, item.status)}
            >
              <MaterialIcons name='keyboard' size={32} color='#fff' />

              <Text style={styles.deviceName}>{item.name}</Text>
              <Text
                style={[
                  styles.deviceStatus,
                  item.status ? { color: '#52CCA9' } : { color: '#932025' },
                ]}
              >
                {item.status ? 'On' : 'Off'}
              </Text>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      {/* <Feather name='tv' size={56} color='#FFF' />
      <Text>Device</Text>

      <MaterialIcons name='speaker' size={56} color='#fff' />
      <Text>Device</Text>

      <MaterialIcons name='lightbulb-outline' size={56} color='#fff' />
      <Text>Device</Text>

      <Ionicons name='ios-thermometer' size={56} color='#fff' />
      <Text>Device</Text> */}
    </View>
  );
};

export default Room;
