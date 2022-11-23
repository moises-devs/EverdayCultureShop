import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setisCartOpen, removeItem, addItem } from "../../Store/cartSlice";
import { shades } from "./colorTheme";
import CloseIcon from "@mui/icons-material/Close";
import women from "./gbarkz-vqKnuG8GaQc-unsplash.jpg";
import dress from "./mark-adriane-V7IJzp_ElQc-unsplash.jpg";
import {IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router";
const style = {
  position: "absolute",
  top: "0%",
  right: "0%",
  width: { xs: 250, sm: 300, md: 400, lg: 400, xl: 400 },
  height: "100%",
  bgcolor: shades.neutral[500],
  border: `2px solid gainsboro`,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const cartItems = [
  {
    img: women,
    name: "Evening text Dress",
    price: 12.99,
    amount: 0,
    id: Math.random() * 32,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    img: dress,
    name: "Evening text Dress",
    price: 12.99,
    amount: 0,
    id: Math.random() * 32,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    img: women,
    name: "Evening text Dress",
    price: 12.99,
    amount: 0,
    id: Math.random() * 32,
  },
  {
    img: women,
    name: "Evening text Dress",
    price: 12.99,
    amount: 0,
    id: Math.random() * 32,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    img: dress,
    name: "Evening text Dress",
    price: 12.99,
    amount: 0,
    id: Math.random() * 32,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    img: women,
    name: "Evening text Dress",
    price: 12.99,
    amount: 0,
    id: Math.random() * 32,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
  {
    img: dress,
    name: "Evening text Dress",
    price: 12.99,
    amount: 0,
    id: Math.random() * 32,
    shortDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
  },
];

export default function BasicModal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCartOpen, totalAmount, totalItems, cart } = useSelector(
    (state) => state.cart
  );

  const toggleCart = () => {
    dispatch(setisCartOpen());
  };

  const removeHandler = (id) => {
    console.log(id);
    dispatch(removeItem(id));
  }

  const addHandler = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      <Modal
        open={isCartOpen}
        onClose={toggleCart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {`SHOPPING BAG (${totalItems})`}
            </Typography>
            <IconButton onClick={toggleCart}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              height: "100%",
              overflowY: "scroll",
            }}
          >
            {cartItems.map((item) => (
              <Box
                sx={{
                  py: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: ".2rem solid gainsboro",
                  height:'auto'
                }}
                key={item.id}
              >
                <Box sx={{ height: "30%", width: "30%" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    height="100%"
                    width="100%"
                  />
                </Box>
                <Box
                  sx={{
                    width: "65%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="h7"
                      component="h3"
                      sx={{ fontSize: { xs:11, sm:13, md:17, lg:19, xl:21 } }}
                    >
                      {item.name}
                    </Typography>
                    <IconButton onClick={removeHandler.bind(this, item.id)}>
                      <CloseIcon sx={{fontSize:18}}/>
                    </IconButton>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {xs: 9, sm: 11, md:12, lg:13, xl:16},
                      my:1
                    }}
                    component="p"
                  >
                    {item.shortDescription}
                  </Typography>
                  <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'100%',
                  }}>
                    <Box sx={{border:'.2rem solid gainsboro', display:'flex', flexWrap:'nowrap'}}> 
                    <IconButton >
                        <RemoveIcon sx={{ fontSize: {xs: 11, sm: 12, md:13, lg:16, xl:19}}}/>
                    </IconButton>
                    <Typography
                    sx={{
                      fontSize: {xs: 9, sm: 11, md:12, lg:13, xl:16},
                      my:1
                    }}
                    component="p"
                  >
                    {item.amount}
                    </Typography>
                    <IconButton onClick={addHandler}>
                        <AddIcon sx={{ fontSize: {xs: 11, sm: 12, md:13, lg:16, xl:19}}}/>
                    </IconButton>
                    </Box>
                    <Typography variant="p" component="p">
                        {`$${item.price}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', my:'7%', borderBottom:".2rem solid gainsboro"}}>
            <Typography varaint="h4" component="h4">
            Subtotal </Typography>
            {totalAmount !== 0 ? <Typography varaint="h4" component="h4" >
              {`$${totalAmount}`}
            </Typography> : null}
          </Box>
          <IconButton onClick={() => { navigate("checkout/")
          dispatch(setisCartOpen())}} sx={{backgroundColor: shades.primary[500], width:'100%', borderRadius:0, color:'white', 
          '&:hover':{
            backgroundColor: shades.secondary[500], color:shades.primary[500]
          }}}>
            Checkout
          </IconButton>
        </Box>
      </Modal>
    </div>
  );
}
