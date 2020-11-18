import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AddButton from '../../components/AddRoomButton';
import RoomButton, { RoomProps } from '../../components/RoomButton';
import styles from './styles';
import api from '../../services/api';

const RoomList = () => {
  let [rooms, setRooms] = useState<RoomProps[]>([]);

  const [refresh, setRefresh] = useState(false);

  setTimeout(() => {
    setRefresh(!refresh);
  }, 3000);

  useEffect(() => {
    api.get('/houses/1').then(({ data }) => {
      rooms = data.rooms;
      rooms.push({ name: 'add', add: true, icon: '' });
      setRooms(rooms);
    });
  }, [refresh]);

  return (
    <View style={styles.container}>
      <View style={styles.roomHeader}>
        <Text style={styles.roomText}>Rooms</Text>
      </View>

      <View style={styles.roomList}>
        <FlatList<RoomProps>
          contentContainerStyle={styles.roomListContainer}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={rooms}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) =>
            item.add ? (
              <AddButton />
            ) : (
              <RoomButton
                name={item.name}
                devices={item.devices}
                icon={item.icon}
              />
            )
          }
        />
      </View>
    </View>
  );
};

export default RoomList;
