import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import {useDispatch, useSelector} from "react-redux";
import { setUserDetails } from '../../redux/reducers/userSlice';
import { useState } from 'react';
import { useRouter } from 'next/router'
// import Users from '../users';

const Login = ( )=> {
  const [error, setError] = useState('')
  const router = useRouter()
  const {token} = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const triggerLogin = async(values)=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
  };
  const res = await fetch('http://localhost:3005/login', requestOptions)
  const data = await res.json()
  

  if(data.isLoggedIn){
    dispatch(setUserDetails(data))
    router.push('/users')
  }else{
    setError(data.msg)
  }

  }
  
  return (
    <div>
      {token}
  
    <Formik
      initialValues={{
        phoneNumber: '',
        password: '',
      }}
      onSubmit={values => {
        triggerLogin(values)
  
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field className= "form-control" name="phoneNumber" placeholder="Mobile Number"/>
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <br/>
          <Field className= "form-control" name="password" type= "password" placeholder="Password"/>
          {errors.password && touched.password? (
            <div>{errors.password}</div>
          ) : null}
          <br/>
          <span style={{color: 'red'}}>{error}</span>
          <button type="submit">Submit</button>
          Dont have an account yet ? <Link href="/register">Sign Up</Link>
        </Form>
      )}
    </Formik>
    </div>
    )
    
}


export default Login