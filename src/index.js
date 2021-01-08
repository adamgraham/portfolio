import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import '@zigurous/styles/dist/index.css';
import '@zigurous/react-components/dist/index.css';

import './styles/app.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactGA.initialize('UA-61761892-1');
