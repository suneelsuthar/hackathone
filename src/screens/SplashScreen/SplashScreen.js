import React from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }
  
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('./../../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
        </View>
        <Animatable.View style={[styles.footer]} animation="fadeInUpBig">
          <Text style={[styles.title]}>COVID-19 UPDATES!</Text>
          <Text style={styles.text}>Stay Home Stay Safe</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('HomeDrawer')}>
              <LinearGradient
                colors={['#d61111', '#aa3838']}
                style={styles.signIn}>
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons name="navigate-next" color="#fff" size={20} />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}
