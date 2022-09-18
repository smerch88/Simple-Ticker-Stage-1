import { useLocation, useNavigate } from "react-router-dom"


const Location = () => {
    const location = useLocation()
    console.log(location)

    return (
        <div className="container">
            <div className="location">
                <a href="">Home</a>
                <a href="">/Catalog</a>
            </div>
        </div>
    )
}

export default Location;