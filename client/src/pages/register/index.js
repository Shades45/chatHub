import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

const Register = ( )=> {
   
    return (
        <div>
    
      
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3005/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="firstName" placeholder="Enter Firstname"/>
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <br/>
              <Field name="lastName" placeholder="Enter Lastname"/>
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <br/>
              <Field name="phoneNumber" placeholder="Enter Phonenumber"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field name="password" type="password" placeholder="Enter Password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <Field name="confirmPassword" type="password" placeholder="Confirm Password"/>
              {errors.confirmPassword && touched.confirmPassword? (
                <div>{errors.confirmPassword}</div>
              ) : null}
              <br/>
              
              <button type="submit">Submit</button>
              Already User <Link href="/login">Sign In</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register