import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header';
import AddButton from '../../components/AddButton';
import DeviceButton, { DeviceProps } from '../../components/DeviceButton';
import api from '../../services/api';
import styles from './styles';

interface RoomRouteParams {
  params: {
    name: string;
  };
}

const Room = () => {
  const route = useRoute();
  const { params } = route as RoomRouteParams;
  const { name } = params;

  const [devices, setDevices] = useState<DeviceProps[]>([]);

  useEffect(() => {
    api.get(`/houses/1/rooms/${name}/devices`).then(({ data }) => {
      let deviceList = [...data] as DeviceProps[];
      deviceList.push({ name: 'add', status: false });
      setDevices(deviceList);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Header name={name} />
      <View style={styles.deviceList}>
        <FlatList<DeviceProps>
          contentContainerStyle={styles.deviceListContainer}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={devices}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) =>
            item.name === 'add' ? (
              <AddButton />
            ) : (
              <DeviceButton name={item.name} status={item.status} />
            )
          }
        />
      </View>
    </View>
  );
};

export default Room;
