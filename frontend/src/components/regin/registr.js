import React, { useState } from 'react'
import axios from 'axios';

import AuthService from '../../services/AuthService';

import Alert from '../alert/Alert';
import { registration } from '../../http/userAPI';

export default function Register () {
    
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

     
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const signIn = async () => {
        const response = await registration(register.username, register.email, register.password)
        console.log(response)
    }
     
     
    const submitCheckin = event => {
        

        

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
        <>
            <div className="feedback__form">
                <div className="feedback__header">Registration</div>
                <form action="#" className="feed-form" >
                    <input
                        name="username"
                        id='username'
                        type="text"
                        placeholder="username"
                        value={register.username}
                        onChange={changeInputRegister}/>
                    <input
                        name="email"
                        id='email'
                        type="text"
                        placeholder="email"
                        onChange={changeInputRegister}
                        formNoValidate
                        value={register.email}/>
                    <input
                        name="password"
                        id='password'
                        type="password"
                        placeholder="password"
                        onChange={changeInputRegister}
                        value={register.password}/>
                </form>
                <button className="btn btn_long"
                    onClick={signIn}
                    >send</button>
            </div>
            
        </>
    )
}