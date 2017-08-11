import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Inicial from './components/Inicial';
import Principal from './components/Principal';

export default () => (
	<Router>
		<Scene key='inicial' component={Inicial} hideNavBar />
		<Scene key='principal' component={Principal} title='Principal' hideNavBar={false} renderBackButton={() => (null)} />
	</Router>
);
