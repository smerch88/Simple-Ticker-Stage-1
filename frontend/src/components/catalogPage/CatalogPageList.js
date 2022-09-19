import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from "swiper";



import Ticker from "../../resourses/img/thumbnail.jpg";
import { Link } from 'react-router-dom';

const CatalogPageList = (props) => {

    function renderItem () {
        

        const items = props.data.map((item, i) => {

            const {name, price,configuratio, color, communication, size, id} = item

            return (
                    <div key={i} className="catalog__item">
                        <Link to={`/catalog/${id}`}>
                            <div className="catalog__item__thumbnail">
                                <img src={Ticker} alt="Ticker" />
                            </div>
                            <div className="catalog__item__name">{name}</div>
                            <div className="catalog__item__price">${price}</div>
                            <div className="catalog__item__price">{configuratio}</div>
                            <div className="catalog__item__price">{color}</div>
                            <div className="catalog__item__price">{communication}</div>
                            <div className="catalog__item__price">{size}</div>
                            <div className="catalog__item__btn">
                                <button className="btn">Buy</button>
                            </div>
                        </Link>
                    </div>
            )
        })

        return (
            <>
                {items}
            </>
        )
    }

    const elements = renderItem()

    return (
        <div className="catalog__list">
            {elements}
        </div>
    )
}

export default CatalogPageList