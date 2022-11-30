import React from "react";
import Sidebar from "./Sidebar";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopBar from "./TopBar";
import { Box } from "@mui/material";
function Navbar(props) {
  const hideSideBar = useMediaQuery("(min-width:900px)");
  return (
    <>
      {hideSideBar && <Sidebar onFilter={props.onFilter} />}
      <TopBar onFilter={props.onFilter} />
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          paddingLeft: { xs: 0, md: "15%" },
          paddingTop: "75px",
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ width: "100%", height: "100%", overflowX:'hidden'}}>
          <>{props.children}</>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
