import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import api from '../services/api';

export interface DeviceProps {
  name: string;
  status: boolean;
  icon?: string;
  roomName?: string;
}

const DeviceButton: React.FC<DeviceProps> = ({
  name,
  status,
  icon,
  roomName,
}) => {
  const { navigate, goBack } = useNavigation();

  function handleNavigateToDevice(name: string, status: boolean) {
    navigate('Device');
  }

  function confirmDeleteDevice(roomName: string, device: string) {
    Alert.alert(
      `Are you sure you want to delete ${device}?`,
      'this action cannot be undone!',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes, delete it',
          style: 'destructive',
          onPress: () => deleteDevice(roomName, device),
        },
      ],
      { cancelable: false }
    );
  }

  async function deleteDevice(room: string, device: string) {
    await api.delete(`/houses/1/rooms/${room}/devices/${device}`);
    Alert.alert(`${device} deleted from ${room}!`);
    goBack();
  }

  return (
    <TouchableOpacity
      style={styles.deviceItem}
      onPress={() => handleNavigateToDevice(name, status)}
    >
      <View style={styles.roomItemHeader}>
        {icon ? <MaterialIcons name={icon} size={32} color='#fff' /> : null}

        {roomName && (
          <Ionicons
            name='ios-trash'
            size={24}
            color='#F96D41'
            style={styles.Icon}
            onPress={() => confirmDeleteDevice(roomName, name)}
          />
        )}
      </View>

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
};

export default DeviceButton;

const styles = StyleSheet.create({
  deviceItem: {
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

  roomItemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  deviceName: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    marginTop: 40,
  },

  deviceStatus: {
    fontWeight: 'bold',
    marginTop: 5,
  },

  Icon: {
    marginRight: 12,
    marginTop: 2,
    opacity: 0.6,
  },
});
