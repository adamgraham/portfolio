import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <Switch />
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
