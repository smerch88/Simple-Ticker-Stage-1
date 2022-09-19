import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Mousewheel } from 'swiper';
import useNewsService from "../../services/NewsService"
import NewsIcon from "../../resourses/img/news.jpg"


const NewsList = () => {

    const [newsList, setNewsList] = useState([])

    const { getAllNews } = useNewsService();
    
    useEffect(() => {
        request()
        
    }, [])

    const request = () => {
        getAllNews()
        .then(res => setNewsList([...res]))
    }


    
    
    
    const renderNews = () => {

        const elements = newsList.map((item, i) => {

            const { title, thumbnail, description } = item

            let descr = description

            if (window.matchMedia('(max-width: 576px)').matches) { 
        
                if(descr.length > 50) {
                    descr = `${descr.slice(0, 80)} `
                }
            }

            return (
                <SwiperSlide key={i}>
                    <div  className="news__item">
                        <div className="news__thumbnail">
                            <img src={NewsIcon} alt=""/>
                        </div>
                        <div className="news__text">
                            <h3 className="news__title">{title}</h3>
                            <div className="news__descr">
                                {descr}<a href="#">...show more</a>
                                </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })

        return (
            <Swiper
            modules={[ Scrollbar, FreeMode, Mousewheel ]}
            scrollbar={{ draggable: true }}
            freeMode={true}
            spaceBetween={40}
            slidesPerGroup={1}
            slidesPerView={'auto'}
            mousewheel={true}
            centeredSlides={true}
            breakpoints={{
                1281: {
                    centeredSlides: false,
                    freeMode: false
                }
            }}
            >
                {elements}
            </Swiper>
        ) 
    }

    const NewsItems = renderNews()

    return (
        <>
            {NewsItems}
        </>
    )
}

export default NewsList