import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Missions from '../pages/Missions';
import MyProfile from '../pages/MyProfile';
import PageNotFound from '../pages/PageNotFound';
import Rockets from '../pages/Rockets';
import Footer from './Footer';
import Header from './Header';
import { getMissionsFromServer } from '../redux/missions/missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsFromServer());
  }, []);

  return (
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
};

export default App;
