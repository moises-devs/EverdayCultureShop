import React from "react";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import { Formik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import { shades } from "../../Components/UI/colorTheme";
import ShippingAddress from "./ShippingAddress";
import Payment from "./Payment";
import { useLocation, useNavigate } from "react-router";
const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAddress: true,
    firstName: "",
    lastName: "",
    country: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      country: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAddress: yup.boolean(),
      firstName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      country: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAddress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required"),
    phoneNumber: yup.string().required("required"),
  }),
];

function Checkout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  let isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;

  const handleFormSubmit = async (values, actions) => {
    setActiveStep(activeStep + 1);
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }
    if (isSecondStep) {
      navigate(`${pathname}success`);

    }
    actions.setTouched({});
  };
  return (
    <Box m="80px auto" width="80%">
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={checkoutSchema[activeStep]}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          values,
          handleSubmit,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            {isFirstStep && (
              <ShippingAddress
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
            )}
            {isSecondStep && (
              <Payment
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
            )}
            <Box display="flex"  flexDirection={{xs: 'column', sm:'row'}} justifyContent="space-between"  gap="5%" >
              {!isFirstStep && (
                <Button
                  fullWidth
                  color="primary"
                  variant="contained"
                  sx={{
                    backgroundColor: shades.primary[200],
                    boxShadow: "none",
                    color: "white",
                    borderRadius: 0,
                    padding: 4,
                    marginY:3
                  }}
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  Back
                </Button>
              )}
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                sx={{
                  backgroundColor: shades.primary[400],
                  boxShadow: "none",
                  color: "white",
                  borderRadius: 0,
                  padding: 4,
                  marginY:3
                }}
              >
                {!isSecondStep ? 'Next' : 'Place Order'}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default Checkout;
