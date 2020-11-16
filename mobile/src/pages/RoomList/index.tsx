import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles';

const RoomList = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.roomHeader}>
        <Text style={styles.roomText}>Rooms</Text>
      </View>

      <View style={styles.roomList}>
        <View style={styles.roomListContainer}>
          <View style={styles.roomListSide1}>
            <TouchableOpacity style={styles.roomItem}>
              <MaterialIcons name='weekend' size={32} color='#fff' />

              <Text style={styles.roomName}>Living Room</Text>
              <Text style={styles.roomDesc}>12 devices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomItem}>
              <Ionicons name='ios-bed' size={32} color='#fff' />

              <Text style={styles.roomName}>Sala</Text>
              <Text style={styles.roomDesc}>12 devices</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.roomItem}>
              <MaterialIcons name='weekend' size={32} color='#fff' />

              <Text style={styles.roomName}>Sala</Text>
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
              {/* <View style={styles.circle}> */}
              <MaterialIcons name='add' size={32} color='#F96D41' />
              {/* </View> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RoomList;
