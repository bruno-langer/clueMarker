import React, { useState } from 'react';
import CardPerson from '../Components/CardPerson';
import { person } from '../settings'

const Person = () => {

    const list = person?.map((person, key) =>
        <CardPerson
            name={person.name}
            description={person.description}
            color={person.color}
            index={key}
        />)

    return (
        <div className={'container'}>
            {list}
        </div>
    );
}

export default Person;