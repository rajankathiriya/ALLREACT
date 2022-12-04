import axios from 'axios'
import { Field, Formik, Form } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'

export default function Submitpost() {
    return (
        <div>
            <Formik initialValues={{
                userId: "",
                id: "",
                title: "",
                body: ""
            }}
                onSubmit={
                    (e) => {
                        axios.post("https://jsonplaceholder.typicode.com/posts", e)
                            .then(e => {
                                console.log(e);
                                toast("Success...")
                            })
                    }
                }>
                <Form className='w-50 p-3 mx-auto'>
                    <label>UserId:</label>
                    <Field type='text' name="userId" className='form-control' />
                    <label>ID:</label>
                    <Field type='text' name="id" className='form-control' />
                    <label>Title:</label>
                    <Field type='text' name="title" className='form-control' />
                    <label>Body:</label>
                    <Field type='text' name="body" className='form-control' /><br />

                    <Field type="submit" value="save" className='form-control' />
                </Form>
            </Formik>
        </div>
    )
}
