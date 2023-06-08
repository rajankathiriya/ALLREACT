

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

const ResetPass = () => {
    return (
        <div>
            <Formik initialValues={
                {
                    password: "",
                    confirmpassword: ""
                }
            }


                onSubmit={
                    (e) => {
                        console.log(e);
                    }
                }>
                <Form>

                    <label htmlFor="">Password:</label>
                    <Field name="password" type="text" /><br />
                    <label htmlFor="">Confirm Password:</label>
                    <Field name="confirmpassword" type="text" /><br /><br />

                    <input type="submit" value="Save" />
                </Form>
            </Formik>
        </div>
    );
}

export default ResetPass;


