import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/core/Menu';
import Tooltip from '@material-ui/core/Tooltip';


import LoginSignup from './Login/LoginSignup';
import '../../sass/main.scss';



const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};


class MenuAppBar extends React.Component {
    constructor(props) {
        super(props);
        this.openLoginMenu = this.openLoginMenu.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.closeLoginMenu = this.closeLoginMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            auth: true,
            anchorEl: null,
            open: false
        };

    }


    toggleDrawer(side, open) {
        this.setState({
            [side]: open,
        });
    };


    handleChange(event) {

        this.setState({ auth: event.target.checked });
    };

    openLoginMenu(event) {

        this.setState({
            open: true,
        });
    };

    closeLoginMenu(event) {
        this.setState({
            open: false,
        })
    }

    handleClose(event) {
        alert('hello');
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>
                <div className={classes.root}>
                    <FormGroup style={{ display: 'none' }}>
                        <FormControlLabel
                            control={
                                <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                            }
                            label={auth ? 'Logout' : 'Login'}
                        />
                    </FormGroup>
                    <AppBar position="static" className="{this.appBarTheme.pallette}">
                        <Toolbar>

                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            </IconButton>

                            <Typography variant="title" color="inherit" className={classes.grow}>
                                ICE-X
                           </Typography>
                            {auth && (
                                <div>
                                    <Tooltip title="Log In">
                                        <IconButton
                                            aria-owns={open ? 'menu-appbar' : null}
                                            aria-haspopup="true"
                                            onClick={this.openLoginMenu}
                                            color="inherit"
                                        > <AccountCircle />

                                        </IconButton>
                                    </Tooltip>


                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={this.handleClose}
                                    >

                                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    </Menu>
                                </div>
                            )}
                        </Toolbar>
                    </AppBar>
                </div>
                <Drawer
                    id="logindrawer"
                    anchor="right"
                    open={this.state.open}
                    onClose={this.closeLoginMenu}
                >
                    <LoginSignup closeDrawer={this.closeLoginMenu.bind(this)}/>


                   
                </Drawer>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
