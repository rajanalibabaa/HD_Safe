// src/pages/ProductPage.jsx
import React from 'react';

import { Box } from '@mui/material';
import ServiceNavBar from './Components/ProductComponent/ServiceNavBar';
import ProductHeadingDatas from './Components/ProductComponent/AllProductDatas';

const ProductPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f8f9fc' }}>
      {/* Top Auto-Scrolling Navbar */}
      <ServiceNavBar />

      {/* Alternating Hero + Product Grid Sections */}
      <ProductHeadingDatas />
    </Box>
  );
};

export default ProductPage;