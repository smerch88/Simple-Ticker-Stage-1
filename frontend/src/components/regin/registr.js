import React, { useState } from 'react'
import axios from 'axios';

import { DOMEN_SERVER, DOMEN_SITE } from './const';
import CustomersService from '../../services/CustomService';


export default function Register () {
    
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const newCustom = new CustomersService()
     
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

   
     
     
    const submitChackin = event => {
        event.preventDefault();

        newCustom.
        createCustomer({
            "username":  register.username,
            "email":  register.email,
            "password": register.password,
            "password2": register.password2
        })
        

        // if(!validator.isEmail(register.email)) {
        //     alert("You did not enter email")
        // } else if(register.password !== register.password2) {
        //     alert("Repeated password incorrectly")
        // } else if(!validator.isStrongPassword(register.password, {minSymbols: 0})) {
        //     alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        // } else {
        //     axios.post(DOMEN_SERVER + "/auth/registration/", {
        //         username: register.username,
        //         email: register.email,
        //         password: register.password,
        //     }).then(res => {
        //         if (res.data === true) {
        //             window.location.href = DOMEN_SITE + "/auth"
        //         } else {
        //             alert("There is already a user with this email")
        //         }
        //     }).catch(() => {
        //         alert("An error occurred on the server")
        //     })
        // }


        // axios.post(DOMEN_SERVER + "/auth/registration/", {
        //     username: register.username,
        //     email: register.email,
        //     password: register.password,
        // })

        
        // // .then(res => {
        // //     if (res.data === true) {
        // //         window.location.href = DOMEN_SITE + "/auth"
        // //     } else {
        // //         alert("There is already a user with this email")
        // //     }
        // // })
        // .catch(() => {
        //     alert("An error occurred on the server")
        // })



        
    }



    return (
        <div className="feedback__form">
            <div className="feedback__header">Registration</div>
            <form action="#" className="feed-form" onSubmit={submitChackin}>
                <input 
                    name="username"
                    id='username'
                    type="text" 
                    placeholder="username" 
                    value={register.usernamr}
                    onChange={changeInputRegister}/>
                <input 
                    name="email"
                    id='email'
                    type="text" 
                    placeholder="email" 
                    onChange={changeInputRegister}
                    formNoValidate
                    value={register.email}/>
                {/* <textarea name="" id="" cols="30" rows="10" placeholder="Comment"></textarea> */}
                <input
                    name="password" 
                    id='password1'
                    type="password" 
                    placeholder="password" 
                    onChange={changeInputRegister} 
                    value={register.password}/>
                <input
                    name="password2" 
                    id='password2'
                    type="password" 
                    placeholder="password2" 
                    onChange={changeInputRegister} 
                    value={register.password2}/>
                <button className="btn btn_long" type="submit">send</button>
            </form>
        </div>
    )
}