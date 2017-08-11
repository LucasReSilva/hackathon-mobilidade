import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MoviesAndTV extends Component {

	static navigationOptions = {
		tabBarLabel: 'Movies & TV',
		tabBarIcon: () => <Icon size={24} name="ondemand-video" color="white" />
	}

	render() {
		return (
			<View style={styles.externalView}>
				<Text>MoviesAndTV</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	externalView: {
		paddingTop: 54
	}
});
