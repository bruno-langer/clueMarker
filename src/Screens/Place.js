import React from 'react';
import CardPlace from '../Components/CardPlace';

import { place } from '../settings'

const Place = () => {

    const list = place?.map((place, key) =>
        <CardPlace
            name={place.name}
            description={place.description}
            color={place.color}
            index={key}
        />)

    return (
        <div className={'container'}>
            {list}
        </div>
    )
}

export default Place;