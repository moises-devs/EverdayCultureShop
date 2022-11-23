import {Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colorTheme } from "./Components/UI/colorTheme";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect}from "react";
import Checkout from "./Components/Checkout/Checkout";
import Confirmation from "./Components/Checkout/Confirmation";
import ItemDetails from "./Components/Item/ItemDetails";
import  ReactDOM  from "react-dom";
import BasicModal from "./Components/UI/Modal";
import NotFound from "./Components/NotFound/NotFound";
function App() {
  const { pathname } = useLocation();
  useEffect( () => {
    window.scrollTo(0,0)
    return () => null 
  },[pathname]);
  return (
    <ThemeProvider theme={colorTheme}>
    <CssBaseline/>
    <Navbar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="item/:itemId" element={<ItemDetails/>}/>
      <Route path="checkout/" element={<Checkout/>}/>
      <Route path="checkout/success" element={<Confirmation/> } />
      <Route  exact path="*" element={<NotFound/>}/>
    </Routes>
    {ReactDOM.createPortal(<BasicModal/>, document.getElementById('modal')) }
    </Navbar>
    </ThemeProvider>
  );
}

export default App;
