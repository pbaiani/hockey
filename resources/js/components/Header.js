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
         </header>
    )}

export default Header