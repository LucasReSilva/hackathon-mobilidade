import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MoviesAndTV extends Component {

	static navigationOptions = {
		tabBarLabel: 'Movies & TV',
		tabBarIcon: () => <Icon size={24} name="ondemand-video" color="white" />
	}

	componentWillMount() {
		this.criaFonteDeDados(['Aero', 'Smith']);
	}

	criaFonteDeDados(conversas) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.dataSource = ds.cloneWithRows(conversas);
	}

	renderRow(data) {
		return (
			<View style={styles.card}>
				<Text>{data}</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.externalView}>
				<Text>Music and TV</Text>
				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={this.renderRow}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	externalView: {
		paddingTop: 54,
		flex: 1,
		backgroundColor: 'lightgray'
	},
	card: {
		backgroundColor: 'white',
		padding: 10,
		marginTop: 10,
		marginLeft: 10,
		marginRight: 10,
		elevation: 2		
	}
});
