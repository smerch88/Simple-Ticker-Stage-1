import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Mousewheel } from 'swiper';

import Ticker from "../../resourses/img/thumbnail.jpg"
import ItemOption from "./ItemOption"

const CatalogItem = (props) => {
    
    const renderItem = () => {

        const elements = props.data.map((element, i) => {

            const { name, thumbnail, options } = element
            
            return (
                <SwiperSlide key={i} className="ticker">
                    <img src={Ticker} alt={name} className="ticker__thumbnail" />
                    <h2 className="ticker__name">{name}</h2>
                    <ItemOption
                        options={options}
                    />
                    <div className="ticker__btn">
                        <button className="btn">Buy</button>
                    </div>
                </SwiperSlide>
            )
        });

        return (
            <Swiper
            modules={[ Scrollbar, FreeMode, Mousewheel ]}
            scrollbar={{ draggable: true }}
            slidesPerView={1}
            breakpoints={{
                
                768: {
                  slidesPerView: 1,
                  
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