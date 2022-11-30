import { Box, Typography } from "@mui/material";
import Item from "../Components/Item/Item";
import MainCarousel from "../Components/Carousel/MainCarousel";
import { useEffect, useState } from "react";
function Home(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log(`http://localhost:1337/api/products/?populate=img${props.path ? `&filters[category][$eq]=${props.path}` : '' }`)
    const getItem = async () => {
      const data = await fetch(
        `http://localhost:1337/api/products/?populate=img${props.path ? `&filters[category][$eq]=${props.path}` : '' }`
      );
      const response = await data.json();
      setItems(response.data);
    };
    getItem();
  }, [props.path]);

  return (
    <>
      <MainCarousel />
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography sx={{ fontSize: {xs:23, sm:25, md:27, lg:29} }}>{`${props.path ? `${props.path} collection` : 'Our Entire Collection '}`}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Box>
    </>
  );
}

export default Home;
