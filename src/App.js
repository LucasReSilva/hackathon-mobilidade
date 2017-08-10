import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  AppRegistry
} from 'react-native';

import Routes from './Routes';
import reducers from './reducers';

export default class mobilidade extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mobilidade', () => mobilidade);
