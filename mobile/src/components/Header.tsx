import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import BackButton from './BackButton';

interface Props {
  name: string;
}

const Header: React.FC<Props> = ({ name }) => {
  return (
    <View style={styles.roomHeader}>
      <BackButton />

      <Text style={styles.roomName}>{name}</Text>

      <MaterialIcons name='more-vert' size={24} color='#fff' />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  roomHeader: {
    paddingHorizontal: 16,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  roomName: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  deviceList: {
    paddingLeft: 16,
    paddingBottom: 24,
    paddingRight: 16,
  },

  deviceListContainer: {
    alignItems: 'center',
    padding: 48,
  },
});
