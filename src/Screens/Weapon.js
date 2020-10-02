import React from 'react';
import CardWeapon from '../Components/CardWeapon';

import { weapon } from '../settings'



const Weapon = () => {

    const list = weapon?.map((weapon, key) =>
        <CardWeapon
            name={weapon.name}
            description={weapon.description}
            color={weapon.color}
            index={key}
        />)

    return (
        <div className={'container'}>
            {list}
        </div>
    );
}

export default Weapon;