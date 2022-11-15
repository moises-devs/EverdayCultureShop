import {Routes, Route} from "react-router-dom";
// import BottomNavigation from "./Components/Layout/BottomNavigation";
// import useMediaQuery from '@mui/material/useMediaQuery';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colorTheme } from "./Components/UI/colorTheme";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // const hideBottomNavigation= useMediaQuery('(min-width:600px)');
  return (
    <ThemeProvider theme={colorTheme}>
    <CssBaseline/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<div> inside menu </div> }/>
      <Route path="/search" element={<div>inside search </div> }/>
      <Route path="/cart" element={<div> inside cart </div> } />
    </Routes>
    {/* {!hideBottomNavigation && <BottomNavigation/>} */}
    </ThemeProvider>
  );
}

export default App;
