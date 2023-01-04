import React from "react";
import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

import AddressForm from "./AddressForm";
function ShippingAddress({
  handleChange,
  handleBlur,
  values,
  setFieldValue,
  errors,
  touched,
}) {
  return (
    <Box m="30px auto">
      {/* Billing form */}
      <Box>
        <Typography sx={{ mb: "15px", fontSize: 18 }}>
          Billing Information
        </Typography>
        <AddressForm
          type="billingAddress"
          values={values.billingAddress}
          handleChange={handleChange}
          errors={errors}
          handleBlur={handleBlur}
          touched={touched}
        />
      </Box>
      <Box>
        <FormControlLabel
        label={"Same for Shipping Address"}
          control={
            <Checkbox
              defaultChecked
              value={values.shippingAddress.isSameAddress}
              onChange={() => setFieldValue(
                "shippingAddress.isSameAddress",
                !values.shippingAddress.isSameAddress
              )}
            />
          }
        />
      </Box>

      {!values.shippingAddress.isSameAddress && <Box marginY="20px">
        <Typography sx={{ mb: "15px", fontSize: 18 }}>
          Payment Information
        </Typography>
        <AddressForm
          type="shippingAddress"
          values={values.shippingAddress}
          handleChange={handleChange}
          errors={errors}
          handleBlur={handleBlur}
          touched={touched}
        />
      </Box>}
    </Box>
  );
}

export default ShippingAddress;
