import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Values } from 'redux-form-website-template';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from '../store/store';
import showResults from './showResults';
import LogInForm from './Forms/form_login';


class Login extends Component {
    constructor() {
        super();


    }


    render() {
        return (
            < Provider store={store} >
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <div style={{ padding: 0 }}>
                        <h3>Login</h3>
                        <LogInForm onSubmit={showResults} />
                        <Values form="Login" />
                    </div>
                </MuiThemeProvider>
            </Provider >

        )
    }
}


export default Login
