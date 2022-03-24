import React from "react"
import { Formik, Form, Field, } from "formik"

import * as yup from "yup"

//? Note:  Im able to do this as well without Formik!  But i wanted to try this in React, since i discover this in React Native.
const LoginForm = ({toggle}) => {
    const loginSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required().min(8)
    })
      return(
        <Formik
        initialValues={
         { email: "",
          password: ""}
        }
        onSubmit={ values => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={loginSchema}
        >
            {({errors, touched}) => (
                <Form>
                    <label htmlFor="email">Your email</label>   
                    <Field name="email" type="email"/>
                    {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                    <label htmlFor="password">Your password</label>
                    <Field name="password" type="password" />
                    {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
                    <button type="submit">Submit</button>
                    <span onClick={toggle}>Back To Home</span> 
                </Form>
            )}
        </Formik>
      )
     
}

export default LoginForm