import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default (
  <Switch>
    <Route path="/games" />
    <Route path="/websites" />
    <Route path="/art" />
    <Route path="/tech" />
    <Route path="/presentations" />
    <Route />
  </Switch>
);
