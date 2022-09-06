import NewsList from "./NewsList";

const News = () => {




    return (
        <>
            <h2 className="title">News</h2>
            <div className="news">
                <div className="news__show-all"><a href="#">show all news</a></div>
                <div className="news__wrapper">
                            <NewsList/> 
 
                </div>
            </div>
        </>
    )
}

export default News;