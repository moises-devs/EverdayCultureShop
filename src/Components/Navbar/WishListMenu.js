import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { shades } from '../UI/colorTheme';
import WishItem from './WishItem';
function WishListMenu(props) {
    const wishList = useSelector((state) => state.wish.wishes);
    console.log(wishList);
  return (
    <Box 
    sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent: `${wishList.length === 0 ? 'center' : 'flexStart'}`,
        width:{xs:'180px', sm:'200px', md:'210px'},
        height:{xs:'250px', sm:'250px', md:'300px'},
        background:shades.neutral[500],
        position:'absolute',
        bottom:{xs: '-250px',md:'-300px'},
        overflowY:'scroll',
        borderRadius:3,
    }}>
        <Box sx={{width:'25px', height:'25px', backgroundColor:shades.primary[500],
        position:'absolute',
        top:-15,
        transform:'rotate(45deg)'}}/>
        {wishList.length !== 0 && wishList.map(wish => <WishItem  key={wish.id} {...wish}/> )}
        {wishList.length === 0 && <p> Add Items to your WishList </p>}
    </Box>
  )
}

export default WishListMenu