import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import axios from 'axios';
 
 const validateSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required')
 });
 
const createProductAsync = async (dataForm) =>{
  axios({
    method: 'post',
    url: 'https://localhost:5001/api/product',
    data: dataForm
  });
}
 export const ProductFormV2 = () => (
   <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         name: ''
       }}
       validationSchema={validateSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
         createProductAsync(values)
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
         
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 );