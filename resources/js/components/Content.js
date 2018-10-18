import React, { Component } from 'react';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';
import { Switch, Route } from 'react-router-dom'
class Content extends Component {
    constructor(props) {
        super(props);
      
    
     
    }



    render() {
   

        return (
          <div>bla bla bla</div>
        );
    }
}

//export default Content;






const Main = () => (

<main>
       
            <Switch>
                <Route exact path='/' component={Home} />
                 <Route path='/weirdo_check' component={Roster} />
                <Route path='/roster' component={Roster} />
               <Route path='/schedule' component={Schedule} />
          </Switch>

</main>
)

export default Main;








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

