import React from 'react';
import './index.css';
import App from './App';
import {render} from "react-dom";
import {GlobalStyles} from "twin.macro";


render(
    <>
        <GlobalStyles/>
        <App/>
    </>,
    document.getElementById('root'),
)
