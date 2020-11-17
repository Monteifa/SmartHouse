import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const RoomList = () => {
  const { navigate } = useNavigation();

  function handleNavigateToRoom() {
    navigate('Room');
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.roomHeader}>
        <Text style={styles.roomText}>Rooms</Text>

        <TouchableOpacity>
          <MaterialIcons
            name='add'
            size={28}
            color='#F96D41'
            style={{ marginTop: 1 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.roomList}>
        <View style={styles.roomListContainer}>
          <View style={styles.roomListSide1}>
            <TouchableOpacity
              style={styles.roomItem}
              onPress={handleNavigateToRoom}
            >
              <MaterialIcons name='weekend' size={32} color='#fff' />

              <Text style={styles.roomName}>Living Room</Text>
              <Text style={styles.roomDesc}>12 devices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomItem}>
              <MaterialIcons name='keyboard' size={32} color='#fff' />

              <Text style={styles.roomName}>Office</Text>
              <Text style={styles.roomDesc}>12 devices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomItem}>
              <FontAwesome name='bathtub' size={32} color='#fff' />

              <Text style={styles.roomName}>Bathroom</Text>
              <Text style={styles.roomDesc}>12 devices</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.roomListSide2}>
            <TouchableOpacity style={styles.roomItem}>
              <Ionicons name='ios-bed' size={32} color='#fff' />

              <Text style={styles.roomName}>Bedroom</Text>
              <Text style={styles.roomDesc}>12 devices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomItem}>
              <MaterialIcons name='kitchen' size={32} color='#fff' />

              <Text style={styles.roomName}>Kitchen</Text>
              <Text style={styles.roomDesc}>12 devices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomItemAdd}>
              <View style={styles.circle}>
                <MaterialIcons name='add' size={32} color='#fff' />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RoomList;
