import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Box, Link } from '@mui/material';
import Item from '../Components/Item/Item';
import women from "../Components/UI/gbarkz-vqKnuG8GaQc-unsplash.jpg";
import dress from "../Components/UI/mark-adriane-V7IJzp_ElQc-unsplash.jpg";
import MainCarousel from '../Components/Carousel/MainCarousel';
function Home() {
  const cartItems = [
    {
      img: women,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      promo: 'New',
      id: 4,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: dress,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: 5,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: women,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: 6,
    },
    {
      img: women,
      promo:'BEST SELLER',
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: 7,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: dress,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: 8,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: women,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id:9,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: dress,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: 10,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];
  return (
    <Box sx={{ maxWidth:'1500px', marginX: 'auto',paddingX:0}}>
      <MainCarousel/>
      <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center' }}>
      {cartItems.map(item => <Item key={item.id} {...item} />)}
      </Box>
    </Box>
  )
}

export default Home