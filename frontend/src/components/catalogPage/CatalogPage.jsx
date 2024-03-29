import { useEffect, useState } from "react";

import useProductService from "../../services/ProductService";
import Location from "../location/Location";
import CatalogFilter from "./CatalogFilter"
import CatalogPageList from "./CatalogPageList";


const CatalogPage = () => {
    const [filterList, setFilterList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [sortTarget, setSortTarget] = useState(false);
    const [showModal, setShowModal] = useState(false)

    const {getAllFilters, getProducts} = useProductService();
    
    useEffect(() => {
        request()
    }, [])

    const request = () => {
        getAllFilters()
        .then(res => onLoadedFilters(res));

        getProducts()
        .then(res => onLoadedProduct(res))
    }

    const onLoadedFilters = (list) => {
        setFilterList([...list])
    }

    const onLoadedProduct = (list) => {
        const idList = list.map((el, i) => ({...el, id: i+1}))
        setProductList(idList)
    }

    const onFilterChange = ({ target }, name) => {
        const value = target.getAttribute('name');
        const nameGroup = name.toLowerCase();

        let index = null;
        let isFilter = selectedFilter.some((elem, i) => {
            index = i
           return Object.keys(elem)[0].includes(nameGroup)
        })
        
        isFilter ?
        setSelectedFilter(filter => {
                const arr = filter.splice(index, 1)
                const prevArr = Object.values(arr[0])[0]
                return [
                    ...filter,
                    {[nameGroup]: prevArr.includes(value) ?
                        prevArr.filter(n => n !== value)
                        : [...prevArr, value]
                    }
                ]
            })
        : setSelectedFilter([...selectedFilter, {[nameGroup]: [value]}])
    }

    const filteredPrice = (list, target) => {
        switch (target) {
            case 'low':
                return list.sort((a, b) => a.price - b.price);
            case 'high':
                return list.sort((a, b) => b.price - a.price);
            default:
                return list
        }       
    }

    const filteredProducts = (productList) => { 
        return productList.filter(t => {

            const isSuitable = selectedFilter.map(n => {
                let suitable = false
                let key = Object.keys(n)[0]
                const arr = Object.values(n)[0]
  
                if (arr.includes(t[key]) || arr.length === 0) {
                    suitable = true
                } else {
                    suitable = false
                }

                return suitable
            })

            if (isSuitable.every(el => el === true)) {
                return true
            } else {
                return false
            }
        })
    };


    

    const visibleProducts = filteredPrice(filteredProducts(productList), sortTarget)

    return (
        <div className="catalog">
            <Location
                location={['/catalog']}
            />
            <h2 className="title">Catalog</h2>
            <div className="container">
                <div className="catalog__wrap">
                        {showModal ?
                            <div className="catalog__bg-modal">
                                <div className="catalog__modal-filter">
                                <div 
                                onClick={() => setShowModal(false)} 
                                className="modal__close">&times;</div>
                                <CatalogFilter 
                                    onChange={onFilterChange}
                                    data={filterList}
                                    value={selectedFilter}
                                    visibleProducts={visibleProducts}
                                    reset={() => setSelectedFilter([])}
                                />
                                </div>
                            </div>

                            : <CatalogFilter 
                                onChange={onFilterChange}
                                data={filterList}
                                value={selectedFilter}
                                visibleProducts={visibleProducts}
                                reset={() => setSelectedFilter([])}
                            />
                            
                        }
                    <div className="catalog__wrap-list">
                        <div className="catalog__sort">
                            <span className="catalog__sort__name">Show:</span>
                            
                                <span>
                                    <span 
                                        className={sortTarget === 'low' ?
                                        "catalog__sort__targets active" : "catalog__sort__targets"
                                        }
                                        onClick={() => setSortTarget('low')}
                                    >lowest to highest price</span>
                                    <span 
                                        className={sortTarget === 'high' ?
                                            "catalog__sort__targets active" : "catalog__sort__targets"
                                        }
                                        onClick={() => setSortTarget('high')}
                                    >highest to lowest price</span>
                                </span>
                                <button onClick={() => setSortTarget(false)} className="catalog__filters__reset catalog__sort__reset">Reset</button>
                        </div>
                        <button className="catalog__btn-filter" onClick={() => setShowModal(true)}>
                            Filters
                        </button>
                        <CatalogPageList data={visibleProducts}/>                   
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CatalogPage