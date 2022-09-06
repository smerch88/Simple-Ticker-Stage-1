import { useEffect, useState } from "react";
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

    return (
        <div className="catalog">
            <h2 className="title">Catalog</h2>
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