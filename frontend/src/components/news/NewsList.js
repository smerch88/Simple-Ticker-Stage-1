import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode, Mousewheel } from 'swiper';
import useNewsService from "../../services/NewsService"
import NewsIcon from "../../resourses/img/news.jpg"


const NewsList = () => {

    const [newsList, setNewsList] = useState([])

    const { getAllNews } = useNewsService();
    
    useEffect(() => {
        Request()
        
    }, [])

    const Request = () => {
        getAllNews()
        .then(res => setNewsList([...res]))
    }
    

    
    const renderNews = () => {

        const elements = newsList.map((item, i) => {

            const { title, thumbnail, description } = item

            return (
                <SwiperSlide key={i}>
                    <div  className="news__item">
                        <img src={NewsIcon} alt="" className="news__thumbnail" />
                        <div className="news__text">
                            <h3 className="news__title">{title}</h3>
                            <div className="news__descr">
                                {description} <a href="#">show more</a>
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
            slidesPerGroup={1}
            slidesPerView={'auto'}
            mousewheel={true}
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