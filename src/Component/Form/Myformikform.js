import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

let YYY = yup.object().shape({
  firstname: yup.string().required('Firstname is req'),
  middlename: yup.string().required('middlename is req'),
  lastname: yup.string().required('lastname is req'),
  age: yup.string().required('age is req'),
  city: yup.string().required('city is req')
})

const Mydataformik = () => {
  return (
    <div>
      <Formik initialValues={
        {
          firstname: "",
          middlename: "",
          lastname: "",
          age: "",
          city: ""
        }
      }

        validationSchema={YYY}

        onSubmit={
          (e) => {
            console.log(e);
          }
        }>
        <Form>
          <label htmlFor="">Firstname:</label>
          <Field name="firstname" type="text" />
          <ErrorMessage name='firstname' /><br />
          <label htmlFor="">Middlename:</label>
          {/* <Field name="middlename" itype="text" /><br /> */}
          <label htmlFor="">Lastname:</label>
          <Field name="lastname" type="text" /><br />
          <label htmlFor="">Age:</label>
          <Field name="age" type="text" /><br />
          <label htmlFor="">City:</label>
          <Field name="city" type="text" /><br /><br />

          <input type="submit" value="Save" />
        </Form>
      </Formik>
    </div>
  );
}

export default Mydataformik;

