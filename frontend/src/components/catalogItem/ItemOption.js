import { useState } from "react";

const ItemOption = () => {

    const [showProp, setShowProp] = useState(false)

    const showProperty = () => {
        setShowProp(showProp => !showProp)
    }

    return (
        <div className="ticker__option ">
            <div 
            className={showProp ? "ticker__config ticker__config_active" : "ticker__config"}>
                <span className="ticker__name-property">
                    Configuration:  
                </span>
                <span className="ticker__property">
                    <ul>
                        <li className='change'>Blue</li>
                        <li 
                        className={showProp ? "list-property active" : "list-property"}>
                            <ul>
                                <li className="active">Blue</li>
                                <li>White</li>
                                <li>Gold</li>
                                <li>Red</li>
                                <li>Black</li>
                                <li>Purple</li>
                                <li>Green</li>  
                            </ul>
                            <div className="ticker__property-change"></div>
                        </li>
                    </ul>
                </span>
                <span className="ticker__arrow" onClick={showProperty}>
                    <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                    </svg>
                </span>
            </div>
        </div>
    )
}

export default ItemOption;