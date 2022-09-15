import { useEffect, useState, useMemo } from "react";

import useProductService from "../../services/ProductService";
import CatalogFilter from "./CatalogFilter"
import CatalogPageList from "./CatalogPageList";


const CatalogPage = () => {

    const [filterList, setFilterList] = useState([]);
    const [productList, setProductList] = useState([]);

    const [configuratio, setСonfiguratio] = useState([]);
    const [color, setСolor] = useState([]);
    const [housing, setHousing] = useState([]);
    const [size, setSize] = useState([]);

    const {getAllFilters, getProducts} = useProductService();
    
    useEffect(() => {
        Request()
    }, [])

    const Request = () => {
        getAllFilters()
        .then(res => onLoadedFilters(res));

        getProducts()
        .then(res => onLoadedProduct(res))
    }

    const onLoadedFilters = (list) => {
        setFilterList([...list])
    }

    const onLoadedProduct = (list) => {
        setProductList([...list])
    }

    const onFilterChange = ({ target }, name) => {
        const value = target.getAttribute('name')   
        
        switch (name) {
            case 'Size':
                setSize((!size.includes(value))
                ? [ ...size, value ]
                : size.filter(n => n !== value));
                break;

            case 'Color':
                setСolor((!color.includes(value))
                ? [ ...color, value ]
                : color.filter(n => n !== value));
                break;
            case 'Housing':
                setHousing((!housing.includes(value))
                ? [ ...housing, value ]
                : housing.filter(n => n !== value));
                break;
            case 'Configuratio':
                setСonfiguratio((!configuratio.includes(value))
                ? [ ...configuratio, value ]
                : configuratio.filter(n => n !== value));
                break;

            default:
                break;
        }
    }

    const filteredProducts = productList.filter(n => (
        (!size.length || size.includes(n.size)) &&
        (!color.length || color.includes(n.color)) &&
        (!housing.length || housing.includes(n.housing)) &&
        (!configuratio.length || configuratio.includes(n.configuratio)) 
      ));

    return (
        <div className="catalog">
            <h2 className="title">Catalog</h2>
            <div className="container">
                <div className="catalog__wrap">
                    <CatalogFilter 
                        onChange={onFilterChange}
                        data={filterList}
                    />
                    <CatalogPageList
                        data={filteredProducts}
                    />
                </div>
            </div>
        </div>
    )
}

export default CatalogPage