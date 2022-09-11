import Promo from '../promo/Promo';
import AboutProduct from '../aboutProduct/AboutProduct';
import CatalogList from '../catalogList/CatalogList';
import FeedBack from '../feedback/FeedBack';
import News from '../news/News';
import Marquee from '../marquee/Marquee';

const MainPage = () => {

    return (
        <>
            <Promo/>  
            <AboutProduct/>
            <CatalogList/>
            <Marquee/>
            {/* <FeedBack/>
            <News/> */}
        </>
    )
}

export default MainPage;