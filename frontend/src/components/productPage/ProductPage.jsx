import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useProductService from "../../services/ProductService";
import Location from "../location/Location";

import Ticker from "../../resourses/img/thumbnail.jpg";

const ProductPage = () => {
    const { productId } = useParams()
    console.log(productId)
    const [product, setProduct] = useState([]);

    const { getProducts } = useProductService();

    useEffect(() => {
        request()
    }, [])

    const request = () => {

        getProducts()
            .then(res => onLoadedProduct(res[productId - 1]))
    }


    const onLoadedProduct = (list) => {

        setProduct(list)
        console.log(list)
    }

    const { name, price, color, communication, size, configuratio } = product;

    return (
        <div className="product-page">
            <Location
                location={['/catalog', `/${name}`]}
            />
            <h2 className="title">{name}</h2>
            <div className="container">
                <div className="product-page__wrapper">
                    <div className="product-page__thumbnail">
                        <img src={Ticker} alt={name} />
                    </div>
                    <div className="product-page__descr">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus diam parturient metus eget eu massa. </p>
                        <div className="product-page__inner">
                            <div className="product-page__price">${price}</div>
                            <button className="btn">Buy</button>
                        </div>
                        <div className="characteristic">
                            <div className="characteristic__inner">
                                <span className="characteristic__name">
                                    Configuratio:</span>
                                <span className="characteristic__property">{configuratio}</span>
                            </div>
                            <div className="characteristic__inner">
                                <span className="characteristic__name">
                                    Color:</span>
                                <span className="characteristic__property">{color}</span>
                            </div>
                            <div className="characteristic__inner">
                                <span className="characteristic__name">
                                    Communicate:</span>
                                <span className="characteristic__property">{communication}</span>
                            </div>
                            <div className="characteristic__inner">
                                <span className="characteristic__name">
                                    Size:</span>
                                <span className="characteristic__property">{size}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-page__description">
                    <h3 className="product-page__description__title">
                        Description
                    </h3>
                    <div className="product-page__description__inner">
                        Screen diagonal:<span>10.3"</span>
                    </div>
                    <div className="product-page__description__inner">
                        RAM:<span>64 GB</span>
                    </div>
                    <div className="product-page__description__inner">
                        Screen diagonal:<span>4 GB</span>
                    </div>
                    <div className="product-page__description__inner">
                        Android:<span>9.0</span>
                    </div>
                    <div className="product-page__description__inner">
                        Built-in memory:<span>64 GB</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;