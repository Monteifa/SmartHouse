import React, { useState } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';
import styles from './styles';

interface RoomProps {
  name: string;
  icon?: string;
  add?: boolean;
  devices?: DeviceProps[];
}

interface DeviceProps {
  name: string;
  status: boolean;
  icon?: string;
}

const DeviceList = () => {
  const { navigate } = useNavigation();

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

  function handleNavigateToDevice(name: string, status: boolean) {
    navigate('Device');
  }

  return (
    <View style={styles.container}>
      <View style={styles.deviceHeader}>
        <Text style={styles.deviceText}>Devices</Text>
        <Text style={styles.description}>A list of all of your devices</Text>
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
    </View>
  );
};

export default DeviceList;
