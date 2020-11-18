import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AddButton from '../../components/AddButton';
import RoomButton, { RoomProps } from '../../components/RoomButton';
import styles from './styles';
import api from '../../services/api';

const RoomList = () => {
  let [rooms, setRooms] = useState<RoomProps[]>([]);

  useEffect(() => {
    api.get('/houses/1').then(({ data }) => {
      rooms = data.rooms;
      rooms.push({ name: 'add', add: true });
      setRooms(rooms);
    });
  });

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
              <RoomButton name={item.name} devices={item.devices} />
            )
          }
        />
      </View>
    </View>
  );
};

export default RoomList;
