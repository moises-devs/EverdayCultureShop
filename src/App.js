import { Routes, Route, useLocation } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { colorTheme } from "./Components/UI/colorTheme";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Checkout from "./Pages/Checkout/Checkout";
import Confirmation from "./Pages/Checkout/Confirmation";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import ReactDOM from "react-dom";
import BasicModal from "./Components/UI/Modal";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
function App() {
  const { pathname } = useLocation();
  const [filteredPath, setFilterdPath] = useState({ path: "", type: "" });
  const filterHandler = (pathObj) => {
    setFilterdPath(pathObj);
  };
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
  }, [pathname,filteredPath]);
  return (
    <ThemeProvider theme={colorTheme}>
      <CssBaseline />
      <Navbar onFilter={filterHandler} pathToFilterBy={filteredPath}>
        <Routes>
          <Route path="/" element={<Home path={filteredPath} />} />
          <Route path="item/:itemID" element={<ItemDetails />} />
          <Route path="checkout/" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        {ReactDOM.createPortal(
          <BasicModal />,
          document.getElementById("modal")
        )}
        <Footer />
      </Navbar>
    </ThemeProvider>
  );
}

export default App;
