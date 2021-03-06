import React, { useEffect, useState } from 'react';
import './style.css';




const CardPerson = (props) => {


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

    // let index;
    // if (props.index ===)

    const img = `url(${require(`../fotos/person${props.index + 1}.png`)})`



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
            <span
                className={'card-description'}
                style={{
                    color: props.color,
                }}
            >
                {props.description}</span>
        </div>
    );
}

export default CardPerson;