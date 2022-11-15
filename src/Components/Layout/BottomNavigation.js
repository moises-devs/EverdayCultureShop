import * as React from "react";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

export default function FixedBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      ref.current.ownerDocument.body.scrollTop = 0;
    }, [value, ]);
  
    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction component={Link} to="/" icon={<HomeIcon/>} label="Home" />
            <BottomNavigationAction component={Link} to="/search" icon={<SearchIcon/>} label="Search" />
            <BottomNavigationAction component={Link} to="/cart" icon={ <ShoppingCartIcon/> }label="Cart"  />
            <BottomNavigationAction component={Link} to="/menu" icon={<MenuIcon/>}label="Menu"  />
          </BottomNavigation>
        </Paper>
      </Box>
    );
  }