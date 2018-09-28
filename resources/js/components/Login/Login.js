import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Send';



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
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },

    root: {

        borderRadius: 3,
        border: 0,
     
        padding: '0 30px',
      
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
                <Button variant="contained" color="primary" className={classes.button}>
                    Submit
        <Icon className={classes.rightIcon}>send</Icon>
                </Button>
            </div>
        );


    }
}

export default withStyles(styles)(Login);