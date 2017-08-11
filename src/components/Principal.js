import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';

import MoviesAndTV from './classes/MoviesAndTV';
import Music from './classes/Music';
import Books from './classes/Books';

export default TabNavigator({
	MoviesAndTV: { screen: MoviesAndTV },
	Music: { screen: Music },
	Books: { screen: Books }
}, {
	tabBarComponent: NavigationComponent,
	tabBarPosition: 'bottom',
	tabBarOptions: {
		bottomNavigationOptions: {
			labelColor: 'white',
			rippleColor: 'white',
			tabs: {
				MoviesAndTV: {
					barBackgroundColor: '#37474F'
				},
				Music: {
					barBackgroundColor: '#00796B'
				},
				Books: {
					barBackgroundColor: '#5D4037'
				}
			}
		}
	}
});
