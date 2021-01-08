import { useThemedFavicon } from '@zigurous/react-components';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { Menu } from './components';
import routes from './routes';

const App = () => {
  useThemedFavicon();
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
      <Menu hidden={root !== null} />
    </main>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
