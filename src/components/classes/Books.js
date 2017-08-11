import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Books extends Component {
  static navigationOptions = {
    tabBarLabel: 'Books',
    tabBarIcon: () => <Icon size={24} name="book" color="white" />
  }

  render() {
    return (<View><Text>Books</Text></View>);
  }
}
