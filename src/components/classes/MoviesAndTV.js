import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MoviesAndTV extends Component {
  static navigationOptions = {
    tabBarLabel: 'Movies & TV',
    tabBarIcon: () => <Icon size={24} name="ondemand-video" color="white" />
  }

  render() {
    return (<View><Text>Movies & TV</Text></View>);
  }
}
