import Twitter from '../../resourses/img/icons/twitter.svg'
import Instagram from '../../resourses/img/icons/instagram.svg'
import TikTok from '../../resourses/img/icons/tiktok.svg'
import Telegram from '../../resourses/img/icons/telegram.svg'

const Promo = () => {

    let descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus diam parturient metus eget eu massa amet.'
    let showMore = null;

    if (window.matchMedia('(max-width: 768px)').matches) {
        
        if(descr.length > 50) {
            showMore = <a>show more...</a>;
            descr = `${descr.slice(0, 100)}... `
        }
    }

    return (
        <div className="promo">
            <div className="container">
                <div className="promo__wrapper">
                    <div className="promo-text">
                        <div className="promo-text__title">
                            CRYPTO VALUES IN REAL TIME
                        </div>
                        <p className="promo-text__descr">
                            {descr}
                            {showMore}
                        </p>
                        <div className="promo__btns">
                            <button className="btn">More</button>
                            <button className="btn">Buy</button>
                        </div>
                    </div>
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
    )
}

export default Promo
