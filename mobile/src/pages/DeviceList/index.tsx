import React, { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import DeviceButton, { DeviceProps } from '../../components/DeviceButton';
import { RoomProps } from '../../components/RoomButton';
import api from '../../services/api';
import styles from './styles';

const DeviceList = () => {
  const [devices, setDevices] = useState<DeviceProps[]>([]);

  const [refresh, setRefresh] = useState(false);

  setTimeout(() => {
    setRefresh(!refresh);
  }, 5000);

  useEffect(() => {
    api.get('/houses/1').then(({ data }) => {
      let deviceList = [] as DeviceProps[];
      const rooms: RoomProps[] = data.rooms;
      rooms.map((room: RoomProps) => {
        room.devices?.map((device) => {
          device.roomName = room.name;
          deviceList.push(device);
        });
      });
      setDevices(deviceList);
    });
  }, [refresh]);

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
          showsVerticalScrollIndicator={false}
          data={devices}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <DeviceButton
              name={item.name}
              status={item.status}
              icon={item.icon}
              roomName={item.roomName}
            />
          )}
        />
      </View>
    </View>
  );
};

export default DeviceList;
