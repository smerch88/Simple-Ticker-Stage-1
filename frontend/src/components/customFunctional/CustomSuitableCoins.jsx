const SuitableCoins = (props) => {

    const {data} = props
    
    const listSuitableCoins =  data.map((elem, i) => {
        return (
            <li key={i}>{elem}</li>
        )
    })

    return (
        <ul className="crypto-list__suitable">
            {listSuitableCoins}
        </ul>
    )
}

export default SuitableCoins;