
import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Cookies from 'universal-cookie';
const cookie = new Cookies();
import { render } from 'react-dom'


class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            isLoggedIn: false,
            user: {},
            leftLoggedInMenuVisibleValue: false,
          };
      
        // boilerplate function assignments
     //   this.handleChange = this.handleChange.bind(this);
       this.changeLoggedState = this.changeLoggedState.bind(this);
        this.getCurrentState = this.getCurrentState.bind(this);
        this.toggleLeftLoggedInMenuVisible = this.toggleLeftLoggedInMenuVisible.bind(this);
       
    }// end constructor
 
    // toggles the 'state' of leftLoggedInMenuVisibleValue to true or false
    toggleLeftLoggedInMenuVisible()  {
        if (this.state.leftLoggedInMenuVisibleValue == false)  {

            this.setState({leftLoggedInMenuVisibleValue:true});
            }
        else
            {
            this.setState({ leftLoggedInMenuVisibleValue: false });

            }
    }


    // gets the value of leftLoggedInMenuVisibleValue
    getLeftLoggedInMenuVisibleValue()  {
        return this.state.leftLoggedInMenuVisibleValue;
    }


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
            console.log('first name:  ', this.state.user.firstName);  // works!
       }) 
    }


    componentDidMount() {
        const self = this;
        if(cookie.get('token'))
            {
             // log in with cookie
            axios.get('api/persistentLogIn', {
            }).then(response => {

                console.log('login data from autolog:', response.data.data);
                this.setUser(event, response.data.data[0]);
                this.changeLoggedState(event, true);

            }).catch((error) => {
                console.log(error);
            });
        }
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
                    toggleLeftLoggedInMenuVisible={this.toggleLeftLoggedInMenuVisible.bind(this)}
            />
                <Body
                    getUser={this.getUser.bind(this)} 
                    getLeftLoggedInMenuVisibleValue={this.getLeftLoggedInMenuVisibleValue.bind(this)}
                    toggleLeftLoggedInMenuVisible={this.toggleLeftLoggedInMenuVisible.bind(this)}
                    getUser={this.getUser.bind(this)}
                />
        </div>
        )
    }
}

export default Application;
