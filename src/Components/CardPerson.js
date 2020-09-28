import React from 'react';
import './style.css'
import image from '../fotos/20200928_093424.jpg'


const CardPerson = (props) => {
    return (
        <div className={'container-card'}
            style={{
                backgroundImage: `url(${image})`
            }}>
            <h1>name</h1>
            <h2>description</h2>
        </div>
    );
}

export default CardPerson;