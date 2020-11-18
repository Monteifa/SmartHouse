import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

const BackButton = () => {
  const { goBack } = useNavigation();

  return (
    <TouchableOpacity onPress={goBack}>
      <MaterialIcons name='keyboard-backspace' size={24} color='#fff' />
    </TouchableOpacity>
  );
};

export default BackButton;
