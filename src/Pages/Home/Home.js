import { Box, Typography } from "@mui/material";
import Item from "../../Components/Item/Item";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import { useEffect, useState } from "react";
import Subscribe from "../../Components/Subscribe/Subscribe";
import styles from "./Home.module.css"
function Home(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const data = await fetch(
        `${process.env.REACT_APP_API_URL}/products/?populate=img${props.path.path ? props.path.path : ''}`,
        {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        }
      );
      const response = await data.json();
      setItems(response.data);
    };
    getItems();
  }, [props.path]);

  return (
    <>
      <MainCarousel />
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography sx={{ fontSize: {xs:23, sm:25, md:27, lg:29} }}>{`${props.path.type ? `${props.path.type} collection` : 'Our Entire Collection '}`}</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className={styles.top}>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Box>
      <Subscribe/>
    </>
  );
}

export default Home;
