import React from "react";
import {
  Box,
  TextField,
  Button,
  useMediaQuery,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LandscapeIcon from "@mui/icons-material/Landscape";
function TopBar() {
  const hideMobileBar = useMediaQuery("(min-width:890px)");
  return (
    <Box
      sx={{
        marginLeft: `${hideMobileBar ? "15%" : "0%"}`,
        height: "7%",
        border: 0.5,
        borderColor: "red",
        borderTop: 0,
        display: "flex",
        padding: `${hideMobileBar ? "0%" : "2%"}`,
        flexDirection: `${hideMobileBar ? "row" : "column"}`,
        justifyContent: `${hideMobileBar ? "space-around" : "center"}`,
        width: `${hideMobileBar ? "85%" : "100%"}`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: "7%",
          borderBottom: 0.5,
          borderColor: "gainsboro",
          justifyContent: "center",
        }}
      >
        <LandscapeIcon sx={{ color: "#2b01d4", fontSize: 40 }} />
        <Typography sx={{ textAlign: "center" }} variant="h6" component="h1">
          EveryDay Culture
        </Typography>
      </Box>

      <Box sx={{ width: `${hideMobileBar ? "45%" : "100%"}` }}>
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          margin="dense"
          sx={{ backgroundColor: "#e9e7fb", width: "100%" }}
          placeholder="Search Amoung 100 Products..."
        ></TextField>
      </Box>
      {/* start right side of top bar */}
      <Box
        sx={{
          width: "30%",
          maxWidth: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button variant="outlined" startIcon={<FavoriteIcon />}>
          Favorites
        </Button>
        <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
          Cart
        </Button>
      </Box>
    </Box>
  );
}

export default TopBar;
