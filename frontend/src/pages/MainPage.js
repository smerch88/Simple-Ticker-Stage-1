import Promo from '../components/promo/Promo';
import AboutProduct from '../components/aboutProduct/AboutProduct';
import CatalogList from '../components/catalogList/CatalogList';
import FeedBack from '../components/feedback/FeedBack';
import News from '../components/news/News';
import Marquee from '../components/marquee/Marquee';

const MainPage = () => {

    return (
        <>
            <Promo/>  
            <AboutProduct/>
            <CatalogList/>
            <Marquee/>
            <FeedBack/>
            <News/>
        </>
    )
}

export default MainPage;