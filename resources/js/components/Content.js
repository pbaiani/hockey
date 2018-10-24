import React, { Component } from 'react';
import Home from './content/Home';
import League from './content/league';

import Roster from './Roster';
import Schedule from './Schedule';

import { Switch, Route } from 'react-router-dom'


class Content extends Component {
    render() {
        return (
        
            <Switch>
                <Route exact path='/' component={Home} />
                <Route
                    exact path='/league'
                    render={(props) => <League {...props} getUser={this.props.getUser} />}
                />
                <Route exact path='/roster' component={Roster} />
                <Route path='/schedule' component={Schedule} />
            </Switch>
      
        
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

