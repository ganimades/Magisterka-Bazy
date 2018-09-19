import { AppRegistry } from 'react-native';
import App from './src/App';
import { reducers } from './src/reducers';
import { createStore } from 'redux';
import React from 'react';
import { Provider } from 'react-redux';

const store = createStore(reducers);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('reactnativeapp', () => AppWrapper);
