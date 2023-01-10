import { Box, Typography } from "@mui/material";
import Item from "../../Components/Item/Item";
import MainCarousel from "../../Components/Carousel/MainCarousel";
import { useEffect, useState } from "react";
import Subscribe from "../../Components/Subscribe/Subscribe";
import styles from "./Home.module.css"
import axios from "axios"
import BounceLoader from "react-spinners/BounceLoader";
import { shades } from "../../Components/UI/colorTheme";

const override =  {
  display: "block",
  margin: "10% auto",
  borderColor: shades.secondary[500],

};

function Home(props) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      try {
      const data = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/?populate=img${props.path.path ? props.path.path : ''}`,

      );
      setItems(data.data.data);
      }
      catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getItems();
  }, [props.path]);

  return (
    <>
      <MainCarousel />
      <Box sx={{ textAlign: "center", my: 4 }}>
        <Typography sx={{ fontSize: {xs:23, sm:25, md:27, lg:29} }}>{`${props.path.type ? `${props.path.type} collection` : 'Our Entire Collection '}`}</Typography>
      </Box>
      {!loading && <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className={styles.top}>
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Box>}
      <BounceLoader
        loading={loading}
        color={shades.primary[500]}
        cssOverride={override}
        size="30vh"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <Subscribe/>
    </>
  );
}

export default Home;
