import React from 'react'
import { Box, Typography } from '@mui/material'
import { shades } from '../UI/colorTheme'
function Footer() {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', background:'gainsboro', paddingX:4, paddingY:5}}>
        <Box display="flex" flexDirection="column" alignItems="flex-start" sx={{width:{xs:'100%', lg:'30%'}, marginBottom:{xs:4, md:4}}}>
            <Typography color={shades.primary[500]} variant="h5" component="p" marginBottom={"4px"} >
                EveryDay Culture
            </Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, nulla a vestibulum suscipit, nunc risus blandit urna, nec imperdiet augue dolor sed nunc. Praesent dapibus venenatis leo id faucibus. Quisque aliquam mollis arcu eget dapibus. Proin at lectus sem. Etiam
            </Typography>
        </Box>
        <Box>
            <Typography variant="h5" fontWeight="bold" mb="25px">
                About Us
            </Typography>
            <Typography mb="25px"> Careers </Typography>
            <Typography mb="25px"> Our Stores </Typography>
            <Typography mb="25px"> Terms & Conditions </Typography>
            <Typography mb="25px"> Privacy Policy</Typography>
        </Box>
        <Box>
            <Typography variant="h5" fontWeight="bold" mb="25px">
                Customer Care
            </Typography>
            <Typography mb="25px"> Help Center</Typography>
            <Typography mb="25px"> Track Your Order </Typography>
            <Typography mb="25px"> Corporate & Bulk Purchases </Typography>
            <Typography mb="25px">Returns & Refunds</Typography>
        </Box>
        <Box>
            <Typography variant="h5" fontWeight="bold" mb="25px">
                Contact Us
            </Typography>
            <Typography mb="25px"> 432 North Bound Blvd, Los Angeles CA</Typography>
            <Typography mb="25px">EveryDayCulture@gmail.com</Typography>
            <Typography mb="25px">(323)-434-1211 </Typography>
        </Box>

    </Box>
  )
}

export default Footer