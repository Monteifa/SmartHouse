import React from 'react';
import { Image, Text, View, Linking } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import lp from '../../images/linkinpark.jpg';
import ff from '../../images/foo.jpg';
import ff2 from '../../images/foo2.jpg';
import week from '../../images/week.jpg';
import acdc from '../../images/acdc.jpg';

import styles from './styles';

const LineDivider = () => {
  return (
    <View style={{ width: 1, paddingVertical: 18 }}>
      <View
        style={{ flex: 1, borderLeftColor: '#64676D', borderLeftWidth: 1 }}
      ></View>
    </View>
  );
};

const House = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>Bem-vindo</Text>
          <Text style={styles.usernameText}>Casa Cinside</Text>
        </View>

        <TouchableOpacity>
          <MaterialIcons name='more-vert' size={24} color='#F96D41' />
        </TouchableOpacity>
      </View>

      {/* InfoBar */}

      <View style={styles.info}>
        <View style={styles.infoBar}>
          <View style={styles.divider}>
            <Ionicons name='ios-thermometer' size={32} color='#fff' />
            <Text style={styles.infoText}>26º</Text>
          </View>

          <LineDivider />

          <View style={styles.divider}>
            <MaterialIcons name='query-builder' size={32} color='#fff' />
            <Text style={styles.infoText}>12:45 AM</Text>
          </View>
        </View>
      </View>

      {/* Favorite Devices */}
      <View style={styles.favoriteHeader}>
        <Text style={styles.favoriteText}>Favorites Devices (Beta)</Text>

        <TouchableOpacity onPress={() => {}} style={{ marginTop: 3 }}>
          <MaterialIcons name='edit' size={24} color='#F96D41' />
        </TouchableOpacity>
      </View>

      <View style={styles.deviceScroller}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.deviceContainer}>
            <MaterialIcons name='speaker' size={32} color='#fff' />
            <Text style={styles.deviceName}>SoundBar</Text>
          </View>
          <View style={styles.deviceContainer}>
            <MaterialIcons name='tv' size={32} color='#fff' />
            <Text style={styles.deviceName}>TV</Text>
          </View>
          <View style={styles.deviceContainer}>
            <MaterialIcons name='cast' size={32} color='#fff' />
            <Text style={styles.deviceName}>ChromeCast</Text>
          </View>
          <View style={styles.deviceContainer}>
            <MaterialIcons name='gamepad' size={32} color='#fff' />
            <Text style={styles.deviceName}>Playstation</Text>
          </View>
        </ScrollView>
      </View>

      {/* Recent Played */}

      <View style={styles.recentHeader}>
        <Text style={styles.recentText}>Recent Songs Played (Beta)</Text>
      </View>
      <View style={styles.recentScroller}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.recentContainer}
            onPress={() => {
              Linking.openURL(
                'https://open.spotify.com/album/7pgs38iLfEqUtwgCRgvbND'
              );
            }}
          >
            <Image
              source={lp}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recentContainer}
            onPress={() => {
              Linking.openURL(
                'https://open.spotify.com/album/4yP0hdKOZPNshxUOjY0cZj'
              );
            }}
          >
            <Image
              source={week}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recentContainer}
            onPress={() => {
              Linking.openURL(
                'https://open.spotify.com/album/2qwN15acAl3sm3Idce5vK9'
              );
            }}
          >
            <Image
              source={ff}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recentContainer}
            onPress={() => {
              Linking.openURL(
                'https://open.spotify.com/album/1zCNrbPpz5OLSr6mSpPdKm'
              );
            }}
          >
            <Image
              source={ff2}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.recentContainer}
            onPress={() => {
              Linking.openURL(
                'https://open.spotify.com/album/3bTNxJYk2bwdWBMtrjBxb0'
              );
            }}
          >
            <Image
              source={acdc}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default House;
