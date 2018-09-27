import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import Body from './Body';

render((
    <BrowserRouter>
    <div>
        <Header />
        <Body />

    </div>
    </BrowserRouter>
), document.getElementById('root'));