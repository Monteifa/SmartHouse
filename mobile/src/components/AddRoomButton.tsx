import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Alert,
} from 'react-native';
import { BlurView } from 'expo-blur';

import { MaterialIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import api from '../services/api';

const AddButton = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('Living Room');

  function getRoomIcon(roomName: string) {
    let icon = '';

    switch (roomName) {
      case 'Living Room':
        icon = 'weekend';
        break;

      case 'Bedroom':
        icon = 'ios-bed';
        break;

      case 'Bathroom':
        icon = 'hot-tub';
        break;

      case 'Kitchen':
        icon = 'kitchen';
        break;
    }

    return icon;
  }

  async function handleCreateNewRoom() {
    const name = selectedRoom;
    const icon = getRoomIcon(name);
    await api.post('/houses/1/rooms', { name, icon });
    Alert.alert(`${name} created`);
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
                selectedValue={selectedRoom}
                style={styles.picker}
                onValueChange={(itemValue) =>
                  setSelectedRoom(String(itemValue))
                }
              >
                <Picker.Item label='Living Room' value='Living Room' />
                <Picker.Item label='Bedroom' value='Bedroom' />
                <Picker.Item label='Bathroom' value='Bathroom' />
                <Picker.Item label='Kitchen' value='Kitchen' />
              </Picker>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.buttonCancel}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.cancelButtonText}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.buttonAdd}
                  onPress={handleCreateNewRoom}
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
