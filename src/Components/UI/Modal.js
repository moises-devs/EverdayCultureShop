import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setisCartOpen,
  removeItem,
  addItem,
  decreaseItem,
} from "../../Store/cartSlice";
import { shades } from "./colorTheme";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
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
    dispatch(removeItem(id));
  };

  const addHandler = (item) => {
    let currentItem = { ...item, amount: 1 };
    dispatch(addItem(currentItem));
  };

  const decreaseHandler = (id) => {
    dispatch(decreaseItem(id));
  };
  return (
    <div>
      <Modal
        open={isCartOpen}
        onClose={toggleCart}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
        {totalItems !== 0 && <Box sx={style}>
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
            {cart.map((item) => (
              <Box
                sx={{
                  py: 1,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: ".2rem solid gainsboro",
                  height: "auto",
                }}
                key={item.id}
              >
                <Box sx={{ height: "30%", width: "30%" }}>
                  <img
                    src={`${process.env.REACT_APP_UPLOAD_URL}${item.attributes?.img?.data[0].attributes?.formats?.medium?.url}`}
                    alt={item.attributes.name}
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
                      sx={{
                        fontSize: { xs: 11, sm: 13, md: 17, lg: 19, xl: 21 },
                      }}
                    >
                      {item.attributes.name}
                    </Typography>
                    <IconButton onClick={removeHandler.bind(this, item.id)}>
                      <CloseIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: { xs: 9, sm: 11, md: 12, lg: 13, xl: 16 },
                      my: 1,
                    }}
                    component="p"
                  >
                    {item.attributes.shortdescription}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        border: ".2rem solid gainsboro",
                        display: "flex",
                        flexWrap: "nowrap",
                      }}
                    >
                      <IconButton onClick={decreaseHandler.bind(this, item.id)}>
                        <RemoveIcon
                          sx={{
                            fontSize: {
                              xs: 11,
                              sm: 12,
                              md: 13,
                              lg: 16,
                              xl: 19,
                            },
                          }}
                        />
                      </IconButton>
                      <Typography
                        sx={{
                          fontSize: { xs: 9, sm: 11, md: 12, lg: 13, xl: 16 },
                          my: 1,
                        }}
                        component="p"
                      >
                        {item.amount}
                      </Typography>
                      <IconButton onClick={addHandler.bind(this, item)}>
                        <AddIcon
                          sx={{
                            fontSize: {
                              xs: 11,
                              sm: 12,
                              md: 13,
                              lg: 16,
                              xl: 19,
                            },
                          }}
                        />
                      </IconButton>
                    </Box>
                    <Typography variant="p" component="p">
                      {`$${item.attributes.price}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              my: "7%",
              borderBottom: ".2rem solid gainsboro",
            }}
          >
            <Typography varaint="h4" component="h4">
              Subtotal{" "}
            </Typography>
            {totalAmount !== 0 ? (
              <Typography varaint="h4" component="h4">
                {`$${totalAmount.toFixed(2)}`}
              </Typography>
            ) : null}
          </Box>
          <IconButton
            onClick={() => {
              navigate("checkout/");
              dispatch(setisCartOpen());
            }}
            sx={{
              backgroundColor: shades.primary[500],
              width: "100%",
              borderRadius: 0,
              border:'0.2rem solid white',
              color: "white",
              transition:'all 300ms',
              "&:hover": {
                backgroundColor: 'black',
                color: shades.secondary[500],
                border:`0.2rem solid ${shades.primary[500]}`
              },
            }}
          >
            Checkout
          </IconButton>
        </Box>}
        {totalItems === 0 && <Box sx={{
          width:{xs:260, sm: 290, md:300, lg:350},
          height:{xs:230, md:250, lg:320},
          padding:'3%',
          textAlign:'center',
          background:'white',
          top:'50%',
          right:'50%',
          borderRadius:'5%',
          transform: 'translate(50%,-50%)',
          position:'absolute',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',

        }}> 
          <Typography variant="h3" component="p" sx={{fontSize:{xs:23, sm:25, md:28, lg:30, xl:31}}}>
            Your cart is <span style={{color:'red'}}>empty</span> please add items to continue
          </Typography>
          <Box sx={{position:'absolute', right: '5%', top: '5%' }}>
            <IconButton onClick={toggleCart}>
              <CloseIcon sx={{color:shades.primary[500], fontSize:{xs:20, sm:24, md:30, lg:34}}}/>
            </IconButton>
          </Box>
        </Box>} 
        </>
      </Modal>
    </div>
  );
}
