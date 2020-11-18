import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { DeviceProps } from './DeviceButton';
import { Alert } from 'react-native';
import api from '../services/api';

export interface RoomProps {
  name: string;
  devices?: DeviceProps[];
  add?: boolean;
  icon: string;
}

const RoomButton: React.FC<RoomProps> = ({ name, devices, icon }) => {
  const { navigate } = useNavigation();

  function handleNavigateToRoom(name: string) {
    navigate('Room', { name });
  }

  function confirmDeleteRoom(room: string) {
    Alert.alert(
      `Are you sure you want to delete ${room}?`,
      'this action cannot be undone!',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes, delete it',
          style: 'destructive',
          onPress: () => deleteRoom(room),
        },
      ],
      { cancelable: false }
    );
  }

  async function deleteRoom(room: string) {
    await api.delete(`/houses/1/rooms/${room}`);
    Alert.alert(`${room} deleted!`);
  }

  return (
    <TouchableOpacity
      style={styles.roomItem}
      onPress={() => handleNavigateToRoom(name)}
    >
      <View style={styles.roomItemHeader}>
        {name === 'Bedroom' ? (
          <Ionicons name='ios-bed' size={32} color='#fff' />
        ) : (
          <MaterialIcons name={icon} size={32} color='#fff' />
        )}
        <TouchableOpacity>
          <Ionicons
            name='ios-trash'
            size={24}
            color='#F96D41'
            style={styles.Icon}
            onPress={() => confirmDeleteRoom(name)}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.roomName}>{name}</Text>
      <Text style={styles.roomDesc}>
        {devices ? devices.length : 0}{' '}
        {devices ? (devices.length > 1 ? 'devices' : 'device ') : 'device'}
      </Text>
    </TouchableOpacity>
  );
};

export default RoomButton;

const styles = StyleSheet.create({
  roomItem: {
    width: 140,
    height: 150,
    backgroundColor: '#25282F',
    borderRadius: 12,
    marginBottom: 24,
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
    marginHorizontal: 16,
  },

  roomName: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    marginTop: 40,
  },

  roomDesc: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 2,
  },

  roomItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  Icon: {
    marginRight: 12,
    marginTop: 2,
    opacity: 0.6,
  },
});
