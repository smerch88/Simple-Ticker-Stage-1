import { useEffect, useState } from "react";

import useProductService from "../../services/ProductService";
import CatalogFilter from "./CatalogFilter"
import CatalogPageList from "./CatalogPageList";


const CatalogPage = () => {
    const [filterList, setFilterList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState([]);

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

    const changeFilter = (filter) => {
        let repeat = false;

        selectedFilter.map((item, i) => {
            if (item === filter) {
                repeat = true;
                selectedFilter.splice(i, 1)
                return setSelectedFilter([...selectedFilter])
            }
        })

        if (!repeat) {
            setSelectedFilter(selectedFilter => ([...selectedFilter, filter]))
        }
        
    }

    const renderProductList = (selectedFilter) => {
        const el =  productList.filter((item, i) => {
           return item.options.some((value) => {
                // console.log(`${value} === ${item.options[i]}`)
                // return value == selectedFilter[i]

                return selectedFilter.some(elem => {
                    console.log(`${value} === ${elem}`)
                    return value == elem
                })
           })
        })
        return el
    }

    // const renderProductList = () => {
    //     const el =  productList.filter((item, i) => {
    //        return item.options.some((value) => {
    //             console.log(`${value} === ${selectedFilter[i]}`)
    //             return value == selectedFilter[i]
    //        })
    //     })
    //     console.log(el)
    // }

    // productList.forEach(element => console.log(element.price))

    const visible = renderProductList(selectedFilter);

    
    return (
        <div className="catalog">
            <h2 className="title">Catalog</h2>
            <div className="container">
                <div className="catalog__wrap">
                    <CatalogFilter
                        data={filterList}
                        changeFilter={changeFilter}
                    />
                    <CatalogPageList
                        data={visible}
                    />
                </div>
            </div>
        </div>
    )
}

export default CatalogPage