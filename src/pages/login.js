import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
import {Link}  from 'react-router-dom'

const Login = ( )=> {
   
    return (
        <div>
    
      
        <Formik
          initialValues={{
            phoneNumber: '',
            password: '',
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/login', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="phoneNumber" placeholder="phoneNumber"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <button type="submit">Submit</button>
             Dont have an account yet ? <Link to="/register">Sign up</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Login