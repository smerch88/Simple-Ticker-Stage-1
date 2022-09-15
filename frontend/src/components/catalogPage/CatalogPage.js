import { useEffect, useState, useMemo } from "react";

import useProductService from "../../services/ProductService";
import CatalogFilter from "./CatalogFilter"
import CatalogPageList from "./CatalogPageList";


const CatalogPage = () => {

    

    const [filterList, setFilterList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState([]);
    // const [configuratio, setСonfiguratio] = useState([]);
    // const [color, setСolor] = useState([]);
    // const [housing, setHousing] = useState([]);
    // const [size, setSize] = useState([]);

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

    const onSizeChange = ({ target }, name) => {
        const value = target.getAttribute('name')
        const nameGroup = name.toLowerCase()


        // console.log(

        //     selectedFilter.length > 0 
        //     ?  selectedFilter.filter(item => {
        //         console.log(item[nameGroup].includes(value))
        //         return item[nameGroup].includes(value)
        //         ?   [...selectedFilter,
        //                 {[nameGroup]: item[nameGroup]=== undefined 
        //                 ? [value] : [...item[nameGroup], value]}
        //             ]
        //         :   [...selectedFilter,
        //                 {[nameGroup]:  item[nameGroup].filter(n => n !== value)}
        //             ] 
        //         }) 
        //     : [{[nameGroup]: [value]}]
            


        //     // selectedFilter.map(item => {
                

        //     //     return  (item[nameGroup] === undefined 
        //     //         || !item[nameGroup].includes(value) )
        //     //         ?   [...selectedFilter, 
        //     //                 {[nameGroup]: [...item[nameGroup], value]}
        //     //             ]  
        //     //         : item[nameGroup].filter(n => n !== value) 
        // )  
        
        // setSelectedFilter((selectedFilter[nameGroup] === undefined 
        //     || !selectedFilter[nameGroup].includes(value)) 
        // ? {...selectedFilter, 
        //     [nameGroup] : selectedFilter[nameGroup]=== undefined 
        //     ? [value] : [...selectedFilter[nameGroup], value]}
        // :   {
        //         ...selectedFilter,
        //         [nameGroup]:  selectedFilter[nameGroup].filter(n => n !== value)
        //     }
        // )
        
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
        //     case 'Housing':
        //         setHousing((!housing.includes(value))
        //         ? [ ...housing, value ]
        //         : housing.filter(n => n !== value));
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

    // const filteredProducts = productList.filter(n => (
    //     (!size.length || size.includes(n.size)) &&
    //     (!color.length || color.includes(n.color)) &&
    //     (!housing.length || housing.includes(n.housing)) &&
    //     (!configuratio.length || configuratio.includes(n.configuratio)) 
    //   ));
    
    const filteredProducts = (productList) => {
        const r =  productList.filter(n => {
            
            //     (!size.length || size.includes(n.size))

            

            let suitable = false;

            

            return suitable
            
        })

        return r
    };

    filteredProducts(productList)

    const changeFilter = (filterGroup, filterName) => {
        

        // if (selectedFilter[filterGroup] === undefined) {
        //     setSelectedFilter(
        //         {
        //             ...selectedFilter,
        //            [filterGroup] : [filterName]
        //         }
        //    )
        // } else {

        //     let repeat = false;

        //     selectedFilter[filterGroup].map((item, i) => {
        //         if (item === filterName) {
        //             repeat = true;
        //             selectedFilter[filterGroup].splice(i, 1)
        //             console.log(selectedFilter[filterGroup])
        //             return setSelectedFilter(
        //                 {
        //                     ...selectedFilter, [filterGroup] : [...selectedFilter[filterGroup]]
        //             })
        //         }
        //     })

        //     if (!repeat) {
        //         setSelectedFilter(selectedFilter => {
        //             return {
        //                 ...selectedFilter,
        //                 [filterGroup] : [...selectedFilter[filterGroup], filterName]
        //              }
        //         })
        //     }
        // }      
    }


    // const renderProductList = (selectedFilter, productList) => {
    //     if (selectedFilter.length <= 0) {
    //         return productList
    //     }

    //     const el = productList.filter((item, i) => {

    //         let suitable = false

    //         for (const key in selectedFilter) {
               
    //             suitable = selectedFilter[key].some(elem => {
    //                 return item.options.some(value => {
    //                         // console.log(`${value} === ${elem}`)
    //                         // console.log(value === elem ? true : false)
    //                         return elem === value
    //                     })
    //             })
                
    //             if (!suitable) {
    //                 break
    //             } 

    //             return suitable
    //         }

    //         return suitable
    //     })

    //     return el

    // }

    // const renderProductList = (selectedFilter) => {

    //     if (selectedFilter.length <= 0) {
    //         return productList
    //     }

    //     const el =  productList.filter((item, i) => {
    //         return selectedFilter.every((value) => {
    //             // console.log(`${value} === ${item.options[i]}`)
    //             // return value == selectedFilter[i]

    //             return item.options.some(elem => {
    //                 // console.log(`${value} === ${elem}`)
    //                 // console.log(value === elem ? true : false)
    //                 return value == elem
    //             })
    //        })
    //     //    return item.options.every((value) => {
    //     //         // console.log(`${value} === ${item.options[i]}`)
    //     //         // return value == selectedFilter[i]

    //     //         return selectedFilter.every(elem => {
    //     //             console.log(`${value} === ${elem}`)
    //     //             return value == elem
    //     //         })
    //     //    })
    //     })
    //     return el
    // }

    // // const renderProductList = () => {
    // //     const el =  productList.filter((item, i) => {
    // //        return item.options.some((value) => {
    // //             console.log(`${value} === ${selectedFilter[i]}`)
    // //             return value == selectedFilter[i]
    // //        })
    // //     })
    // //     console.log(el)
    // // }

    // // productList.forEach(element => console.log(element.price))

    const visible = filteredProducts(productList);

    

    return (
        <div className="catalog">
            <h2 className="title">Catalog</h2>
            <div className="container">
                <div className="catalog__wrap">
                    <CatalogFilter
                        // value={size}    
                        onChange={onSizeChange}
                        data={filterList}
                        changeFilter={changeFilter}
                    />
                    <CatalogPageList
                        data={productList}
                    />
                </div>
            </div>
        </div>
    )
}

export default CatalogPage