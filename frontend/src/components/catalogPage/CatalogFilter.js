
const CatalogFilter = (props) => {

    function renderProperty() {

        const filters = props.data.map((item, i) => {
            const {name, property} = item;

            return (
                <li key={i} className="catalog__filter">
                    <fieldset>
                        <legend className="catalog__filter-name">{name}:</legend>
                        <hr />
                        <div className="catalog__filter-wrap">
                            {
                                property.map((elem, i) => {
                                    return(
                                        <div  key={i} className="catalog__filter-property">
                                            <input 
                                                type="checkbox" 
                                                id={elem} 
                                                name={elem} 
                                                onChange={(e) => props.onChange(e, name)}
                                                className="catalog__filter-property__checkbox"/>
                                            <label htmlFor={elem}className="catalog__filter-property__name">{elem}</label>
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    </fieldset>
                </li>
            )
        })

        return (
            <>
                {filters}
            </>
        )
    }

    const elements = renderProperty()

    return (
        <div className="catalog__filters">
            <ul>
                {elements}
            </ul>
            <button className="catalog__filters__reset">Reset</button>
        </div>
    )
}

export default CatalogFilter;