import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import LeftLoggedInNav from './leftLoggedInNav';
import Content from './Content';



class Body extends Component {
    constructor(props) {
        super(props);
       this.closeDrawer = this.closeDrawer.bind(this);
    }

     closeDrawer() {
         console.log('From body close drawer', this.props.getLeftLoggedInMenuVisibleValue());

          if (this.props.getLeftLoggedInMenuVisibleValue() == true) {
            this.props.toggleLeftLoggedInMenuVisible();
        }

    }

    render() {
         return (
            <main>
                {//props.getUser().id &&
                    <LeftLoggedInNav
                        getLeftLoggedInMenuVisibleValue={this.props.getLeftLoggedInMenuVisibleValue}
                        toggleLeftLoggedInMenuVisible={this.props.toggleLeftLoggedInMenuVisible}
                        getUser={this.props.getUser}
                    />
                }
            <div
                style={{
                    backgroundColor: "red"
                }}
                tabIndex={0}
                role="button"
                onClick={this.closeDrawer}
               onKeyDown={this.closeDrawer}
            >
                    <Content
                        getLeftLoggedInMenuVisibleValue={this.props.getLeftLoggedInMenuVisibleValue}
                        toggleLeftLoggedInMenuVisible={this.props.toggleLeftLoggedInMenuVisible}
                        getUser={this.props.getUser}
                    />
              
                </div>


         </main>       
        );
    }
}

export default Body;





/*




const Body = (props) => {
    
//console.log('from body', props.getLeftLoggedInMenuVisibleValue());

    return (
        <main>
            {//props.getUser().id &&
             <LeftLoggedInNav 
                    getLeftLoggedInMenuVisibleValue={props.getLeftLoggedInMenuVisibleValue}
            /> 
          
        }

            <Content
               getLeftLoggedInMenuVisibleValue={props.getLeftLoggedInMenuVisibleValue}
               toggleLeftLoggedInMenuVisible={props.toggleLeftLoggedInMenuVisible}

            />



        </main>
    )
}

export default Body;






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

