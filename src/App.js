import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ColorPicker from './modules/color-picker';
import store from './store';

import './styles/App.css';

/**
 *
 * @App_class
 * connection to redux store
 */

class App extends Component {
  render() {
    return (
      <Provider store={store()}>
        <ColorPicker/>
      </Provider>
    );
  }
}

export default App;
