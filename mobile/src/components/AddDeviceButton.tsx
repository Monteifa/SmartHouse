import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
  Switch,
} from 'react-native';
import { BlurView } from 'expo-blur';

import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import api from '../services/api';

interface Props {
  roomName: string;
}

const AddButton: React.FC<Props> = ({ roomName }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState('Smart Tv');
  const [status, setStatus] = useState(false);

  function getDeviceIcon(deviceName: string) {
    let icon = '';

    switch (deviceName) {
      case 'Speaker':
        icon = 'speaker';
        break;

      case 'Smart Tv':
        icon = 'tv';
        break;

      case 'Lights':
        icon = 'emoji-objects';
        break;

      case 'Video Game':
        icon = 'gamepad';
        break;

      case 'ChromeCast':
        icon = 'cast';
        break;
    }

    return icon;
  }

  async function handleCreateNewDevice() {
    const deviceName = selectedDevice;
    const icon = getDeviceIcon(deviceName);
    await api.post(`/houses/1/rooms/${roomName}/devices`, {
      name: deviceName,
      status,
      icon,
    });
    Alert.alert(`${deviceName} created on ${roomName}`);
    setModalVisible(!modalVisible);
  }

  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <BlurView style={styles.blur} tint='dark' intensity={100}>
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.selectRoomText}>Select a room</Text>
              <Picker
                selectedValue={selectedDevice}
                style={styles.picker}
                onValueChange={(itemValue) =>
                  setSelectedDevice(String(itemValue))
                }
              >
                <Picker.Item label='Smart TV' value='Tv' />
                <Picker.Item label='Speaker' value='Speaker' />
                <Picker.Item label='Video game' value='Video Game' />
                <Picker.Item label='ChromeCast' value='ChromeCast' />
                <Picker.Item label='Lights' value='Lights' />
              </Picker>

              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Status</Text>

                <Switch
                  thumbColor='#fff'
                  trackColor={{ false: '#ccc', true: '#39CC83' }}
                  value={status}
                  onValueChange={setStatus}
                />
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonCancel}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonAdd}
                  onPress={handleCreateNewDevice}
                >
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </Modal>

      <TouchableOpacity
        style={styles.roomItemAdd}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.circle}>
          <MaterialIcons name='add' size={32} color='#fff' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  roomItemAdd: {
    width: 140,
    height: 150,
    backgroundColor: 'transparent',
    borderRadius: 12,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#25282F',
    borderWidth: 2,
    marginHorizontal: 16,
  },

  circle: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#25282F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },

  selectRoomText: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 'bold',
    paddingBottom: 24,
  },

  picker: {
    width: '100%',
    marginTop: 16,
  },

  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  switchText: {},

  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 24,
    width: '100%',
    marginTop: 16,
  },

  buttonCancel: {
    backgroundColor: 'red',
    height: 48,
    width: 125,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginRight: 8,
  },

  buttonAdd: {
    backgroundColor: '#52CCA9',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 125,
    borderColor: 'black',
    borderWidth: 2,
  },

  cancelButtonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  addButtonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
  },

  blur: {
    flex: 1,
  },
});
