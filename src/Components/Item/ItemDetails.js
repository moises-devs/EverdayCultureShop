import React from 'react'
import { useParams } from 'react-router'
import { Box } from '@mui/system';
function ItemDetails() {
  const params = useParams();
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Box sx={{height:250, width:250, }}>
        item details here
      </Box>
    </Box>
  )
}

export default ItemDetails