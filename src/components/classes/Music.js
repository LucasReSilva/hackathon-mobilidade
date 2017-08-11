import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Music extends Component {
	static navigationOptions = {
		tabBarLabel: 'Music',
		tabBarIcon: () => <Icon size={24} name="music-note" color="white" />
	}

	render() {
		return (
			<View style={styles.externalView}>
				<Text>Music</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	externalView: {
		paddingTop: 54
	}
});
