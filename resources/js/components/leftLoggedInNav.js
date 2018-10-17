import React, { Component } from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {

    navBar: { 'top': AppBar.height },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};



const fullList = (
    <div className={styles.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
    </div>
);


class LeftLoggedInNav extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle()  {
   
     this.setState({ open: ! this.state.open });
    }
    render() {

    if(this.props.getLeftLoggedInMenuVisibleValue() == true)   {
          this.state.open = true;
        }
    else  {

        this.state.open = false;
    }

        return (
            <MuiThemeProvider>
                <div>
                    <Drawer
                        open={this.state.open}
                        width={200}
                        containerStyle={styles.navBar}>
                        <List>{mailFolderListItems}</List>
                        <Divider />
                        <List>{otherMailFolderListItems}</List>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default LeftLoggedInNav;
