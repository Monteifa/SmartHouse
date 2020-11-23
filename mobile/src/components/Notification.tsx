import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import LineDivider from './LineDivider';
import { NotificationProps } from '../contexts/notifcations';

const Notification: React.FC<NotificationProps> = ({ name, status }) => {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationItem}>
        <View style={styles.divider}>
          <MaterialIcons
            name='notifications'
            size={24}
            color={status ? '#52CCA9' : '#932025'}
            style={{ marginLeft: 16 }}
          />
          <LineDivider />
          <Text style={styles.notificationText}>
            {name} was turned{' '}
            <Text style={status ? { color: '#52CCA9' } : { color: '#932025' }}>
              {status ? 'On' : 'Off'}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },

  notificationItem: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#25282F',
    borderRadius: 12,
  },

  divider: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    lineHeight: 22,
  },
});

export default Notification;
