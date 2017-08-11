import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MapView from 'react-native-maps';

const initialPlace = [{ latitude: -12.93, longitude: -38.55 },
					{ latitude: -13.03, longitude: -38.46 }];

const markers =
	[{ latlng: { latitude: -12.9858, longitude: -38.463 }, title: 'Casa', description: 'Sua casa' }];

export default class Music extends Component {
	static navigationOptions = {
		tabBarLabel: 'Music',
		tabBarIcon: () => <Icon size={24} name="music-note" color="white" />
	}

	getRegionForCoordinates(points) {
		// points should be an array of { latitude: X, longitude: Y }
		let minX;
		let maxX;
		let minY;
		let maxY;

		// init first point
		((point) => {
			minX = point.latitude;
			maxX = point.latitude;
			minY = point.longitude;
			maxY = point.longitude;
		})(points[0]);

		// calculate rect
		points.map((point) => {
			minX = Math.min(minX, point.latitude);
			maxX = Math.max(maxX, point.latitude);
			minY = Math.min(minY, point.longitude);
			maxY = Math.max(maxY, point.longitude);
		});

		const midX = (minX + maxX) / 2;
		const midY = (minY + maxY) / 2;
		const deltaX = (maxX - minX);
		const deltaY = (maxY - minY);

		return {
			latitude: midX,
			longitude: midY,
			latitudeDelta: deltaX,
			longitudeDelta: deltaY
		};
	}

	render() {
		const { region } = this.props;
		console.log(region);
		
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					region={this.getRegionForCoordinates(initialPlace)}
				>
					{markers.map((marker, i) => (
						<MapView.Marker
							key={i}
							coordinate={marker.latlng}
							title={marker.title}
							description={marker.description}
						/>
					))}
				</MapView>
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
