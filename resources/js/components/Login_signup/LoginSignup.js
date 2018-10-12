import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';


import Login from './Login';
import SignUp from './SignUp';



function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};



class LoginSignup extends Component {

    constructor(props) {
        super(props);
        console.log('Login Signup:  ', this.props.getCurrentState());


        this.state = { value: 0, //isLoggedIn: false, user: {} 
                        };
 
        // boilerplate function assignments
        this.handleChange = this.handleChange.bind(this);
        this.changeLoggedState = this.changeLoggedState.bind(this);
        this.getCurrentState = this.getCurrentState.bind(this);

    } // end of constructor


   

    changeLoggedState(event, value) {
        this.setState({ isLoggedIn: value }, () => {
            console.log('state of isLoggedIn:  ', this.getCurrentState());
        }); 


     //   this.setState({ isLoggedIn: value });
     //   console.log('currentState:  ', this.getCurrentState());
    }


    getCurrentState(value) {
       //console.log('logged in?' , this.state.isLoggedIn);
       return this.state.isLoggedIn;
      
    }



    handleChange(event, value) {
        this.setState({ value });
    }


    render() {
        const { value } = this.state;


       if(this.state.isLoggedIn)
       {
        alert(this.state.isLoggedIn);
       }
        return (

            <div>
                <AppBar
                    position="sticky"
                >

                    <div
                        style={{
                            width: "100%",
                            textAlign: "right",



                        }}
                    >


                        <IconButton
                            onClick={this.props.closeDrawer}
                            color="inherit"
                        >
                            <Cancel />

                        </IconButton>





                    </div>
                    <Tabs
                        value={value} onChange={this.handleChange}>
                        <Tab label="Log In" />
                        <Tab label="Sign Up"

                            style={{


                            }}

                        />
                    </Tabs>




                </AppBar>

                {value === 0 &&
                    <TabContainer>
                    <Login changeLoggedState={this.props.changeLoggedState} getCurrentState={this.props.getCurrentState} />
                    </TabContainer>}
                {value === 1 &&
                    <TabContainer>
                    <SignUp changeLoggedState={this.props.changeLoggedState} getCurrentState={this.props.getCurrentState} />
                    </TabContainer>}

            </div>
        );


    }
}

export default LoginSignup;