import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Box, Link } from '@mui/material';
import Item from '../Components/Item/Item';
import women from "../Components/UI/gbarkz-vqKnuG8GaQc-unsplash.jpg";
import dress from "../Components/UI/mark-adriane-V7IJzp_ElQc-unsplash.jpg";
function Home() {
  const cartItems = [
    {
      img: women,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      promo: 'New',
      id: Math.random() * 32,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: dress,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: Math.random() * 32,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: women,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: Math.random() * 32,
    },
    {
      img: women,
      promo:'BEST SELLER',
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: Math.random() * 32,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: dress,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: Math.random() * 32,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: women,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: Math.random() * 32,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
    {
      img: dress,
      name: "Evening text Dress",
      price: 12.99,
      amount: 0,
      id: Math.random() * 32,
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    },
  ];
  return (
    <Box sx={{ maxWidth:'1500px', marginX: 'auto', display:'flex', flexWrap:'wrap', justifyContent:'center', paddingX:0}}>
      {cartItems.map(item => <Item key={item.id} {...item} />)}
    </Box>
  )
}

export default Home