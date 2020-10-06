import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';

const store = createStore(searchRobots);
console.log('index.js store', store)
console.log('index.js searchRobots',searchRobots )

ReactDOM.render(
              <Provider store={store} >
                <App />,
              </Provider>, document.getElementById('root')
);
serviceWorker.unregister();