import React from "react"
import { Formik, Form, Field, } from "formik"

import * as yup from "yup"
import { Link } from "react-router-dom"

//? Note:  Im able to do this as well without Formik!  But i wanted to try this in React, since i discover this in React Native.
const RegisterForm = ({ toggle }) => {
    const loginSchema = yup.object({
        fullName: yup.string().required().min(2).max(50),
        email: yup.string().email().required(),
        password: yup.string().required().min(8)
    })
    return (
        <Formik
            initialValues={
                {
                    fullName: "",
                    email: "",
                    password: ""
                }
            }
            onSubmit={values => {
                alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={loginSchema}
        >
            {({ errors, touched }) => (
                <Form>
                    <label htmlFor="fullName">Full name</label>
                    <Field name="fullName" type="text" />
                    {errors.fullName && touched.fullName ? <div className="error">{errors.fullName}</div> : null}
                    <label htmlFor="email">Your email</label>
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
                    <label htmlFor="password">Your password</label>
                    <Field name="password" type="password" />
                    {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
                    <button type="submit">Submit</button>
                    <span><Link to="/">Back To Home</Link></span>
                </Form>
            )}
        </Formik>
    )

}

export default RegisterForm