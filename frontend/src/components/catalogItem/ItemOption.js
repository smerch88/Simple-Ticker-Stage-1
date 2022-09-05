import { useEffect, useState, useRef } from "react";
import useProductService from "../../services/ProductService";

const ItemOption = (props) => {

    const [optionList, setOptionList] = useState([]) 
    const [showProp, setShowProp] = useState(false)

    const myRefs = useRef([])

    const {getAllProducts} = useProductService()

   
    const showProperty = (id) => {

        
        
        myRefs.current.forEach((item, i) => {
            if (id !== i) {
                item.classList.remove("ticker__option_active")
            }
        })
        myRefs.current[id].classList.toggle("ticker__option_active")

    }


    

    const Request = () => {
        getAllProducts()
        .then(onOptionList)
    }
    
    const onOptionList = (option) => {
        setOptionList(option)
        console.log(optionList)
    }
    


    const renderOptions = () => {


        const option = props.options.map((item, i) => {

            const {name, property} = item;

            const renderProperty = (property) => {

                const propertys = property.map((elem, i) => {

                    if(i === 0) {
                        return (
                            <li key={i} className="active">{elem}</li>
                        )
                    }

                    return (
                        <>
                            <li key={i}>{elem}</li>
                        </>
                    )
                })


                return (
                    <>
                       {propertys} 
                    </>
                )
            }
            console.log(property)
            const listProperty = renderProperty(property)
            
            return (
                <div key={i} className="ticker__option" ref={e => myRefs.current[i] = e}>
                    <div className="ticker__config">
                        <span className="ticker__name-property">
                            {name}:  
                        </span>
                        <span className="ticker__selected-property">{property[0]}</span>
                        <span 
                        className="ticker__arrow" 
                        onClick={() => showProperty(i)}>
                            <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                            </svg>
                        </span>
                    </div>
                    <hr />
                    <div className="ticker__list-property"
                        >
                        <ul>
                            {listProperty}
                        </ul>
                    </div>
                </div>
                // <div key={i} className="ticker__option ">
                //     <div 
                //     className="ticker__config"
                //     ref={e => myRefs.current[i] = e}
                //     >
                //         <div className="ticker__property-change"></div>
                //         <span className="ticker__name-property">
                //             {name}:  
                //         </span>
                //         <span className="ticker__property">
                //             <ul>
                //                 <li className='change'>{property[0]}</li>
                //                 <li 
                //                 className="list-property"
                //                 >
                //                     {listProperty}
                                    
                //                 </li>
                //             </ul>
                //         </span>
                //         <span className="ticker__arrow" 
                        
                //         onClick={() => showProperty(i)}>
                //             <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                //                 <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                //             </svg>
                //         </span>
                //     </div>
                // </div>
            )
        })

        

        return (
            <>
                {option}
            </>
        )
    }

    const items = renderOptions()

    return (
        <div className="ticker__options">
            {items}
        </div>
    )
}

export default ItemOption;