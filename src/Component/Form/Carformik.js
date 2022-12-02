import React from 'react'
import { Formik, Field, Form } from 'formik';

export default function Carformik() {
    return (
        <div>
            <Formik initialValues={{
                carnumber: "",
                carmodel: "",
                carbrand: "",
                fualtype: "",
                isSUV: '',
                isBS6: ''
            }}

                onSubmit={(e) => {
                    console.log(e);
                }}>


                <Form className='w-50 mx-auto' >
                    <label>Car Number:</label>
                    <Field className='form-control' type='text' name='carnumber' /><br />

                    <label>Car Brand:</label>
                    <Field as='select' name='carbrand' className='form-control' >
                        <option value="Suzuki">Suzuki</option>
                        <option value="Audi">Audi</option>
                        <option value="Hundai">Hundai</option>
                    </Field><br />


                    <label>Car Model:</label>
                    <Field as='select' name='carmodel' className='form-control' >
                        <option value="Swift">Swift</option>
                        <option value="Vitara">Vitara</option>
                        <option value="Q3">Q3</option>
                        <option value="Q5">Q5</option>
                        <option value="Q7">Q7</option>
                        <option value="Creta">Creta</option>
                    </Field ><br />

                    <label>Fual Type:</label>
                    <Field type='radio' name='fualtype' value='CNG' />CNG
                    <Field type='radio' name='fualtype' value='Pertol' />Pertol
                    <Field type='radio' name='fualtype' value='Diseal' />Diseal
                    <Field type='radio' name='fualtype' value='Electric' />Electric<br />

                    <label>isSUV:</label>
                    <Field type='checkbox' name='isSUV' />SUV<br />


                    <label>isBS6:</label>
                    <Field type='checkbox' name='isBS6' />BS6<br />

                    <input type="submit" value="Submit" />
                </Form>
            </Formik>
        </div >
    )
}
