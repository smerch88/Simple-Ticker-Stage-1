
const CatalogFilter = ({data, value, onChange, visibleProducts, reset}) => {

    function renderProperty() {

        let suitableFilter = [];
        
        const filters = data.map((item, i) => {
            const {name, property} = item;
              
            visibleProducts.forEach(el => {
                const nameFilter = el[name.toLowerCase()]
                 
                if (!suitableFilter.includes(nameFilter)) {
                    return suitableFilter = [
                        ...suitableFilter,
                        nameFilter
                    ]
                }
            });
            
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
                                                disabled={!suitableFilter.includes(elem)}
                                                onChange={(e) => onChange(e, name)}
                                                checked={
                                                    value.some(el => 
                                                    Object.values(el)[0].includes(elem))
                                                }
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
            <button 
            className="catalog__filters__reset"
            onClick={reset}
            >Reset</button>
        </div>
    )
}

export default CatalogFilter;