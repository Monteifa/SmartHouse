import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Notification from '../../components/Notification';

import styles from './styles';

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications (Beta)</Text>
      </View>

      {/* Fix */}
      <Notification name={'Playstation 5'} status={true} />
      <Notification name={'Playstation 5'} status={false} />
    </ScrollView>
  );
};

export default Notifications;
