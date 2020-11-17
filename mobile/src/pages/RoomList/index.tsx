import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import api from '../../services/api';
import styles from './styles';

interface RoomProps {
  name: string;
  icon?: string;
  add?: boolean;
  devices?: [
    {
      name: string;
      status: boolean;
    }
  ];
}

const RoomList = () => {
  const { navigate } = useNavigation();

  let [rooms, setRooms] = useState<RoomProps[]>([]);

  useEffect(() => {
    api.get('/houses/1').then(({ data }) => {
      rooms = data.rooms;
      rooms.push({ name: 'add', add: true });

      setRooms(rooms);
    });
  }, [rooms]);

  function AddButton() {
    return (
      <TouchableOpacity style={styles.roomItemAdd}>
        <View style={styles.circle}>
          <MaterialIcons name='add' size={32} color='#fff' />
        </View>
      </TouchableOpacity>
    );
  }

  function RoomItem({ name, devices }: RoomProps) {
    return (
      <TouchableOpacity style={styles.roomItem} onPress={handleNavigateToRoom}>
        <MaterialIcons name='weekend' size={32} color='#fff' />

        <Text style={styles.roomName}>{name}</Text>
        <Text style={styles.roomDesc}>
          {devices ? devices.length : 0}{' '}
          {devices ? (devices.length > 1 ? 'devices' : 'device ') : 'device'}
        </Text>
      </TouchableOpacity>
    );
  }

  function handleNavigateToRoom() {
    navigate('Room');
  }

  return (
    <View style={styles.container}>
      <View style={styles.roomHeader}>
        <Text style={styles.roomText}>Rooms</Text>
      </View>

      <View style={styles.roomList}>
        <FlatList<RoomProps>
          contentContainerStyle={styles.roomListContainer}
          numColumns={2}
          data={rooms}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) =>
            item.add ? (
              <AddButton />
            ) : (
              <RoomItem name={item.name} devices={item.devices} />
            )
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default RoomList;
