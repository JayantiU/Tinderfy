import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './LandingPage'
import { BGPurple } from '../styles';

class PageContainer extends React.Component {

  render() {
    return (
      <BGPurple>
        <Router>
          <Switch>
            <Route path="/"
            exact={true}
            render={() =>
              <LandingPage />
            } />
          </Switch>
        </Router>
      </BGPurple>
    )
  }
};

export default PageContainer;