import React from "react";
import { Box, Typography, TextField } from "@mui/material";
function Payment({ values, touched, errors, handleBlur, handleChange }) {
  return (
    <Box m="30px auto">
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Contact Info
        </Typography>
        <TextField
          fullWidth
          type="text"
          label="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.email}
          name="email"
          error={!!touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ gridColumn: "span 4", marginBottom: 5 }}
        />
        <TextField
          fullWidth
          type="text"
          label="email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.phoneNumber}
          name="phoneNumber"
          error={!!touched.phoneNumber && !!errors.phoneNumber}
          helperText={touched.phoneNumber && errors.phoneNumber}
          sx={{ gridColumn: "span 4", marginBottom: 5 }}
        />
      </Box>
    </Box>
  );
}

export default Payment;
