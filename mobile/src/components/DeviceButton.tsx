import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

export interface DeviceProps {
  name: string;
  status: boolean;
  icon?: string;
}

const DeviceButton: React.FC<DeviceProps> = ({ name, status }) => {
  const { navigate } = useNavigation();

  function handleNavigateToDevice(name: string, status: boolean) {
    navigate('Device');
  }

  return (
    <TouchableOpacity
      style={styles.deviceItem}
      onPress={() => handleNavigateToDevice(name, status)}
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
});
