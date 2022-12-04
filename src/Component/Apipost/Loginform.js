import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import { Field, Formik, Form } from 'formik'
import { React } from 'react'

export default function Loginform() {
    return (
        <div className='w-50 mx-auto '>
            <h2 className='text-center'>Login Form</h2><hr />
            <Formik initialValues={{
                email: "",
                password: ""
            }}

                onSubmit={(e) => {
                    axios.post('http://localhost:4000/accounts/authenticate', e)
                        .then(r => {
                            console.log(r);

                            toast("Registration Successfully..")
                        }).catch(
                            (r) => {
                                toast("Invalid username or password")

                            }
                        )
                }}>

                <Form className='p-4'>
                    <label>Email Address:</label>
                    <Field type='text' name='email' className='form-control' /><br />
                    <label>Password:</label>
                    <Field type='text' name='password' className='form-control' /><br />

                    <Field type='submit' value='Sign-in' className='form-control btn btn-outline-primary' />
                </Form>
            </Formik>
        </div>
    )
}
