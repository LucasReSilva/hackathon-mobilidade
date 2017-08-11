import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';

import MoviesAndTV from './classes/MoviesAndTV';
import Maps from './classes/Maps';
import Books from './classes/Books';

export default TabNavigator({
	Maps: { screen: Maps },
	MoviesAndTV: { screen: MoviesAndTV },
	Books: { screen: Books }
}, {
	tabBarComponent: NavigationComponent,
	tabBarPosition: 'bottom',
	tabBarOptions: {
		bottomNavigationOptions: {
			labelColor: 'white',
			rippleColor: 'white',
			tabs: {
				Maps: {
					barBackgroundColor: '#00796B'
				},
				MoviesAndTV: {
					barBackgroundColor: '#37474F'
				},
				Books: {
					barBackgroundColor: '#5D4037'
				}
			}
		}
	}
});
