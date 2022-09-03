import { useEffect, useState } from "react";
import Ticker from "../../resourses/img/thumbnail.jpg";
import axios from 'axios';
import useProductService from "../../services/ProductService";
import CatalogItem from "../catalogItem/CatalogItem";


const Catalog = () => {

    const [productList, setProductList] = useState([])

    const {getAllProducts} = useProductService()
    
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
    
    

    const [showProp, setShowProp] = useState(false)

    const showProperty = () => {
        setShowProp(showProp => !showProp)
    }

    return (
        <div className="catalog">
            <h2 className="title" onClick={console.log(productList)}>Catalog</h2>
            <div className="container">
                <div className="catalog__wrapper">
                    <CatalogItem
                        data={productList}
                    />
                </div>
            </div>
            <div className="marquee">
                <div className="marquee__inner">
                    BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN BITCOIN ALTCOIN TOKEN
                </div>
            </div>
        </div>
    )
}

export default Catalog;