import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Inicial from './components/Inicial';

export default props => (
	<Router>
		<Scene key='inicial' component={Inicial} title='Inicial' hideNavBar />
	</Router>
);

