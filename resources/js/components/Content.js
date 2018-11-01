import React, { Component } from "react";
import Home from "./content/Home";


import { Provider } from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import store from "./store/store";

import { Switch, Route } from "react-router-dom";
import League from "./content/League/League";
import asychTest from "./tests/AsychTest";



class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }
    render() {
        return (
            < Provider store={store} >
                <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/league"
                        render={props => (
                            <League
                                {...props}
                                getUser={this.props.getUser}
                            />
                        )}
                    />
                    <Route path="/league/:number" component={League} />
                    <Route path="/test" component={asychTest} />


                </Switch>
            </div>
            </MuiThemeProvider>
            </Provider>
        );
    }
}

export default Content;




/*
import Home from './Home'
import Roster from './Roster'
import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path='/schedule' component={Schedule} />
        </Switch>
    </main>
)




*/
