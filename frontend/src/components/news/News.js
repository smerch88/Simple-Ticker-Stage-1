import NewsIcon from "../../resourses/img/news.jpg"

const News = () => {
    return (
        <div className="container">
            <h2 className="title">News</h2>
            
            <div className="news">
                <div className="news__show-all"><a href="#">show all news</a></div>
                <div className="news__wrapper">
                    <div className="news__item">
                        <img src={NewsIcon} alt="" className="news__thumbnail" />
                        <div className="news__text">
                            <h3 className="news__title">Bitcoin "Endangered"</h3>
                            <div className="news__descr">
                                The representative of the Bitcoin Core team Matt Corallo called the maximalists of the cryptocurrency "an endangered species"... <a href="#">show more</a>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="slider">
                    <div className="line"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </div>
    )
}

export default News;