import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  Typography,
  Box,
  Breadcrumbs,
  IconButton,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import { toggleWish } from "../../Store/wishSlice";
import { shades } from "../..//Components/UI/colorTheme";
import PropTypes from "prop-types";
import { addItem } from "../../Store/cartSlice";
import Item from "../../Components/Item/Item";
import styles from "./ItemDetails.module.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ItemDetails() {
  const { itemID } = useParams();
  const [item, setItem] = useState(false);
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(0);
  const [relatedItems, setRelatedItems] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  let wishList = useSelector((state) => state.wish.wishes);
  let showWish = wishList.find((wish) => wish.id === +itemID);
  const wishHandler = () => {
    dispatch(toggleWish(item));
  };

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addToCartHandler = () => {
    let currentItem = { ...item, amount: count };
    dispatch(addItem(currentItem));
    setCount(1);
  };


  useEffect(() => {
    const getItem = async () => {
      const data = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${itemID}?populate=img`,
        {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        }
      );
      const response = await data.json();
      setItem(response.data);
    };

    const getRelatedItem = async() => {
      const data = await fetch (
        `${process.env.REACT_APP_API_URL}/products?populate=img&pagination[page]=2&pagination[pageSize]=8`,
        {
          headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`
          }
        }
      )
      const response = await data.json();
      setRelatedItems(response.data);
    }

    setCount(1);
    getItem();
    getRelatedItem();

  }, [itemID, setRelatedItems]);

  return (
    <>
      {/*start of wrapper */}
      {item && (
        <Box
          sx={{
            display: "flex",
            px: 2,
            py: 4,
            flexDirection: "column",
            alignItems: "center",
            overflow:'hidden'
          }}
          className={` top ${styles.contentWrapper}`}
        >
          {/*start of content container */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", lg: "center" },
              justifyContent: "space-between",
              height: "100%",
              maxWidth: 1300,
            }}
          >
            {/*start of image container */}
            <Box
              sx={{
                alignSelf: { xs: "center", sm: "flex-start" },
                height: { xs: 350, sm: 650, md: 700 },
                width: { xs: "100%", sm: "55%" },
                maxWidth: 600,
                outline: ".2rem solid gainsboro",
                position:'relative',
              }}
            >
              <img
                width="100%"
                height="100%"
                src={`http://localhost:1337${item.attributes?.img?.data[0]?.attributes?.formats?.medium?.url}`}
                alt={item.attributes.name}
                style={{ objectFit: "cover" }}
              />
            {item.attributes.label && 
              <Typography
                variant="body2"
                component="span"
                sx={{
                  position: "absolute",
                  top: "3%",
                  left: "3%",
                  background: shades.secondary[500],
                  color: shades.primary[500],
                  paddingX:'3%',
                  paddingY:'2%',
                  borderRadius: "0.2rem",
                  fontSize:{xs:15, sm:18, md:19}
                }}
          >
            {item.attributes.label}
          </Typography>}
            </Box>
            {/*end of image container */}
            {/*start of text container */}
            <Box
              sx={{
                my: 2,
                width: { xs: "100%", sm: "35%" },
                height: { xs: "auto", md: "70%" },
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {/* start of breadcrumbs */}
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                role="presentation"
              >
                <Breadcrumbs aria-label="breadcrumb" sx={{ my: 1 }}>
                  <Link to="/" sx={{ color: "secondary" }}>
                    Home
                  </Link>
                  <Link to={`/item/${itemID}`}>Item</Link>
                </Breadcrumbs>
                <Box>
                  {+itemID > 1 && (
                    <Typography
                      variant="span"
                      component="span"
                      sx={{
                        mx: 2,
                        "&:hover": {
                          cursor: "pointer",
                          color: shades.primary[500],
                        },
                        textDecoration:'underline',                      }}
                      onClick={() => navigate(`/item/${+itemID - 1}`)}
                    >
                      Prev
                    </Typography>
                  )}
                  {+itemID < 53 && (
                    <Typography
                      variant="span"
                      component="span"
                      onClick={() => navigate(`/item/${+itemID + 1}`)}
                      sx={{
                        "&:hover": {
                          cursor: "pointer",
                          color: shades.primary[500],
                        },
                        textDecoration:'underline',
                      }}
                    >
                      Next
                    </Typography>
                  )}
                </Box>
              </Box>
              {/* end of breadcrumbs */}
              {/* start of item description */}
              <Box>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ fontSize: { xs: 33, sm: 35, md: 40 }, my: 0.5 }}
                >
                  {item.attributes.name}
                </Typography>
                <Typography varaint="p" component="p" sx={{ my: 1 }}>
                  {`$${item.attributes.price}`}
                </Typography>
                <Typography varaiant="p" component="p" sx={{ my: 0.5 }}>
                  {item.attributes.shortdescription}
                </Typography>
              </Box>
              {/* end of item description */}
              {/*start of user action buttons */}
              <Box>
                <Box sx={{ display: "flex", alignItems: "center", my: 0.5 }}>
                  <IconButton onClick={decreaseCount}>
                    <RemoveCircleIcon color="primary" />
                  </IconButton>
                  <Typography variant="h6" component="span">
                    {count}
                  </Typography>
                  <IconButton onClick={increaseCount}>
                    <AddCircleIcon color="primary" />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginLeft: 2 }}
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </Button>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography varaint="p" component="p">
                    Add to Wish List
                  </Typography>
                  <IconButton
                    onClick={wishHandler}
                    sx={{
                      color: `${
                        showWish ? shades.primary[500] : shades.secondary[500]
                      }`,
                      "&:hover": { color: shades.primary[500] },
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="p" component="span">
                    {`Categories: ${item.attributes.category}`}
                  </Typography>
                </Box>
              </Box>
              {/*end of action container */}
            </Box>
            {/* end of text container */}
          </Box>
          {/* end of content container */}
          <Box
            sx={{
              my: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: 1300,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="descrioption and reviews tabs"
              textColor="inherit"
              indicatorColor="primary"
            >
              <Tab label="Description" {...a11yProps(0)} />
              <Tab label="Reviews" {...a11yProps(1)} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Typography variant="p" component="span" sx={{ my: 0.5 }}>
                {item.attributes.longdescription}
              </Typography>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography variant="p" component="span" sx={{ my: 0.5 }}>
                No reviews 
              </Typography>
            </TabPanel>
          </Box>
          <Box>
            <Typography
              variant="h3"
              component="h3"
              sx={{ fontSize: { xs: 30, sm: 31, md: 38 }, my: 0.5 }}
            >
              Related Products
            </Typography>
            <Box sx={{ width:'100%', display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {relatedItems.map((item, index) => (
          <Item key={`${item.id}-${index}`} {...item} />
        ))}
            </Box>
          </Box>
        </Box>
      )}
      {/*end of wrapper */}
      {!item && <p> Loading </p>}
    </>
  );
}

export default ItemDetails;
