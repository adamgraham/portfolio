import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { MenuBar } from './components';
import routes from './routes';
import './styles/app.css';

const App = () => {
  const root = useRouteMatch({
    path: '/',
    exact: true,
  });
  return (
    <main className="app">
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
      <MenuBar hidden={root !== null} />
    </main>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
