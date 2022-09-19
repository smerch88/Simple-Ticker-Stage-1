import { observer } from 'mobx-react-lite';
import React, {useState, useEffect, useContext} from 'react';

import { Link } from 'react-router-dom';
import { Context } from '../..';
import { logout } from '../../http/userAPI';


import Logo from '../../resourses/img/icons/logo.png';
import UserIcon from '../../resourses/img/icons/user-solid.svg'
import SearchIcon from '../../resourses/img/icons/search.svg'

import './_header.scss'

const HeaderMenu = observer ((props) => {
    const {user} = useContext(Context)

    const [search, setSearch] = useState(false);
    const [hideSign, setHideSign] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        document.addEventListener('click', offSearch);
        
        return document.removeEventListener('click', offSearch())
    }, [])

    useEffect(() => {
        props.onShowModal(showModal)
        setShowModal(false)
    }, [showModal])

    const logOut = async () => {
        logout().then(data => user.setIsAuth(false))
    }

    const onSearch = (e) => {

        if (window.matchMedia('(max-width: 768px)').matches) {
            setHideSign(true)
        }
        e.preventDefault()
        e.stopPropagation()
        setSearch(true)
    }
    
    const offSearch = () => {
        setSearch(false)
        setTimeout(offSign, 400)
    }

    const offSign = () => {
        setHideSign(false)
    }

    return (
        <div className="container">
            <div className="header__wrapper">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="Logo"/>
                        CoinTickr
                    </Link>
                </div>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#" className="nav__link">About us</a></li>
                        <li className="nav__item">
                            <Link to='/catalog' className="nav__link">Catalog</Link>
                        </li>
                        {user.isAuth ?
                            <li className="nav__item">
                                <Link to='/custom' className="nav__link">Custom</Link>
                            </li>
                            : null
                        }
                    </ul>
                    {user.isAuth ?
                    
                        <Link to='/custom' className="nav__auth">
                            <img src={UserIcon} alt="" />
                            <div
                            onClick={logOut}
                            className="nav__logout">Log out</div>
                        </Link>
                        :
                        <div className="log-reg" style={{"display" : hideSign ? "none" : "flex"}}>
                            <Link to='/login' className="log-reg__sign-in">Sign in</Link>
                            <Link to='/registration' className="log-reg__sign-up">Sign up</Link>
                        </div> 
                    }
                    <form 
                    className={search ? 'header__search header__search_active' : 'header__search'}>
                        <input 
                        type="text" 
                        className="header__search__field" 
                        onClick={(e) => onSearch(e)}
                        />
                        <button onClick={e => onSearch(e)} type="submit" className='header__search__btn'>
                            <img className='header__search__pic' src={SearchIcon} alt="" />
                        </button>
                    </form>
                    <div className="burger"
                    onClick={() => setShowModal(true)}
                    ><span></span></div>
                </nav>
            </div>
        </div>
    )
});

export default HeaderMenu