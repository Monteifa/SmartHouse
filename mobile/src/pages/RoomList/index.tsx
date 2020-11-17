import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
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

  useFocusEffect(() => {
    api.get('/houses/1').then(({ data }) => {
      rooms = data.rooms;
      rooms.push({ name: 'add', add: true });

      setRooms(rooms);
    });
  });

  const AddButton = () => {
    return (
      <TouchableOpacity style={styles.roomItemAdd}>
        <View style={styles.circle}>
          <MaterialIcons name='add' size={32} color='#fff' />
        </View>
      </TouchableOpacity>
    );
  };

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
              <TouchableOpacity style={styles.roomItemAdd}>
                <View style={styles.circle}>
                  <MaterialIcons name='add' size={32} color='#fff' />
                </View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.roomItem}
                onPress={handleNavigateToRoom}
              >
                <View style={styles.roomItemHeader}>
                  <MaterialIcons name='weekend' size={32} color='#fff' />
                  <TouchableOpacity>
                    <MaterialIcons
                      name='more-vert'
                      size={24}
                      color='#F96D41'
                      style={styles.Icon}
                    />
                  </TouchableOpacity>
                </View>

                <Text style={styles.roomName}>{item.name}</Text>
                <Text style={styles.roomDesc}>
                  {item.devices ? item.devices.length : 0}{' '}
                  {item.devices
                    ? item.devices.length > 1
                      ? 'devices'
                      : 'device '
                    : 'device'}
                </Text>
              </TouchableOpacity>
            )
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default RoomList;
