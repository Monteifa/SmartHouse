import React from 'react';
import { Image, Text, View } from 'react-native';
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
          <Text style={styles.usernameText}>Fabio Monteiro</Text>
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
        <Text style={styles.favoriteText}>Favorites Devices</Text>

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
        <Text style={styles.recentText}>Recent Songs Played</Text>
      </View>
      <View style={styles.recentScroller}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.recentContainer}>
            <Image
              source={lp}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </View>
          <View style={styles.recentContainer}>
            <Image
              source={week}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </View>
          <View style={styles.recentContainer}>
            <Image
              source={ff}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </View>
          <View style={styles.recentContainer}>
            <Image
              source={ff2}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </View>
          <View style={styles.recentContainer}>
            <Image
              source={acdc}
              resizeMode='cover'
              style={{ width: '100%', height: '100%', borderRadius: 8 }}
            />
          </View>
        </ScrollView>
      </View>

      {/* <Text style={styles.title}>Meus cômodos</Text>

      <RectButton style={styles.roomItem}>
        <MaterialIcons
          name='weekend'
          size={24}
          color='#fff'
          style={styles.icon}
        />
        <Text style={styles.roomName}>Living Room</Text>
        <MaterialIcons
          name='keyboard-arrow-right'
          size={32}
          color='#fff'
          style={styles.iconNext}
        />
      </RectButton>

      <RectButton style={styles.roomItem}>
        <Ionicons
          name='ios-bed-outline'
          size={24}
          color='#fff'
          style={styles.icon}
        />
        <Text style={styles.roomName}>Bedroom</Text>
        <MaterialIcons
          name='navigate-next'
          size={32}
          color='#fff'
          style={styles.iconNext}
        />
      </RectButton>

      <RectButton style={styles.roomItem}>
        <MaterialIcons
          name='kitchen'
          size={24}
          color='#fff'
          style={styles.icon}
        />
        <Text style={styles.roomName}>Kitchen</Text>
        <MaterialIcons
          name='navigate-next'
          size={32}
          color='#fff'
          style={styles.iconNext}
        />
      </RectButton>

      <RectButton style={styles.roomItem}>
        <MaterialIcons
          name='bathtub'
          size={24}
          color='#fff'
          style={styles.icon}
        />
        <Text style={styles.roomName}>Living Room</Text>
        <MaterialIcons
          name='navigate-next'
          size={32}
          color='#fff'
          style={styles.iconNext}
        />
      </RectButton>*/}
    </ScrollView>
  );
};

export default House;
