
import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import { render } from 'react-dom'

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            isLoggedIn: false,
            user: {}
        };
    
    
        // boilerplate function assignments
     //   this.handleChange = this.handleChange.bind(this);
       this.changeLoggedState = this.changeLoggedState.bind(this);
        this.getCurrentState = this.getCurrentState.bind(this);
    
       
    }// end constructor
 
    changeLoggedState(event, value) {
        this.setState({ isLoggedIn: value }, () => {
            console.log('state of isLoggedIn:  ', this.getCurrentState());
        });
   }
    getCurrentState(value) {
        //console.log('logged in?' , this.state.isLoggedIn);
        return this.state.isLoggedIn;
    }

    setUser(event,value)  {
        this.setState({ user: value }, () => {
            /* At this point this.state.user contains:
            firstName
            lastName
            id
            email
            auth_token
            */
            console.log('first name:  ', this.state.user);  // works!
       }) 
    }

    getUser() {
        return this.state.user;   
    }


    render() {
        return(
        <div id="Application">
                <Header
                    getUser = {this.getUser.bind(this)}
                    setUser={this.setUser.bind(this)} 
                    changeLoggedState={this.changeLoggedState.bind(this)} 
                    getCurrentState={this.getCurrentState.bind(this)}
                />
                <Body changeLoggedState={this.changeLoggedState.bind(this)} />
        </div>
        )
    }
}

export default Application;
