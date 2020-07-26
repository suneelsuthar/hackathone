import React from 'react';
import {View, Text} from 'react-native';
import {Avatar, Drawer} from 'react-native-paper';
import {DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './Styles';
export default function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image source={require('./../../assets/logo.png')} size={80} />
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={color} size={size} />
            )}
            label="Track By Country"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />

          <DrawerItem
            icon={({color, size}) => (
              <MaterialIcon name="track-changes" color={color} size={size} />
            )}
            label="Track By Country"
            onPress={() => {
              props.navigation.navigate('TrackByCountry');
            }}
          />
        </Drawer.Section>
      </View>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <Text style={styles._footer}>COVID-19 TRACKER</Text>
      </Drawer.Section>
    </View>
  );
}
