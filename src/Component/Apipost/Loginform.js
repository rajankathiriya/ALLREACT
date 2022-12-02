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

                            toast("Done")
                        }).catch(
                            () => {
                                toast("not")
                            }
                        )
                }}>
                <Form>
                    <Field type='text' name='email' />
                    <Field type='text' name='password' />

                    <Field type='submit' value='save' />
                </Form>
            </Formik>
        </div>
    )
}
