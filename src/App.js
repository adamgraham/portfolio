import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import './styles/app.css';

const App = () => {
  return (
    <div className="app">
      <Switch>
        {Object.values(routes).map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              exact={Boolean(route.exact)}
              component={route.component}
            />
          );
        })}
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
