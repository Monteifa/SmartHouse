import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Room = () => {
  const { navigate } = useNavigation();

  function next() {
    navigate('Room');
  }
  return (
    <View style={styles.container}>
      <Feather name='tv' size={56} color='#FFF' />
      <Text>Device</Text>

      <MaterialIcons name='speaker' size={56} color='#fff' />
      <Text>Device</Text>

      <MaterialIcons name='lightbulb-outline' size={56} color='#fff' />
      <Text>Device</Text>

      <Ionicons name='ios-thermometer' size={56} color='#fff' />
      <Text>Device</Text>
    </View>
  );
};

export default Room;
