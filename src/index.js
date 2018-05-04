import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 *
 * @Root
 * connection to HTML
 */

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
