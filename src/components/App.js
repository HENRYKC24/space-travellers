import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Missions from '../pages/Missions';
import MyProfile from '../pages/MyProfile';
import PageNotFound from '../pages/PageNotFound';
import Rockets from '../pages/Rockets';
import Footer from './Footer';
import Header from './Header';

const App = () => (
  <div className="main">
    <section>
      <Header />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <MyProfile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </section>
    <section>
      <Footer />
    </section>
  </div>
);

export default App;
