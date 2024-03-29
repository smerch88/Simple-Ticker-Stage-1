import { useRef, useState } from "react";

const ItemOption = (props) => {

    const [selected, setSelected] = useState(false)

    const myRefs = useRef([])
 
    const showProperty = (id) => {    
        myRefs.current.forEach((item, i) => {
            if (id !== i) {
                item.classList.remove("ticker__option_active")
            }
        })
        myRefs.current[id].classList.toggle("ticker__option_active")
        
    }

    const changeProperty = (e, id) => {
        myRefs.current.forEach((item, i) => {
            const list =  myRefs.current[i].querySelectorAll('li')
            if (id === i) {
                const targetElem = myRefs.current[i].querySelector('.ticker__selected-property')
                targetElem.textContent = e.target.textContent
                
                list.forEach(n => n !== e.target ? 
                    n.classList.remove('active') : n.classList.add('active'))
                
            } 
            
        })
    }

    const renderOptions = () => {

        const option = props.options.map((item, i) => {
            const {name, property} = item;
            
            return (
                <div 
                key={i} 
                className="ticker__option" 
                ref={e => myRefs.current[i] = e}  
                onClick={(e) => showProperty(i)}>
                    <div className="ticker__config">
                        <span className="ticker__name-property">
                            {name}:  
                        </span>
                        <span className="ticker__selected-property">
                            {selected ? selected : property[0]}
                            </span>
                        <span className="ticker__arrow">
                            <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9 8M16.3415 1L8.3415 8" stroke="white"/>
                            </svg>
                        </span>
                    </div>
                    <hr />
                    <div className="ticker__list-property" onClick={e => e.stopPropagation()}>
                        <ul onClick={(e) => changeProperty(e, i)}>
                            {
                                property.map((elem, i) => {
                                   return i === 0 ?
                                    <li key={i}  className="active">{elem}</li>
                                    :
                                    <li key={i}>{elem}</li>  
                                })
                            }
                        </ul>
                    </div>
                </div>
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
        <>
            {items}
        </>
    )
}

export default ItemOption;