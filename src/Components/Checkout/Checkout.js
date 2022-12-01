import React from 'react'
import { useSelector } from 'react-redux';
import {Box, Button, Stepper, Step, StepLabel} from "@mui/material";
import  { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from '../UI/colorTheme';

const initialValues = {
  billingAddress:{
    firstName:'',
    lastName:'',
    country:'',
    street1:'',
    street2:'',
    city:'',
    state:'',
    zipCode:''
  },
  shippingAddress:{
    isSameAddress:true,
    firstName:'',
    lastName:'',
    country:'',
    street1:'',
    street2:'',
    city:'',
    state:'',
    zipCode:''
  },
  email:'',
  phoneNumber:''
}

// const checkoutSchema = [
//   yup.object().shape({
//     billingAddress: yup.object.shape({
//       firstName:yup.string().required("required"),
//       lastName:yup.string().required("required"),
//       country:yup.string().required("required"),
//       street1:yup.string().required("required"),
//       street2:yup.string(),
//       city:yup.string().required("required"),
//       state:yup.string().required("required"),
//       zipCode:yup.string().required("required"),
//     }),
//     shippingAddress: yup.object.shape({
//       isSameAddress:yup.boolean(),
//       firstName:yup.string().when("isSameAddress", {
//         is:false,
//         then:yup.string().required("requried"),
//       }),
//       lastName:yup.string().when("isSameAddress", {
//         is:false,
//         then:yup.string().required("requried"),
//       }),
//       country:yup.string().when("isSameAddress", {
//         is:false,
//         then:yup.string().required("requried"),
//       }),
//       street1:yup.string().when("isSameAddress", {
//         is:false,
//         then:yup.string().required("requried"),
//       }),
//       street2:yup.string(),
//       city:yup.string().when("isSameAddress", {
//         is:false,
//         then:yup.string().required("requried"),
//       }),
//       state:yup.string().when("isSameAddress", {
//         is:false,
//         then:yup.string().required("requried"),
//       }),
//       zipCode:yup.string().when("isSameAddress", {
//         is:false,
//         then:yup.string().required("requried"),
//       }),
//     }),
//   }),
//   yup.object().shape({
//     email:yup.string().required("required"),
//     phoneNumber:yup.string().required("required"),
//   })
// ]

function Checkout() {
  return (
    // <Formik
    // initialValues={initialValues}
    // onSubmit={()=>{console.log('submitting')}}
    // // validationSchema={checkoutSchema[activeStep]}
    // >

    // </Formik>
    <div>
      checkout
    </div>
  )
}

export default Checkout