import React from "react";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../UI/colorTheme";
import img1 from "../../Assets/elric-pxl-VwJeISXJ7qE-unsplash (1).jpg";
import img2 from "../../Assets/axel-antas-bergkvist-ndJQbMENknI-unsplash.jpg";
import img3 from "../../Assets/brooke-cagle-DlaAZKsSqRQ-unsplash.jpg";
import img4 from "../../Assets/danil-aksenov-8-zZ6rSBiGU-unsplash.jpg";
import img5 from "../../Assets/tamara-bellis-68csPWTnafo-unsplash.jpg";
const images = [{
  img: img2,
  message:'Find your next favorite item',
}, {
  img: img5,
  message: 'Discover Better Dress',
}, {
  img:img3,
  message: 'Our next seasonal sale starts now',
}, {
  img:img4,
  message: 'Look out for BEST SELLER items'
}, {
  img:img1,
  message:'Order above $50 recieve free shipping'
}];

function MainCarousel() {
  const isNonMobile = useMediaQuery("(min-width:600px");
  return (
    <>
    {isNonMobile && <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            zIndex: 100,
            color: shades.secondary[500],
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            zIndex: 100,
            color: shades.secondary[500],
            right: 0,
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {images.map((item, index) => (
        <Box key={`carousel-image-${index}`} sx={{ background:'linear-gradient(to bottom, rgba(25,0,20,0.2), rgba(23,34,33,0.5))',}}>
          <img
            src={item.img}
            alt={`carousel-${index}`}
            style={{
              width: "100%",
              height: "600px",
              objectFit: "cover",
              position:'relative',
              zIndex:-2,
            }}
          />
          <p style={{
            top:'50%',
            left:'6%',
            position:'absolute',
            color:'white',
            fontSize:28,
            padding:10,
            backgroundColor:'rgba(23,23,156,0.5)',
   
          }}> {item.message} </p>
        </Box>
      ))}
    </Carousel>}
    </>
  );
}

export default MainCarousel;
