import React from 'react';
import Logo from '../../resourses/img/icons/logo.png'

const HeaderMenu = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo} alt="Logo"/>
                            CoinTickr
                        </a>
                    </div>
                    <nav className="nav">
                        <ul className="nav__list">
                            <li className="nav__item"><a href="#" className="nav__link">About the product</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Catalog</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">News</a></li>
                        </ul>
                        <div className="reg">
                            <a href="" className="reg__sign-in">Sign in</a>
                            <a href="" className="reg__sign-up">Sign up</a>
                        </div>
                        <div className="header__search">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.582 16.3522H17.4077L16.9914 15.9508C18.4483 14.2561 19.3253 12.056 19.3253 9.66266C19.3253 4.3259 14.9994 0 9.66266 0C4.3259 0 0 4.3259 0 9.66266C0 14.9994 4.3259 19.3253 9.66266 19.3253C12.056 19.3253 14.2561 18.4483 15.9508 16.9914L16.3522 17.4077V18.582L23.785 26L26 23.785L18.582 16.3522ZM9.66266 16.3522C5.96112 16.3522 2.97313 13.3642 2.97313 9.66266C2.97313 5.96112 5.96112 2.97313 9.66266 2.97313C13.3642 2.97313 16.3522 5.96112 16.3522 9.66266C16.3522 13.3642 13.3642 16.3522 9.66266 16.3522Z" fill="white"/>
                            </svg>
                        </div>
                        <div className="burger"><span></span></div>
                    </nav>
                </div>
            </div>
        </div>
    )
};

export default HeaderMenu