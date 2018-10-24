import React, { Component } from 'react';
import getLeagueInfo from './ajax/getLeagueInfo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class League extends Component {
    constructor(props) {
        super(props);
       //  this.data =  this.getLeagueInfo();
        this.state = {
               data: null,
        };
      
    }

componentDidMount() {
// put call in here (??)
    const self = this;
    console.log('did mount fires');
    getLeagueInfo(self);
}




    render() {
        return (
            <div>
                {this.state && this.state.data &&
                    <div>
                        {'This will just render after the return of the async call'}
                        {

                        Object.keys(this.state.data).map(key => 
                            <Card key={this.state.data[key].fk_userRole}>
                                <CardContent>
                                    {this.state.data[key].name}

                                </CardContent>
                            </Card>

                          
                            
                            )
            
                        }

                      
                    </div>
                     
             }
            </div>
        )
    }
}


export default League
