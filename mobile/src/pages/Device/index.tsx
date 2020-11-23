import { useRoute } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DeviceProps } from '../../components/DeviceButton';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';

import Header from '../../components/Header';

import NotificationContext from '../../contexts/notifcations';

import styles from './styles';

interface DeviceRouteParams {
  params: DeviceProps;
}

const Device = () => {
  const route = useRoute();
  const { params } = route as DeviceRouteParams;
  const { name, status, roomName } = params;

  const { addNotification } = useContext(NotificationContext);

  const [deviceStatus, setDeviceStatus] = useState(status);

  async function handleDeviceStatusChange() {
    setDeviceStatus(!deviceStatus);
    addNotification(name, !deviceStatus);
    await api.put(`houses/1/rooms/${roomName}/devices/${name}`, {
      status: !deviceStatus,
    });
  }

  return (
    <View style={styles.container}>
      <Header name={name} />
      <View style={styles.buttonContainer}>
        {deviceStatus ? (
          // Botao ligado
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.buttonInsideOn}
              onPress={handleDeviceStatusChange}
            >
              <MaterialIcons name='power-settings-new' size={64} color='#fff' />
              <Text style={styles.textOn}>On</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Botao desligado
          <View style={styles.buttonOff}>
            <TouchableOpacity
              style={[styles.buttonInside]}
              onPress={handleDeviceStatusChange}
            >
              <MaterialIcons
                name='power-settings-new'
                size={48}
                color='black'
              />
              <Text style={styles.textOff}>Off</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default Device;
