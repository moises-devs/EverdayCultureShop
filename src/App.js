import {Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colorTheme } from "./Components/UI/colorTheme";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect}from "react";
import Checkout from "./Components/Checkout/Checkout";
import Confirmation from "./Components/Checkout/Confirmation";
import ItemDetails from "./Components/Item/ItemDetails";
function App() {
  const { pathname } = useLocation();
  useEffect( () => {
    window.scrollTo(0,0)
    return () => null
  },[pathname]);
  return (
    <ThemeProvider theme={colorTheme}>
    <CssBaseline/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="item/:itemId" element={<ItemDetails/>}/>
      <Route path="checkout" element={<Checkout/>}/>
      <Route path="checkout/success" element={<Confirmation/> } />
    </Routes>
    </ThemeProvider>
  );
}

export default App;
