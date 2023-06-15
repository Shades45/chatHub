import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
 

const Register = ( )=> {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Password didnt match')
      .required('Required'),
  });
    return (
        <div className='margin'>
          <h1 style={{textAlign: 'center'}}>Register</h1>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SignupSchema}
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
            <Form className='body'>
              <Field className= "form-control" name="firstName" placeholder="Firstname"/>
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              
              <Field className= "form-control" name="lastName" placeholder="Lastname"/>
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <br/>
              <Field className= "form-control" name="phoneNumber" placeholder="Mobile Number"/>
              {errors.phoneNumber && touched.phoneNumber ? (
                <div>{errors.phoneNumber}</div>
              ) : null}
              <br/>
              <Field className= "form-control" name="password" type="password" placeholder="New Password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <Field className= "form-control" name="confirmPassword" type="password" placeholder="Confirm Password"/>
              {errors.confirmPassword && touched.confirmPassword? (
                <div>{errors.confirmPassword}</div>
              ) : null}
              <br/>
              
              <button type="submit" style={{textAlign: 'center'}}>Submit</button><br/>
              Already User <Link href="/login">Sign In</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register