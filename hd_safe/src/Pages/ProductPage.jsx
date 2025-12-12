import React, { useRef } from 'react'
import ServiceNavBar from '../Components/ProductComponent/ServiceNavBar'
import { Box } from '@mui/material'
import AllProductDatasModule from '../Components/ProductComponent/AllProductDatas'

const ProductPage = () => {
  // Create a ref to access AllProductDatas component methods
  const allProductDatasRef = useRef(null);

  // Function to scroll to a specific category
  const handleScrollToCategory = (categoryId) => {
    console.log(`Scrolling to category: ${categoryId}`);
    if (allProductDatasRef.current && allProductDatasRef.current.scrollToCategory) {
      allProductDatasRef.current.scrollToCategory(categoryId);
    }
  };

  return (
    <Box sx={{ mt: 10 }}>
      {/* Pass the scroll function to ServiceNavBar */}
      <ServiceNavBar scrollToSection={handleScrollToCategory} />
      
      {/* Resolve possible default interop and forward the ref to the component */}
      {(() => {
        const AllProductDatas = AllProductDatasModule && AllProductDatasModule.default ? AllProductDatasModule.default : AllProductDatasModule;
        if (!AllProductDatas) {
          console.error('AllProductDatas component is not found or is invalid:', AllProductDatasModule);
          return null;
        }

        if (typeof AllProductDatas !== 'function' && typeof AllProductDatas !== 'object') {
          console.error('AllProductDatas import is not a component (type):', typeof AllProductDatas);
          return null;
        }

        return <AllProductDatas ref={allProductDatasRef} />;
      })()}
    </Box>
  )
}

export default ProductPage