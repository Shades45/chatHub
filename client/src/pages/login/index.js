import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import {useDispatch} from "react-redux";
import { setUserDetails } from '../../redux/reducers/userSlice';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
// import Users from '../users';

const Login = ( )=> {
  const initialRef = useRef(null)
  const [error, setError] = useState('')
  const router = useRouter()
  // const {token} = useSelector(state=>state.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    initialRef.current.focus()
  },[])
  
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
    // router.push('/users')
  }else{
    setError(data.msg)
  }

  }
  
  return (
    <div className='margin'>
      {/* {token} */}
      <h1 style={{textAlign: 'center'}}>Login</h1>
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
        <Form style={{textAlign: 'center'}}>
          <Field className= "form-control" name="phoneNumber" placeholder="Mobile Number" innerRef= {initialRef}/>
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
          <button type="submit">Submit</button><br/>
          Dont have an account yet ? <Link href="/register">Sign Up</Link>
        </Form>
      )}
    </Formik>
    </div>
    )
    
}


export default Login