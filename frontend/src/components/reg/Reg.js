import { useState } from "react";

const Reg = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');

    const onName = (e) => {
        setName(e.target.value)
    }

    const onSurname = (e) => {
        setSurname(e.target.value)
    }

    const onPassword = (e) => {
        setPassword(e.target.value)
    }


    return (
        <div className="feedback__form">
            <div className="feedback__header">Registration</div>
            <form action="#" className="feed-form">
                <input 
                    name="login"
                    type="text" 
                    placeholder="Name" 
                    onChange={(e)=>onName(e)} 
                    value={name}/>
                <input 
                    name="surname"
                    type="text" 
                    placeholder="Surname" 
                    onChange={(e)=>onSurname(e)} 
                    value={surname}/>
                {/* <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea> */}
                <input
                    name="password" 
                    type="password" 
                    placeholder="password" 
                    onChange={(e)=>onPassword(e)} 
                    value={password}/>
                <button className="btn btn_long" type="submit">send</button>
            </form>
        </div>
    )
}



export default Reg;