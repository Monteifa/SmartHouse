import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Notification from '../../components/Notification';
import NotificationContext from '../../contexts/notifcations';

import styles from './styles';

const Notifications = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      {notifications.map((notification, index) => (
        <Notification
          key={index}
          name={notification.name}
          status={notification.status}
        />
      ))}
    </ScrollView>
  );
};

export default Notifications;
