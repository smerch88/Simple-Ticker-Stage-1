import { NavLink } from "react-router-dom"


const Location = ({ location }) => {
    
    return (
        <div className="container">
            <div className="location">
                <NavLink to='/'>Home</NavLink>
                {
                    location.map((el, i) => {
                        return (
                            <span key={i}>
                                <span className="location__border">/</span>
                                <NavLink 
                                    end
                                    to={el}
                                    style={({ isActive }) => ({'color': isActive ? '#7251AE' : "#C1B1DC"})}
                                >
                                    {el.charAt(1).toUpperCase() + el.slice(2)}
                                </NavLink>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Location;