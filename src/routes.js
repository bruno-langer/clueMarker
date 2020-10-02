import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Person from './Screens/Person'
import Weapon from './Screens/Weapon'
import Place from './Screens/Place'
import Lock from './Screens/Lock'
import SwipeableViews from 'react-swipeable-views';


const Routes = () => {
    return (
        <SwipeableViews onChangeIndex={() => {

            window.scrollTo(0, 0)
        }}>
            <Person />
            <Weapon />
            <Place />
            <Lock />
        </SwipeableViews>);
}

export default Routes;