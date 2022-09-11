import React, { useState } from 'react'
import axios from 'axios';

import { DOMEN_SERVER, DOMEN_SITE } from './const';
import AuthService from '../../services/AuthService';

import Alert from '../alert/Alert';

export default function Register () {
    
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const {createPerson} = AuthService();

    const [errorMessage, setErrorMessage] = useState(null);
     
    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

   
     
     
    const submitCheckin = event => {
        event.preventDefault();


        createPerson(register)

        setErrorMessage(null);
        axios({
            method: 'POST',
            url: 'https://www.simpleticker.online/auth/users/',
            data: {
                "username":  register.username,
                "email":  register.email,
                "password": register.password
            }
        }).then(res => {
            console.log(res)
        }).catch(error => {
            setErrorMessage(error.response.data[Object.keys(error.response.data)[0]][0]);
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
        <>
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
                        id='password'
                        type="password"
                        placeholder="password"
                        onChange={changeInputRegister}
                        value={register.password}/>

                    <button className="btn btn_long" type="submit">send</button>
                </form>
            </div>
            { errorMessage && <Alert message={errorMessage}/> }
        </>
    )
}