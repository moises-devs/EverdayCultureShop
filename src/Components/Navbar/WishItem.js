import { Box, Typography } from "@mui/material";
import React from "react";
import { shades } from "../UI/colorTheme";
import { useDispatch } from "react-redux";
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import { removeWish } from "../../Store/wishSlice";
function WishItem(props) {
    const dispatch = useDispatch();
    const removeWishHandler = () => {
        dispatch(removeWish(props.id))
    }
  return (
    <Box sx={{ position:'relative', my: 0.3, border:`.1rem solid ${shades.primary[500]}`, display: "flex", justifyContent: "space-between", alignItems:'center'
    , borderLeft:0, borderRight:0, borderTop:0 }}>
      <Box sx={{ width: "50%", height:'85%' }}>
        <img src={`http://localhost:1337${props.attributes?.img?.data[0]?.attributes?.formats?.medium?.url}`}
         alt={props.attributes.name} height="100%" width="100%" />
      </Box>
      <Box>
        <Typography variant="p" component="p" sx={{fontSize:{xs:8,sm:10,md:12,lg:14, xl:15}}}>
            {props.attributes.name}
        </Typography>
        <RemoveCircleOutlineOutlinedIcon sx={{position:'absolute', right:5, top:3}} onClick={removeWishHandler}/>
      </Box>
    </Box>
  );
}

export default WishItem;
