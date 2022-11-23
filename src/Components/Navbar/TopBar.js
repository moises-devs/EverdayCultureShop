import React, { useState} from "react";
import Sidebar from "./Sidebar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LandscapeIcon from "@mui/icons-material/Landscape";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router";
import { shades } from "../UI/colorTheme";
import { setisCartOpen } from "../../Store/cartSlice";
import { Button ,Typography, Toolbar, IconButton, Drawer,Badge, AppBar, Box  } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import WishListMenu from "./WishListMenu";
const drawerWidth = '45%';

function TopBar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [wishListOpen, setWishListOpen] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const wishList = useSelector(state => state.wish.wishes);
  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev)
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        position:'relative'
      }}
    >
      <Sidebar length={drawerWidth} />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        marginLeft: { xs: 0, sm: 0, md: "15%", lg: "15%", xl: "15%", }, //changed here
      }}
    >
      <AppBar
        component="nav"
        sx={{
          width: { xs: "100%", sm: "100%", md: "85%", lg: "85%", xl: "85%" },
          height: "76px",
          backgroundColor: "white",
          color: "black",
          border: "none",
          borderBottom: 0.5,
          borderColor: "gainsboro",
          boxShadow:'none',
          
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none", lg:'none', xl:'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={() => navigate('/') }
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              alignSelf: "center",
              visibility: { xs: "visible", sm: "visible", md: "hidden", lg:'hidden', xl:'hidden' },
              fontSize: { xs: 10, sm: 20 },
              transition: 'all 300ms',
              '&:hover':{
                cursor:'pointer',
                color:shades.primary[500],
              }
            }}
          >
            EveryDay Culture{" "}
            <LandscapeIcon
              sx={{ color:shades.primary[500], fontSize: { xs: 15, sm: 20 } }}
            />
          </Typography>
          <Box
            sx={{
              display: { xs: "flex", sm: "block" },
              flexWrap: "no-wrap",
              justifyContent: "space-betwen",
              alignItems:'center'
            }}
          >
            <Button
            onMouseEnter={() => setWishListOpen(true)}
            onMouseLeave={() => setWishListOpen(false)}
            color="secondary" variant="contained"
              sx={{
                backgroundColor: "secondary",
                color: "black",
                fontSize: { xs: 10, sm: 15 },
                marginRight:2,
                position:'relative'
              }}
            >
              WishList
              <Badge  badgeContent={wishList.length} color="primary" sx={{
                  '& .MuiBadge-badge' : {
                    position:'absolute',
                    top:-10,
                    right:-35
                  }
              }}/>
              <FavoriteIcon
                color="primary"
                sx={{ fontSize: { xs: 15, sm: 20 } }}
              />{" "}
               {wishListOpen && <WishListMenu/>}
            </Button>
            <Button  onClick={() => dispatch(setisCartOpen())} color="secondary" variant="contained" sx={{ color: "black", fontSize: { xs: 10, sm: 15 } }}>
              Cart
              <Badge  badgeContent={cart.length} color="primary" sx={{
                  '& .MuiBadge-badge' : {
                    position:'absolute',
                    top:-3,
                    right:-8
                  }
              }}>
              <ShoppingCartIcon
                color="primary"
                sx={{ fontSize: { xs: 15, sm: 20 } }}
              />
              </Badge>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md:'none', lg:'none', xl:'none' },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default TopBar;
