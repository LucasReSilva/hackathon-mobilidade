import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Books extends Component {
	static navigationOptions = {
		tabBarLabel: 'Books',
		tabBarIcon: () => <Icon size={24} name="book" color="white" />
	}

	render() {
		return (
			<View style={styles.externalView}>
				<Text>Books</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	externalView: {
		paddingTop: 54
	}
});
