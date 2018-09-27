import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { green700 } from 'material-ui/styles/colors';


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        display: 'flex',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },


    root: {
        //display: 'flex',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
       // display:'flex',
        borderRadius: 3,
        border: 0,
        // color: 'white',
        // height: 48,
        padding: '0 30px',
        //  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',

    },

    textFieldContainers:
    {
        width:'100%',
        display:'block',
    },


    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});






class Login extends Component {
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
        const { classes } = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={5}>
                    <div className={classes.textFieldContainers}>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            className={classes.textField}
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.textFieldContainers}>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            className={classes.textField}
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                    </div>
                </Paper>

                <div className={classes.textFieldContainers}>fadsfadsf</div>

                <div className={classes.textFieldContainers}>fadsfadsf</div>         
            </div>
        );


    }
}

export default withStyles(styles)(Login);