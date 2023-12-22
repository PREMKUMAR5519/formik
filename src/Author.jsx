import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Author.css'

function Author(props) {
  return (
    <div className='model' >
      <div className='model_container'>
      <div className='btcdiv'  > 
        <button className='btc' onClick={()=>props.setAuthor(!props.author)} >X</button>
        </div>
    <Formik
      initialValues={{ name: '',selectedDate: '',biography:''}}
      validate={values => {
        const errors = {};
        if (!values.name) {
          errors.name = `ⓘRequired`;
        } else if (!values.selectedDate) {
            errors.selectedDate = 'ⓘRequired';
          } else if (!values.biography) {
          errors.biography = 'ⓘRequired';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        const name = values.name;
        const selectedDate = values.selectedDate;
        const biography = values.biography;
        const newList ={
          id:props.alist.length+1,
          name,
          selectedDate,
          biography,
        }
        props.setAlist((prevList)=>{
          return prevList.concat(newList)
        })
        setSubmitting(false);
        props.setAuthor(!props.author)
       
      }}
    >
      {({ isSubmitting }) => (
        <Form>
            <div className='divs' ><label htmlFor="">Author Name</label>
            <Field className="field1"  type="name" placeholder='Enter Name' name="name" />
          <ErrorMessage name="name" component="span"  className='errors' />
            </div >      
            <div className='divs'  >
            <label  htmlFor="selectedDate">Birth Date</label>
          <Field className="field2" type="date" id="selectedDate" name="selectedDate" />
          <ErrorMessage name="selectedDate" component="span" className='errors' />
            </div>
            <div className='divs' ><label htmlFor="">Biography</label>
            <Field as='textarea' className="field3"  type="biography" placeholder='Author Name' name="biography" />
          <ErrorMessage  name="biography" component="span"  className='errors' />
            </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
  </div>
  )
}

export default Author