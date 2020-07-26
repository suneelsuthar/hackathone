import React from 'react';
import {View, Text, StatusBar, ScrollView, RefreshControl} from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';
import {Graph} from './../../components';
import styles from './styles';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: '',
      recovered: '',
      deaths: '',
      refresh: false,
    };
  }

  componentDidMount = async () => {
    try {
      const data = await axios.get('https://covid19.mathdro.id/api');
      this.setState({
        confirmed: data.data.confirmed.value,
        recovered: data.data.recovered.value,
        deaths: data.data.deaths.value,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  onRefresh = () => {
    this.setState({refresh: true});

    setTimeout(() => {
      this.setState({refresh: false});
    }, 1000);
  };

  render() {
    let {confirmed, recovered, deaths} = this.state;
    console.log(this.state);
    return (
      <View style={styles._container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => this.onRefresh()}
              tintColor="red"
            />
          }>
          <StatusBar translucent backgroundColor="transparent" />
          <View style={styles._car_view}>
            <Animatable.View animation="bounceIn" style={styles._card_1}>
              <Text style={styles._cases}>{confirmed}</Text>
              <Text style={styles._value}>TOTAL CONIRMED</Text>
            </Animatable.View>

            <Animatable.View style={styles._card_2} animation="bounceIn">
              <Text style={styles._cases}>{recovered}</Text>
              <Text style={styles._value}>TOTAL RECOVERED</Text>
            </Animatable.View>

            <Animatable.View style={styles._card_3} animation="bounceIn">
              <Text style={styles._cases}>{deaths}</Text>
              <Text style={styles._value}>TOTAL DEATHS</Text>
            </Animatable.View>
          </View>
          <Animatable.View animation="fadeInUpBig">
            <Graph data={this.state} />
          </Animatable.View>
        </ScrollView>
      </View>
    );
  }
}
