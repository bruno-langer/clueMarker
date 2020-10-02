import React, { useEffect, useState } from 'react';
import './style.css';




const CardWeapon = (props) => {


    let session = sessionStorage.getItem(props.name)
    console.log(`${props.name} ${session}`);

    const [active, setActive] = useState(true)


    useEffect(() => {
        if (session !== null) {
            session = (session === 'true') ? true : false
            setActive(session)
        }
    }, [])

    useEffect(() => {
        sessionStorage.setItem(props.name, active)
    }, [active])



    const img = `url(${require(`../fotos/weapon${props.index + 1}.png`)})`


    return (
        <div className={'container-card'}
            onClick={() => setActive(!active)}
            style={{
                filter: `grayscale(${active ? 0 : 1}`,
                backgroundImage: img,
                backgroundPosition: 'start',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

            <span className={'card-name'}>{props.name}</span>
        </div>
    );
}

export default CardWeapon;