import React from 'react'
import { Switch, Route } from 'react-router-dom'
import league from './league'
import leagueDetails from './League.Details'

// The Roster component matches one of two different routes
// depending on the full pathname
const League_Router = () => (
    <div>
        <Route
             path='/league'
            component={league} />
        <Route
            path='/league/:number' 
            component={leagueDetails} />
    </div>
)

export default League_Router
