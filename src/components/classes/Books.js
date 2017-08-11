import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Books extends Component {
	
	static navigationOptions = {
		tabBarLabel: 'Books',
		tabBarIcon: () => <Icon size={24} name="book" color="white" />
	}

	componentWillMount() {
		this.criaFonteDeDados(['Livro 1', 'Livro 2']);
	}

	criaFonteDeDados(conversas) {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.dataSource = ds.cloneWithRows(conversas);
	}

	renderRow(data) {
		return (
			<Text>{data}</Text>
		);
	}

	render() {
		return (
			<View style={styles.externalView}>
				<Text>Books</Text>
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
		paddingTop: 54
	}
});
