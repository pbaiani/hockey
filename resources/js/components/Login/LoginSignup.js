import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        backgroundColor: "#23DS12",
        
    },
});


class LoginSignup extends Component {
    constructor() {
        super();
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

        alert(styles);
          return (
            
            <div className={styles.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Log In" />
                        <Tab label="Sign Up" />
                    </Tabs>
                </AppBar>
                {value === 0 && 
                     <TabContainer>
                         Log in 
                    </TabContainer>}
                {value === 1 &&
                     <TabContainer>
                         Sign Up
                     </TabContainer>}
         
            </div>
        );


    }
 }

 export default LoginSignup;