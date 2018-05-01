import React, { Component } from 'react';
import { Provider } from 'react-redux';

import ColorPicker from './modules/color-picker';
import store from './store';

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
