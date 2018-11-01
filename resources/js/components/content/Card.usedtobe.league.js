import React, { Component } from 'react';
import getLeagueInfo from './ajax/getLeagueInfo';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { darkBlack } from 'material-ui/styles/colors';
import { Link } from 'react-router-dom'

import { EditorBorderRight } from 'material-ui/svg-icons';

const styles = {
    buttonBase: {
        maxWidth: 275,
        width: 275,
        margin: 20,
        float: 'right',

    },
    card: {
        width:'100%',

    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    sectionTitle: {
        fontSize: 16,
        font: darkBlack,
    },
    pos: {
        marginBottom: 12,
    },
};


class League extends Component {
    constructor(props) {
        super(props);
        //  this.data =  this.getLeagueInfo();
        this.state = {
            data: null,
            classes: styles,
        };

    }

    componentDidMount() {
        // put call in here (??)
        const self = this;
        console.log('did mount fires');
        getLeagueInfo(self);
    }

    handleClick(event, a) {

        console.log('the event', event);
        console.log('value of a: ', a);
        alert(event.props);
    }


    render() {
        { console.log('class?', this.state.classes.card) }
        return (
            <div className="mainContent">
                {this.state && this.state.data &&
                    <div>
                        <h2 style={this.state.classes.title}>Your League</h2>
                        <Divider />
                        {
                            Object.keys(this.state.data).map(key =>
                        
                                <Link
                                    to={`/league/${this.state.data[key].fk_userRole}`}
                                    key={this.state.data[key].fk_userRole}
                                >
                                    <Card style={this.state.classes.card} >
                                        <CardContent>
                                            {this.state.data[key].name}
                                        </CardContent>

                                    </Card>
                                </Link>
                           
                              
                            )

                        }
                    </div>
                }
            </div>
        )
    }
}


export default League
