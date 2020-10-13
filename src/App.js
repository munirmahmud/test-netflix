import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import { FaqsContainer } from "./containers/FaqsContainer";
import * as ROUTES from './constants/routes';

export default function App () {
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

