import React from 'react'
import { Link } from 'react-router-dom'
import ProjMenu from './ProjMenu'


// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <ProjMenu />
           <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
       
       
       
        </nav>


    </header>
)

export default Header