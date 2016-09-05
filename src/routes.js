import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import ALL_Times from './components/alltimes';
import RECENT_Times from './components/recenttimes';

export default (
  <Router path="/" component={ App }>
    <IndexRoute component={ ALL_Times }/>
    <Route path="/recent" component={ RECENT_Times } />
  </Router>
)
