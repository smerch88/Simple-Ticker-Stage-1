import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { login } from '../../http/userAPI';

import "./_sign.scss"

export default function SignIn () {


    const signIn = async (values) => {
        const response = await login(values)
        console.log(response)
    }
     
    

    return (

        <Formik 
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                             .min(2, 'Minimum 2 symbols')
                             .required('Is required'),
                password: Yup.string()
                             .min(4, 'Minimum 4 symbols')
                             .required('Is required'),
            })}
            onSubmit={values => signIn(values)}
        >
            <Form className="sign">
                <div className="sign__name">Log in</div>
                <label htmlFor="username">Login</label>
                <Field
                    name="username"
                    id='username'
                    type="text"
                />
                <ErrorMessage className="sign__error" name='username' component='div'/>
                <label htmlFor="password">Password</label>
                <Field
                    name="password"
                    id='password'
                    type="password"
                    autoComplete="true"
                />
                <ErrorMessage className="sign__error" name='password' component='div'/>
                <button 
                    type='submit'
                    className="btn"
                >Log in</button>
            </Form>
        </Formik> 
    )
}