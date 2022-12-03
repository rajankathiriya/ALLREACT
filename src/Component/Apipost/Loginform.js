import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

import { Field, Formik, Form } from 'formik'
import { React } from 'react'

export default function Loginform() {
    return (
        <div>
            <Formik initialValues={{
                email: "",
                password: ""
            }}

                onSubmit={(e) => {
                    axios.post('http://localhost:4000/accounts/authenticate', e)
                        .then(r => {
                            console.log(r.data);

                            toast("Registration Successfully..")
                        }).catch(
                            () => {
                                toast("Invalid username or password")
                            }
                        )
                }}>
                <Form className='w-25 mx-auto p-4'>
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
