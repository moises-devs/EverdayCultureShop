import React from 'react'
import Sidebar from './Sidebar'
import TopBar from "./TopBar"
import useMediaQuery from '@mui/material/useMediaQuery';
function Navbar() {
      const hideSideBar= useMediaQuery('(min-width:900px)');
  return (
    <>
    {hideSideBar && <Sidebar/>}
    <TopBar/>
    </>
  )
}

export default Navbar