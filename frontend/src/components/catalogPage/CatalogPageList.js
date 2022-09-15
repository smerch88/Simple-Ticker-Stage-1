import Ticker from "../../resourses/img/thumbnail.jpg";

const CatalogPageList = (props) => {

    function renderItem () {
        

        const items = props.data.map((item, i) => {

            const {name, price,configuratio, color, housing, size} = item

            return (
                <div key={i} className="catalog__item">
                    <div className="catalog__item__thumbnail">
                        <img src={Ticker} alt="Ticker" />
                    </div>
                    <div className="catalog__item__name">{name}</div>
                    <div className="catalog__item__price">${price}</div>
                    <div className="catalog__item__price">{configuratio}</div>
                    <div className="catalog__item__price">{color}</div>
                    <div className="catalog__item__price">{housing}</div>
                    <div className="catalog__item__price">{size}</div>
                    <div className="catalog__item__btn">
                        <button className="btn">Buy</button>
                    </div>
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