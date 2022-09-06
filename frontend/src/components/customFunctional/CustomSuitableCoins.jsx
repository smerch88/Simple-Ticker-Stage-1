const SuitableCoins = (props) => {

    const {data, changeCoin} = props

    const handler = (e) => {
        
        changeCoin(e)
    }
    
    const listSuitableCoins =  data.map((elem, i) => {
        return (
            <li 
                
                key={i}
                onClick={(e) => handler(e)}
            >{elem}</li>
        )
    })

    return (
        <ul>
            {listSuitableCoins}
        </ul>
    )
}

export default SuitableCoins;