import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.roomItemAdd}>
      <View style={styles.circle}>
        <MaterialIcons name='add' size={32} color='#fff' />
      </View>
    </TouchableOpacity>
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
});
