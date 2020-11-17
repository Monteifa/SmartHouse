import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
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

  function DeviceItem({ name, status, icon }: DeviceProps) {
    return (
      <TouchableOpacity
        style={styles.deviceItem}
        onPress={handleNavigateToRoom}
      >
        <MaterialIcons name='keyboard' size={32} color='#fff' />

        <Text style={styles.deviceName}>{name}</Text>
        <Text
          style={[
            styles.deviceStatus,
            status ? { color: '#52CCA9' } : { color: '#932025' },
          ]}
        >
          {status ? 'On' : 'Off'}
        </Text>
      </TouchableOpacity>
    );
  }

  function handleNavigateToRoom() {
    navigate('Room');
  }

  return (
    <View style={styles.container}>
      <View style={styles.deviceHeader}>
        <Text style={styles.deviceText}>Devices</Text>
      </View>

      <View style={styles.deviceList}>
        <FlatList<DeviceProps>
          contentContainerStyle={styles.deviceListContainer}
          numColumns={2}
          data={devices}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <DeviceItem
              name={item.name}
              status={item.status}
              icon={item.icon}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DeviceList;
