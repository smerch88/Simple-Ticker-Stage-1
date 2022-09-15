import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import AuthService from '../../services/AuthService';

import { registration } from '../../http/userAPI';

import "./_sign.scss"

export default function SignUp () {
    
    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: ""
        }
    })

     
    const changeInput = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const signUp = async (values) => {

        const response = await registration(values)
        console.log(response)
    }
     
    

    return (

        <Formik 
            initialValues={{
                username: '',
                email: '',
                password: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                             .min(2, 'Minimum 2 symbols')
                             .required('Is required'),
                email: Yup.string()
                            .email('Invalid email')
                            .required('Is required'),
                password: Yup.string()
                             .min(4, 'Minimum 4 symbols')
                             .required('Is required'),
            })}
            onSubmit={values => signUp(values)}
        >
            <Form className="sign">
                <div className="sign__name">Registration</div>
                <label htmlFor="username">Login</label>
                <Field
                    name="username"
                    id='username'
                    type="text"
                />
                <ErrorMessage className="sign__error" name='username' component='div'/>
                <label htmlFor="email">Email</label>
                <Field
                    name="email"
                    id='email'
                    type="text"
                />
                <ErrorMessage className="sign__error" name='email' component='div'/>
                <label htmlFor="password">Password</label>
                <Field
                    name="password"
                    id='password'
                    type="password"
                />
                <ErrorMessage className="sign__error" name='password' component='div'/>
                <button 
                    type='submit'
                    className="btn"
                >Register</button>
            </Form>
        </Formik> 
    )
}