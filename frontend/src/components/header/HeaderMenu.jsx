import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../resourses/img/icons/logo.png'
import Modal from '../modal/Modal';





const HeaderMenu = (props) => {
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


    const onSearch = (e) => {

        if (window.matchMedia('(max-width: 768px)').matches) {
            setHideSign(true)
        }
        e.preventDefault()
        e.stopPropagation()
        setSearch(true)
        console.log(321)
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
                        <li className="nav__item"><a href="#" className="nav__link">About the product</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Catalog</a></li>
                        <li className="nav__item"><Link to='/custom' className="nav__link">Custom</Link></li>
                        <li className="nav__item"><a href="#" className="nav__link">News</a></li>
                    </ul>
                    <div className="log-reg" style={{"display" : hideSign ? "none" : "flex"}}>
                        <a href="" className="log-reg__sign-in">Sign in</a>
                        <Link to='/reg' className="log-reg__sign-up">Sign up</Link>
                    </div>
                    <form 
                    className={search ? 'header__search header__search_active' : 'header__search'}>
                        <input 
                        type="text" 
                        className="header__search__field" 
                        onClick={(e) => onSearch(e)}
                        />
                        <button onClick={e => onSearch(e)} type="submit" className='header__search__btn'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.582 16.3522H17.4077L16.9914 15.9508C18.4483 14.2561 19.3253 12.056 19.3253 9.66266C19.3253 4.3259 14.9994 0 9.66266 0C4.3259 0 0 4.3259 0 9.66266C0 14.9994 4.3259 19.3253 9.66266 19.3253C12.056 19.3253 14.2561 18.4483 15.9508 16.9914L16.3522 17.4077V18.582L23.785 26L26 23.785L18.582 16.3522ZM9.66266 16.3522C5.96112 16.3522 2.97313 13.3642 2.97313 9.66266C2.97313 5.96112 5.96112 2.97313 9.66266 2.97313C13.3642 2.97313 16.3522 5.96112 16.3522 9.66266C16.3522 13.3642 13.3642 16.3522 9.66266 16.3522Z" fill="white"/>
                            </svg>
                        </button>
                    </form>
                    <div className="burger"
                    onClick={() => setShowModal(true)}
                    ><span></span></div>
                </nav>
            </div>
        </div>
    )
};

export default HeaderMenu