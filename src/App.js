import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {JumbotronContainer} from "./containers/jumbotron";
import {FooterContainer} from "./containers/footer";
import {FaqsContainer} from "./containers/faqs";


export default function App() {
  return (
      <Router>
          <Route exact path={ROUTES.HOME}>
              <JumbotronContainer />
              <FaqsContainer />
              <FooterContainer />
          </Route>
      </Router>
  );
}