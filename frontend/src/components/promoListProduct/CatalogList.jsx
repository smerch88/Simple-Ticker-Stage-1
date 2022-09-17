import { useEffect, useState } from "react";

import useProductService from "../../services/ProductService";
import CatalogItem from "./catalogItem/CatalogItem";


const Catalog = () => {
    const [productList, setProductList] = useState([]);
    const {getAllProducts} = useProductService();
    
    useEffect(() => {
        Request()
    }, [])

    const Request = () => {
        getAllProducts()
        .then(res => onLoadedList(res))
    }

    const onLoadedList = (list) => {
        setProductList([...list])
    }

    return (
        <>
            <h2 className="title">Catalog</h2>
            <div className="container">
                <div className="catalog__wrapper">
                    <CatalogItem
                        data={productList}
                    />
                </div>
            </div>
        </>
            
        
    )
}

export default Catalog;