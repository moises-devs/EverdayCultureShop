import React from 'react'
import { Box, Typography, List, ListItem , ListItemText, Divider} from '@mui/material'
import { useSelector } from "react-redux";

const style = {
  width: '70%',
  bgcolor: 'background.paper',
  marginX:"auto",
  display:"flex",
  flexDirection:"column",
};

function Confirmation() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <Box sx={{ textAlign:"center", my:4}}>
      <Typography variant="h4" component="h2"> Order Confirmed </Typography>
      <List sx={style} component="div" aria-label="item order folders">
        {cart.map(item => (
          <>
                <ListItem>
          <ListItemText primary={item.attributes.name}  secondary={`Quantity: ${item.amount}`} sx={{   textAlign:"center",}}/>
          </ListItem>
          <Divider />
          </>
        ))}
    </List>
    </Box>
  )
}

export default Confirmation