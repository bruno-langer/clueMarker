import React from 'react';
import Secret from '../fotos/secret.png'
const Lock = (props) => {
    return (<div className={'container'}>
        <img className={'lockIcon'} src={Secret}></img>
        <button>RESETAR GAME</button>
    </div>);
}

export default Lock;