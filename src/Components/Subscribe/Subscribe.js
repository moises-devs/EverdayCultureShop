import React, { useState } from 'react'
import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
function Subscribe() {
    const [email, setEmail] = useState('');
  return (
    <Box sx={{width:'80%', marginTop:4, marginX:'auto', textAlign:'center'}}>
        <IconButton>
            <MarkEmailReadOutlinedIcon fontSize="large"/>
        </IconButton>
        <Typography varaint="h3">Subsribe to Our Newsletter</Typography>
        <Typography> and recieve $15 voucher on your first order when you checkout</Typography>
        <Box sx={{
            width:"75%",
            marginX:'auto',
            marginY:2,
            padding:"2px 4px",
            display:'flex',
            alignItems:'center',
            background:'gainsboro'
        }}>
            <InputBase
            sx={{marginX:1, flex:1}}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>
            <Divider sx={{height:20, m:0.3}} orientation="vertical"/>
            <Typography sx={{p:'10px', '&:hover':{cursor:'pointer'}}}> Subscribe</Typography>
        </Box>
    </Box>
  )
}

export default Subscribe