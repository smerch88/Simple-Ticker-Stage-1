import React from 'react';
import Logo from '../../resourses/img/icons/logo.png'

const HeaderMenu = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo} alt="Logo"/>
                            CoinTickr
                        </a>
                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#" className="nav__link">About the product</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Catalog</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">News</a></li>
                        </ul>
                        <div className="reg__wrap">
                            <a href="" className="reg__sign-in">Sign in</a>
                            <a href="" className="reg__sign-up">Sign up</a>
                        </div>
                        <div className="header__search"></div>
                        <div className="burger"></div>
                    </nav>
                </div>
            </div>
        </header>
    )
};

export default HeaderMenu