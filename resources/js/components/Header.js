import React from 'react'
import { Link } from 'react-router-dom'
import Menus from './Menus'


// The Header creates links that can be used to navigate
// between routes.



const Header = props => {
    console.log('Header:  ', props.getCurrentState());
    return(
         <header> 
            <Menus 
                setUser={props.setUser}
                getCurrentState={props.getCurrentState}
                changeLoggedState={props.changeLoggedState}
                getUser = {props.getUser}
                toggleLeftLoggedInMenuVisible={props.toggleLeftLoggedInMenuVisible}
            />
          <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
       </nav>
    </header>
    )}

export default Header