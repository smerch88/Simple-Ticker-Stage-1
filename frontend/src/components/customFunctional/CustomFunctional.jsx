import { useEffect, useState, useRef } from "react";
import SuitableCoins from "./CustomSuitableCoins";

const CustomFunctional = () => {

    const [search, setSearch] = useState('');
    const [suitableCoins, setSuitableCoins] = useState([])
    const [amountCoins, setAmountCoins] = useState([])

    const [allListCoins, setAllListCoins] = useState(() => {
        return {
           0: '',
           1: '',
           2: '',
           3: '',
           4: '',
           5: '',
           6: '',
           7: '',
           8: '',
           9: '',
        }
    })

    

    useEffect(() => {
        Request();

        document.addEventListener('click', () => {
            myRefs.current.forEach(item => {
                item.classList.remove('crypto-list__suitable_selected')
            })
        })
        
    }, [search])

    const myRefs = useRef([]);

    const onAddCoin = (i, value) => {
        setAllListCoins(allList => {
            return {
                ...allList,
                [i] : value
            }
        })
    }

    const onCreateCoin = () => {
        setAmountCoins(e => {
            return [
                ...e,
                e.length
            ]
        })

    }

    const onRemoveCoin = (i) => {
        
        // setAmountCoins(e => {
        //     return e.filter((item) =>  item !== i)
        // })
        console.log(amountCoins)

        setAllListCoins(e => {
            return {
                ...e, 
                [i]: ''
            }
        })
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
    
        if (1) {
           const suitableCoins = data.filter(elem => elem.includes(search))   
           setSuitableCoins(suitableCoins)
        }
        console.log(suitableCoins)

    }

    const onFocusInput = (id, e) => {
        e.stopPropagation()
        setSearch('')
        myRefs.current.forEach(item => {
            item.classList.remove('crypto-list__suitable_selected')
        })
        myRefs.current[id].classList.add('crypto-list__suitable_selected')


    }


    const renderListCoins = (amount) => {

        console.log(amount)

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
                    onClick={() => onRemoveCoin(i)}
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
    
    
    const coins = renderListCoins(amountCoins)

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