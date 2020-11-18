import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { DeviceProps } from './DeviceButton';

export interface RoomProps {
  name: string;
  devices?: DeviceProps[];
  add?: boolean;
}

const RoomButton: React.FC<RoomProps> = ({ name, devices }) => {
  const { navigate } = useNavigation();

  function handleNavigateToRoom(name: string) {
    navigate('Room', { name });
  }

  return (
    <TouchableOpacity
      style={styles.roomItem}
      onPress={() => handleNavigateToRoom(name)}
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
    marginRight: 8,
    marginTop: 2,
  },
});
