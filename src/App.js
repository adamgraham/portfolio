import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route component={routes.cover.component} />
      </Switch>
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
