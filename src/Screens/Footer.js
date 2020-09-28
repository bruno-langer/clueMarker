import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'


const Footer = () => {
    return (
        <div
            className={'container-footer'}
        >
            <Link
                to='/person'
                className={'container-footer-block'}
            >
                <span>Suspeitos</span>
            </Link>
            <Link
                to='/weapon'
                className={'container-footer-block'}
            >
                <span>Armas</span>
            </Link>
            <Link
                to='/place'
                className={'container-footer-block'}
            >
                <span>Locais</span>
            </Link>
            <Link
                to='/'
                className={'container-footer-block'}
            >
                <span>Configs</span>
            </Link>

        </div>);
}

export default Footer;