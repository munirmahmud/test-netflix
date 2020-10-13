import React from 'react';
import { JumbotronContainer } from "./containers/JumbotronContainer";
import { FooterContainer } from "./containers/FooterContainer";
import {FaqsContainer} from "./containers/FaqsContainer";
import * as ROUTES from './constants/routes';

export default function App () {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
}

