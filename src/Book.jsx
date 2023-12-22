import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Book.css'

function AdminDashboard(props) {
  
  return (
    <div className='model' >
       <div className='model_container1'>
        <div className='btcdiv'  > 
        <button className='btc' onClick={()=>props.setBook(!props.book)} ><i class="bi bi-x-circle"></i></button>
        </div>
    <Formik className='consy'
      initialValues={{ title: '', author: '', isbn: '' ,selectedDate: ''}}
      validate={values => {
        const errors = {};
        if (!values.title) {
          errors.title = `ⓘRequired`;
        } else if (!values.author) {
            errors.author = 'ⓘRequired';
          } 
        else if (
          !/^[0-9]/i.test(values.isbn)
        ) {
          errors.isbn = 'ⓘenter only numbers';
        }else if (!values.selectedDate) {
          errors.selectedDate = 'ⓘRequired';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        
        const title = values.title;
        const author = values.author;
        const isbn = values.isbn;
        const selectedDate = values.selectedDate;
        const newList ={
          id:props.blist.length+1,
          title,
          author,
          isbn,
          selectedDate
        }
        console.log(newList.id)
        props.setBlist((prevList)=>{
          return prevList.concat(newList)
        })

          setSubmitting(false);
          props.setBook(!props.book)
          
       
      }}
    >
      {({ isSubmitting }) => (
        <Form className='form' >
            <div className='divs' ><label htmlFor="">TITLE:</label>
            <Field className="field11"  type="title" placeholder='Enter Title' name="title" />
          <ErrorMessage name="title" component="span"  className='errors' />
            </div >
            <div className='divs' ><label htmlFor="">AUTHOR:</label>
            <Field className="field12"  type="author" placeholder='Author Name' name="author" />
          <ErrorMessage name="author" component="span"  className='errors' />
            </div>
            <div className='divs' ><label htmlFor="">ISBN:</label>
            <Field className="field13" type="isbn" placeholder='ISBN Number' name="isbn" />
          <ErrorMessage name="isbn" component="span" className='errors' />
            </div>       
            <div className='divs'  >
            <label  htmlFor="selectedDate">PUblished Date:</label>
          <Field className="field14" type="date" id="selectedDate" name="selectedDate" />
          <ErrorMessage name="selectedDate" component="span" className='errors' />
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

export default AdminDashboard