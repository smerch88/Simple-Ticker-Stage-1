import { useEffect, useState, useRef } from "react";
import SuitableCoins from "./CustomSuitableCoins";

const CustomFunctional = () => {

    const [search, setSearch] = useState(['']);
    const [suitableCoins, setSuitableCoins] = useState([])
    const [amountCoins, setAmountCoins] = useState([1, 1, 1])

    useEffect(() => {
        Request()
    }, [search])

    const myRefs = useRef([])


    const onFocusInput = (id) => {
        myRefs.current.forEach(item => {
            item.classList.remove('coins_selected')
        })
        myRefs.current[id].classList.add('coins_selected')
    }

    
    const Request = async () => {

        const data =  await fetch('./cryptoList.json')
        .then(response => {return response.json()})
        .then(res => res.cryptoList)
    
        if (search !== '') {
           const suitableCoins = data.filter(elem => elem.includes(search))   
           setSuitableCoins(suitableCoins)
        }
        console.log(suitableCoins)

    }


    const listCoins = (amount) => {

        const coins = amount.map((elem, i) => {
            return (
                <li key={i}>
                    <input 
                    className="custom__search"
                    type="text" 
                    value={search[i]}
                    onChange={(e) => setSearch(e.target[i] = e.target.value)}
                    onClick={() => onFocusInput(i)}
                    />
                    <div 
                    className="suitable__coins"
                    ref={e => myRefs.current[i] = e}
                    >
                        <SuitableCoins 
                        data={suitableCoins}
                        search={search}
                        />
                    </div>
                </li>
            )
        })

        return (
            <ul>
                {coins}
            </ul>
        )
    }
    
    
    const coins = listCoins(amountCoins)

    return (
        <div className="custom__functional">
            <div className="functional__title">Functional</div>
            <div className="crypto-list">
                <div className="crypto-list__item">
                    <div className="crypto-list__name-coin">
                        {coins}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomFunctional;