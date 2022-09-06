import Promo from '../promo/Promo';
import AboutProduct from '../aboutProduct/AboutProduct';
import CatalogList from '../catalogList/CatalogList';
import FeedBack from '../feedback/FeedBack';
import News from '../news/News';

const MainPage = () => {

    return (
        <>
            <Promo/>  
            <AboutProduct/>
            <CatalogList/>
            <FeedBack/>
            <News/>
        </>
    )
}

export default MainPage;