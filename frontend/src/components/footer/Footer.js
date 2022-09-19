import Logo from "../../resourses/img/icons/logo.png"
import Twitter from '../../resourses/img/icons/twitter.svg'
import Instagram from '../../resourses/img/icons/instagram.svg'
import TikTok from '../../resourses/img/icons/tiktok.svg'
import Telegram from '../../resourses/img/icons/telegram.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="logo">
                        <a href="#">
                            <img src={Logo} alt="Logo"/>
                            CoinTickr
                        </a>
                    </div>
                    <div className="footer__info">
                        <a href="#" className="footer__link">Lorem ipsum dolor sit amet</a>
                        <a href="#" className="footer__link">Lorem ipsum dolor sit amet</a>
                        <a href="#" className="footer__link">Lorem ipsum dolor sit amet</a>
                        <div className="social-links">
                        <a href="#" className="social-links__item">
                            <img src={Telegram} alt="" />
                        </a>
                        <a href="#" className="social-links__item">
                            <img src={Instagram} alt="" />
                        </a>
                        <a href="#" className="social-links__item">
                            <img src={Twitter} alt="" />
                        </a>
                        <a href="#" className="social-links__item">
                        <img src={TikTok} alt="" />
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;