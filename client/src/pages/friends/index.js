import React, { useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik';

const friends = () => {
  const initialRef = useRef(null)
  useEffect(()=>{
    initialRef.current.focus()
  },[])
  return (
    <div>
      {/* <input ref={initialRef} placeholder='type'/>
      <button>click</button> */}
      <Formik>
        <Form>
          <Field className= "form-control" name='fullName' placeholder='type' innerRef={initialRef}/>
        </Form>
      </Formik>
    </div>
  )
}

export default friends