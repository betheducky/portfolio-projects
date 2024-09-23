import React from 'react';
import './styles.scss';
import Logo from './../../assets/goodsounds.png'

// My atttempt to apply what I knew about components, props, and interfaces in ts...

const Header = () => {
    return (
        <header className='header'>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="GoodSounds-LOGO" />
                </div>
            </div>
        </header>
    )
}

export default Header;