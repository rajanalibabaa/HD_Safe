import React from 'react'
import ServiceNavBar from '../Components/ProductComponent/ServiceNavBar'
import { Box, Grid } from '@mui/material'
import AllProductDatas from '../Components/ProductComponent/AllProductDatas'


const ProductPage = () => {
  return (
    <Box>
        <ServiceNavBar/>
        {/* <Grid sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}> */}
          <AllProductDatas/>
        {/* </Grid> */}
    </Box>
  )
}

export default ProductPage