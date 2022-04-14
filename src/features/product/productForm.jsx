import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';

export const ProductForm = () => {

  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
    
    return errors;
  };
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit: values => {
      createProductAsync(values)
    },
  });

  const createProductAsync = async (dataForm) =>{
    axios({
      method: 'post',
      url: 'https://localhost:5001/api/product',
      data: dataForm
    });
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};