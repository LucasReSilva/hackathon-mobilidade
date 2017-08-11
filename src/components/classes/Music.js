import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';

export default class Music extends Component {
	static navigationOptions = {
		tabBarLabel: 'Music',
		tabBarIcon: () => <Icon size={24} name="music-note" color="white" />
	}

	render() {
		const { region } = this.props;
		console.log(region);
		
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={{
						latitude: -12.99,
						longitude: -38.48,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		marginTop: 60,
		height: 400,
		width: 400,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		...StyleSheet.absoluteFillObject,
	}
});
