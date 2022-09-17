import { useEffect, useState } from "react";

import useProductService from "../../services/ProductService";
import CatalogFilter from "./CatalogFilter"
import CatalogPageList from "./CatalogPageList";


const CatalogPage = () => {

    const [filterList, setFilterList] = useState([]);
    const [productList, setProductList] = useState([]);

    const [filter, setFilter] = useState([])

    const [configuratio, setСonfiguratio] = useState([]);
    const [color, setСolor] = useState([]);
    const [communication, setCommunication] = useState([]);
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
        const value = target.getAttribute('name');
        const nameGroup = name.toLowerCase();

        let index = null;
        let isFilter = filter.some((elem, i) => {
            index = i
           return Object.keys(elem)[0].includes(nameGroup)
        })
        
        isFilter ?
            setFilter(filter => {
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
        : setFilter([...filter, {[nameGroup]: [value]}])
        
        
    
          
        // switch (name) {
        //     case 'Size':
        //         setSize((!size.includes(value))
        //         ? [ ...size, value ]
        //         : size.filter(n => n !== value));
        //         break;

        //     case 'Color':
        //         setСolor((!color.includes(value))
        //         ? [ ...color, value ]
        //         : color.filter(n => n !== value));
        //         break;
        //     case 'Communication':
        //         setCommunication((!communication.includes(value))
        //         ? [ ...communication, value ]
        //         : communication.filter(n => n !== value));
        //         break;
        //     case 'Configuratio':
        //         setСonfiguratio((!configuratio.includes(value))
        //         ? [ ...configuratio, value ]
        //         : configuratio.filter(n => n !== value));
        //         break;

        //     default:
        //         break;
        // }
    }


    // filter.map(n => {
    //     const key = Object.keys(n)[0]
    //     console.log(key)
    //     console.log(Object.values(n)[0])
    // })

    const filteredProducts = (productList) => { 
        const b = productList.filter(t => {

            const v = filter.map(n => {
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

            if (v.every(el => el === true)) {
                return true
            } else {
                return false
            }
            // (!size.length || size.includes(n.size)) &&
            // (!color.length || color.includes(n.color)) &&
            // (!communication.length || communication.includes(n.communication)) &&
            // (!configuratio.length || configuratio.includes(n.configuratio)) 
        })

        return b
    };

    const visible = filteredProducts(productList)
    // const filteredProducts = productList.filter(n => (
    //     (!size.length || size.includes(n.size)) &&
    //     (!color.length || color.includes(n.color)) &&
    //     (!communication.length || communication.includes(n.communication)) &&
    //     (!configuratio.length || configuratio.includes(n.configuratio)) 
    // ));

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
                        data={visible}
                    />
                </div>
            </div>
        </div>
    )
}

export default CatalogPage