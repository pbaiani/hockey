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
        this.state = {
            value: 0,
        };


        // boilerplate function assignments
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event, value) {
        this.setState({ value });
    }


    render() {
        const { value } = this.state;

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
                        <Tab
                            label="Log In" />
                        <Tab label="Sign Up"

                            style={{


                            }}

                        />
                    </Tabs>




                </AppBar>

                {value === 0 &&
                    <TabContainer>
                        <Login />
                    </TabContainer>}
                {value === 1 &&
                    <TabContainer>
                        <SignUp />
                    </TabContainer>}

            </div>
        );


    }
}

export default LoginSignup;