import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store/store';
import showResults from './showResults';
import SignUpForm from './Forms/form_signup';


class SignUp extends Component {
    constructor() {
        super();


    }


    render() {
        return (
            < Provider store={store} >
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div style={{ padding: 0 }}>
                        <h3>Sign Up</h3>
                        <SignUpForm onSubmit={showResults} />
                        <Values form="Signup" />
                    </div>
                </MuiThemeProvider>
            </Provider >

        )
    }
}


export default SignUp