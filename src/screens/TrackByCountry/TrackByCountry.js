import React from 'react';
import {View, Text, StatusBar, ScrollView} from 'react-native';
import axios from 'axios';
import styles from './Styles';
import {DropDown, Graph} from './../../components';
import * as Animatable from 'react-native-animatable';

export default class TrackByCountry extends React.Component {
  constructor() {
    super();
    this.state = {
      confirmed: '',
      recovered: '',
      deaths: '',
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
  selectCountry = async val => {
    this.setState({country: val});
    await axios
      .get(`https://covid19.mathdro.id/api/countries/${val}`)
      .then(res => {
        this.setState({
          confirmed: res.data.confirmed.value,
          recovered: res.data.recovered.value,
          deaths: res.data.deaths.value,
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    let {confirmed, recovered, deaths} = this.state;
    console.log(this.state);
    return (
      <View style={styles._container}>
        <ScrollView>
          <StatusBar translucent backgroundColor="transparent" />
          <View style={styles._car_view}>
            <DropDown select={this.selectCountry} />
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
