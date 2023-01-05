import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { useDispatch } from "react-redux";
import { emptyCart } from "../../Store/cartSlice";
import { emptyWishes } from "../../Store/wishSlice";
import { Navigate } from "react-router";
const style = {
  height: "80%",
  my: 4,
  width: "80%",
  marginX: "auto",
};

function Confirmation() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    if (cart.length > 0) {
      setRowData(() =>
        cart.map((item) => ({
          name: item.attributes.name,
          price: `$${item.attributes.price}`,
          quantity: item.amount,
          id: item.id,
        }))
      );
    }
    if (rowData.length > 0 && cart.length > 0) {
      dispatch(emptyCart());
      dispatch(emptyWishes());
    }
  }, [cart, rowData, dispatch]);

  return (
    <>
      {rowData && (
        <Box sx={style}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography variant="h4" component="h2" sx={{ marginY: 2 }}>
              {" "}
              Order Confirmed{" "}
            </Typography>
            <Icon>
              <BeenhereIcon color="primary" />
            </Icon>
          </Box>
          <TableContainer component={Paper}>
            <Table aria-label="checkout table">
              <TableHead>
                <TableRow>
                  <TableCell>NAME</TableCell>
                  <TableCell align="right">PRICE</TableCell>
                  <TableCell align="right">QUANTITY</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowData &&
                  rowData.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                      <TableCell align="right">{row.quantity}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
      {cart.length === 0 && rowData.length === 0 && (
        <Navigate to="/" replace={true} />
      )}
    </>
  );
}

export default Confirmation;
