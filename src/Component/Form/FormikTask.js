import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

let schema = yup.object().shape({
    firstname: yup.string().required("Firstname is required.."),
    middlename: yup.string().required("Middlename is required.."),
    lastname: yup.string().required("Lastname is required.."),
    email: yup.string().email("Email is required.."),
    mobile: yup.string().required("Mobile is required..")
})

const FormikTask = () => {

    return (
        <div>
            <Formik initialValues={{
                firstname: "",
                middlename: "",
                lastname: "",
                email: "",
                mobile: "",
                password: "",
                confirmpassword: "",
                city: "",
                zipcode: "",
                state: "",
            }}

                validationSchema={schema}
                onSubmit={
                    (e) => {
                        console.log(e);
                    }
                }>
                <Form className='mx-auto w-50 p-3 my-3 bg-white formikform1' style={{ borderRadius: '20px' }}>
                    <label htmlFor="">First name:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your firstname' name='firstname' />
                    <ErrorMessage name='firstname' /><br />

                    <label htmlFor="">Middle name:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your middlename' name='middlename' />
                    <ErrorMessage name='middlename' /><br />
                    <label htmlFor="">Last name:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your lastname' name='lastname' />
                    <ErrorMessage name='lastname' /><br />
                    <label htmlFor="">Email:</label>
                    <Field type='text' className='form-control' placeHolder='example@gmail.com' name='email' />
                    <ErrorMessage name='email' /><br />
                    <label htmlFor="">Mobile No:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your mobile' name='mobile' />
                    <ErrorMessage name='mobile' /><br />
                    <label htmlFor="">Password:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your password' name='password' /><br />
                    <label htmlFor="">Confirm Password:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your password' name='confirmpassword' /><br />
                    <label htmlFor="">City:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your city' name='city' /><br />
                    <label htmlFor="">Zip code:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your zipcode' name='zipcode' /><br />
                    <label htmlFor="">State:</label>
                    <Field type='text' className='form-control' placeHolder='Enter Your state' name='state' /><br /><br />

                    <input type="submit" value="Submit" className='btn btn-outline-primary  form-control' />

                </Form>
            </Formik>
        </div>
    );
}

export default FormikTask;



