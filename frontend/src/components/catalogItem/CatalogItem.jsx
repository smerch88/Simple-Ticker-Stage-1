import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Mousewheel } from 'swiper';

import Ticker from "../../resourses/img/thumbnail.jpg"
import ItemOption from "./ItemOption"


const CatalogItem = (props) => {

    const renderItem = () => {

        const elements = props.data.slice(0, 3).map((element, i) => {

            const { name, thumbnail, options } = element

            return (
                <SwiperSlide key={i} >
                    <div className="ticker">
                        <img src={Ticker} alt={name} className="ticker__thumbnail" />
                        <h2 className="ticker__title">{name}</h2>
                        <ItemOption
                            options={options}
                        />
                        <div className="ticker__btn">
                            <button className="btn">Buy</button>
                        </div>
                    </div>
                </SwiperSlide>
            )
        });

        return (
            <Swiper
                modules={[Scrollbar, FreeMode, Mousewheel]}
                slidesPerView={"auto"}
                slidesPerGroup={1}
                spaceBetween={30}
                scrollbar={{ draggable: true }}
                mousewheel={true}
                centeredSlides={true}
                breakpoints={{
                    1281: {
                      centeredSlides: false,
                      mousewheel: false
                    }
                }}
            >
                {elements}
            </Swiper>
        )
    }

    const products = renderItem()

    return (
        <>
            {products}
        </>
    )
}

export default CatalogItem;