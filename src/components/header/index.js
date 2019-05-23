import React from 'react';
import './style.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div data-test="wrap" className="wrap">
                <div className="logo">
                    <img data-test="logoImg" src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
};

export default Header;