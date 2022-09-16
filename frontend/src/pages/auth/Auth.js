import { Formik, Form, Field, ErrorMessage} from 'formik';
import { NavLink, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import { registration, login } from '../../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { jwtDecode, jwtVerify, resignJwt } from 'jwt-js-decode';
import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import "./_sign.scss"


const Auth = observer (() =>{

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const signUp = async (values) => {
        const response = await registration(values)
        if (response.status === 200) {
          return console.log('Успішно', response)
        }
        return console.log('Неуспішно', response)
    }

    const signIn = async (values) => {
        const response = await login(values)
        const tok = await response.data.auth_token
        console.log(tok)
        console.log(jwt_decode(tok))
        let jwt = jwtDecode(tok);
        console.log(jwt.payload);
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
                email: !isLogin ?
                        Yup.string()
                        .email('Invalid email')
                        .required('Is required')
                        :
                        null,
                password: Yup.string()
                             .min(4, 'Minimum 4 symbols')
                             .required('Is required'),
            })}
            onSubmit={values => {isLogin ? signIn(values) : signUp(values)}}
        >
            <Form className="sign">
                <div className="sign__name">{isLogin ? 'Log in' : 'Registration'}</div>
                <label htmlFor="username">Login</label>
                <Field
                    name="username"
                    id='username'
                    type="text"
                />
                <ErrorMessage className="sign__error" name='username' component='div'/>
                {!isLogin ?
                    <>
                        <label htmlFor="email">Email</label>
                        <Field
                            name="email"
                            id='email'
                            type="text"
                        />
                        <ErrorMessage className="sign__error" name='email' component='div'/>
                    </>
                    : null

                }
                <label htmlFor="password">Password</label>
                <Field
                    name="password"
                    id='password'
                    type="password"
                    autoComplete="true"
                />
                <ErrorMessage className="sign__error" name='password' component='div'/>
                {isLogin ?
                    <div className="sign__redirect">
                        Don`t you have account? <NavLink to={REGISTRATION_ROUTE}>Sign up!</NavLink>
                    </div>
                    :
                    <div className="sign__redirect">
                        Do you have account? <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
                    </div>
                }
                <button 
                    type='submit'
                    className="btn"
                >{isLogin ? 'Log in' : 'Register'}</button>
            </Form>
        </Formik> 
    )
})

export default Auth;