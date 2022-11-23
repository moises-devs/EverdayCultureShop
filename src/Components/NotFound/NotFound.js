import { Box } from "@mui/system";
import React from "react";
import gif from "./404 Error Page not Found with people connecting a plug.gif";
import smallGif from "./404 Error Page not Found with people connecting a plug (2).gif"
import { useMediaQuery } from "@mui/material";

function NotFound() {
    const showDesktop = useMediaQuery('(min-width:660px)');
  return (
    <Box sx={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Box>
        <img src={`${showDesktop ? gif : smallGif}`} alt="page not found" />
      </Box>
    </Box>
  );
}

export default NotFound;
