import React from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18, paddingHorizontal: 16 }}>
      <View
        style={{ flex: 1, borderLeftColor: '#64676D', borderLeftWidth: 1 }}
      ></View>
    </View>
  );
};

const Notifications = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      <View style={styles.notificationContainer}>
        <View style={styles.notificationItem}>
          <View style={styles.divider}>
            <MaterialIcons
              name='notifications'
              size={24}
              color='#fff'
              style={{ marginLeft: 16 }}
            />
            <LineDivider />
            <Text style={styles.notificationText}>
              Olá você esqueceu a luz ligada
            </Text>
          </View>
        </View>

        <View style={styles.notificationItem}>
          <View style={styles.divider}>
            <MaterialIcons
              name='notifications'
              size={24}
              color='#fff'
              style={{ marginLeft: 16 }}
            />
            <LineDivider />
            <Text style={styles.notificationText}>
              Olá você esqueceu a luz ligada
            </Text>
          </View>
        </View>

        <View style={styles.notificationItem}>
          <View style={styles.divider}>
            <MaterialIcons
              name='notifications'
              size={24}
              color='#fff'
              style={{ marginLeft: 16 }}
            />
            <LineDivider />
            <Text style={styles.notificationText}>
              Olá você esqueceu a luz ligada
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;
