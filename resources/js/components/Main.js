import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Application from './Application'

render((
    <BrowserRouter>
          <Application />
    </BrowserRouter>
), document.getElementById('root'));