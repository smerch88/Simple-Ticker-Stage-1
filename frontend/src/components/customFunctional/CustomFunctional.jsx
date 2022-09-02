import { useEffect, useState, useRef } from "react";
import SuitableCoins from "./CustomSuitableCoins";

const CustomFunctional = () => {

    const [search, setSearch] = useState('');
    const [suitableCoins, setSuitableCoins] = useState([])
    const [amountCoins, setAmountCoins] = useState([])
    const [visible, setVisible] = useState(true)
    const [allListCoins, setAllListCoins] = useState(() => {
        return [
            
        ]
    })

    

    useEffect(() => {
        Request();
        
        
    }, [search])



    useEffect(() => {
        document.addEventListener('click', visibleSuitable)
        
    }, [])

    const myRefs = useRef([]);

    const visibleSuitable = () => {
        console.log(myRefs.current)
        myRefs.current.forEach(item => {
            if (item !== null) {
                item.classList.remove('crypto-list__suitable_selected')
            }
        })
    }

    const onAddCoin = (i, value) => {
        setAllListCoins(allList => {

            allList.splice(i, 1, value)
            return [
                ...allList
            ]
        })

    }

    const onCreateCoin = () => {
        setAllListCoins(e => {
            return [
                ...e,
                ''
            ]
        })
    }

    const onRemoveCoin = (i) => {

        myRefs.current = []
        console.log(myRefs.current)
       
        setAllListCoins(allList => {
            
            allList.splice(i, 1)
            return [
                ...allList
            ]
        })
        console.log(allListCoins)
        
        
        

        
    }

    const refD = (i) => {
        myRefs.current.splice(i, 1)
        return myRefs.current
    }

    const req = async () => {
        const data =  await fetch('./cryptoList.json')
        .then(response => {return response.json()})
        .then(res => res.cryptoList)
    }

    
    const Request = async () => {

        const data =  await fetch('./cryptoList.json')
        .then(response => {return response.json()})
        .then(res => res.cryptoList)
    
        
        const suitableCoins = data.filter(elem => elem.includes(search))   
        setSuitableCoins(suitableCoins)
        
        

    }

    const onFocusInput = (id, e) => {
        e.stopPropagation()
        setSearch('')
        
        console.log(myRefs.current)
        // console.log(myRefs.current[id])
        myRefs.current.forEach(item => {
            if (item !== null) {
                item.classList.remove('crypto-list__suitable_selected')
            }
        })
        myRefs.current[id].classList.add('crypto-list__suitable_selected')


    }


    const renderListCoins = (amount) => {

        console.log(allListCoins)

        const listCoins = amount.map((elem, i) => {

            
            
            return (
                <li key={i} className="crypto-list__name-coins">
                    <div className="crypto-list__number">{i + 1}</div>
                    <input 
                        name={i}
                        className="crypto-list__search"
                        type="text" 
                        autoComplete="off"
                        placeholder="Enter the name coin"
                        value={allListCoins[i]}
                        onClick={(e) => onFocusInput(i, e)}
                        onChange={(e) => {setSearch( e.target.value); 
                            onAddCoin(e.target.name, e.target.value)}}
                    />
                    <span 
                    className="crypto-list__hide"
                    onClick={() => {onRemoveCoin(i)}}
                    ></span>
                    <div 
                        className="crypto-list__suitable"
                        ref={e => myRefs.current[i] = e}
                    >
                        <SuitableCoins 
                            data={suitableCoins}
                            changeCoin={(e) => onAddCoin(i, e.target.textContent)}
                        />
                    </div>
                </li>
            )
        })
        
        

        return (
            <ul>
                {listCoins}
            </ul>
        )
    }
    
    
    const coins = renderListCoins(allListCoins)

    return (
        <div className="custom__functional">
            <h3 className="custom__title">Functional</h3>
            <div className="crypto-list">
                <div className="crypto-list__item">
                    {coins}
                    <div className="crypto-list__add-item"
                        onClick={onCreateCoin}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default CustomFunctional;