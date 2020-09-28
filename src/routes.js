import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Person from './Screens/Person'
import Weapon from './Screens/Weapon'
import Place from './Screens/Place'



const Routes = () => {
    return (
        <Switch>
            <Route path='/person' >
                <Person />
            </Route>
            <Route path='/weapon'>
                <Weapon />
            </Route>
            <Route path='/place'>
                <Place />
            </Route>
        </Switch>);
}

export default Routes;