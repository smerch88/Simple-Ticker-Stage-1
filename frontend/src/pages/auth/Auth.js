import { Formik, Form, Field, ErrorMessage} from 'formik';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { registration, login } from '../../http/userAPI';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';

import {observer} from "mobx-react-lite";
import jwt_decode from "jwt-decode";
import "./_sign.scss"
import { useContext, useState } from 'react';
import { Context } from '../..';

import LoadingIcon from '../../resourses/img/icons/oval.svg'


const Auth = observer (() =>{
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const [focus, setFocus] = useState(false)
    const [loading, setLoading] = useState(false)
    const isLogin = location.pathname === LOGIN_ROUTE

    const sign = async (values) => {
        try {
            let data;
            setLoading(true)
            if (isLogin) {
                data = await login(values)
                user.setUser(user)
                user.setIsAuth(true)
                setLoading(false)
                navigate(MAIN_ROUTE)
            } else {
                data = await registration(values)
                setLoading(false)
                alert('Your account created successfully!')
            }

        } catch (e) {
            setLoading(false)
            if (e.response.status !== 200 && isLogin) {
                alert('Invalid password or login')
            }
            if (e.response.status !== 201 && !isLogin) {
                alert('Invalid format password, login or email')
            }
        }

    }

    const isFocus = () => {
        setFocus(!focus)
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
                             .min(8, 'Minimum 8 symbols')
                             .required('Is required'),
            })}
            onSubmit={values => {isLogin ? sign(values) : sign(values)}}
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
                    onFocus={isFocus}
                    onBlur={isFocus}
                />
                {focus ? 
                    <div className="sign__focus">
                        Please do not use your login or email and only numbers
                    </div>
                    : null
                }
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
                {loading ?
                    <div className='sign__loading'>
                        <img src={LoadingIcon} alt="" />
                    </div>
                    : null
                }
            </Form>
        </Formik> 
    )
})

export default Auth;