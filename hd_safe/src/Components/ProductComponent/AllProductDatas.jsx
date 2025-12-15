import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Box } from '@mui/material';
import ProductHeadingCard from './ProductHeadingCard';
import ProductDataCard from './ProductDataCard';
import { categories } from '../../utils/productCategories';

const AllProductDatas = forwardRef((props, ref) => {
  
  const sectionRefs = useRef({});

const scrollToCategory = (categoryId) => {
  console.log(`Scrolling to category ID: ${categoryId}`);
  const sectionId = `category-${categoryId}`;
  const section = sectionRefs.current[sectionId];
  
  if (section) {
    // Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      // Calculate offset more reliably
      const navbar = document.querySelector('header, .MuiAppBar-root, nav');
      const navbarHeight = navbar ? navbar.offsetHeight + 100 : 110; // Extra padding
      
      // Get the element's position relative to document
      const elementRect = section.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      
      // Calculate scroll position
      const scrollPosition = absoluteElementTop - navbarHeight;
      
      // Scroll to position
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      
    });
  } else {
    console.warn(`Section with ID ${sectionId} not found`);
    // Fallback: Try using native element scrolling
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }
};


  // Expose the scroll function to parent via ref
  useImperativeHandle(ref, () => ({
    scrollToCategory
  }));

  return (
    <Box sx={{ py: { xs: 0, md: 1.5 }, px: { xs: 0, md: 1 } }}>
      {categories.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <Box
            key={item.id}
            ref={(el) => {
              sectionRefs.current[`category-${item.id}`] = el;
            }}
            id={`category-${item.id}`}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: isEven ? 'row' : 'row-reverse' },
              alignItems: { xs: 'flex-start', lg: 'flex-start' },
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: `${index * 0.3}s`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(50px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              scrollMarginTop: '80px', // Adjust this based on your navbar height
              position: 'relative',
              transition: 'all 0.5s ease',

              // Create an invisible anchor point above the section
              '&::before': {
                content: '""',
                display: 'grid',
                position: 'absolute',
                top: '-80px', // Matches scrollMarginTop
                height: '100px',
                width: '80%',
                pointerEvents: 'none',
              },
              bgcolor:"white", boxShadow:10,
              // borderRadius:10,
              width:"90%",
              ml:{xs:2.5, sm:2, md:8},
              mb:-5
            }}
          >
            {/* Hero Image + Text Card */}
            <Box sx={{ flex: 1, width: '100%', maxWidth: { lg: '100%' }, }} >
              <ProductHeadingCard
                title={item.title}
                image={item.image}
                align={isEven ? 'left' : 'right'}
                onButtonClick={() => scrollToCategory(item.id)}
              />
            </Box>

            {/* Product Grid Card on Opposite Side */}
            <Box sx={{ flex: 1, width: '100%', maxWidth: { lg: '100%' } }}>
              <ProductDataCard
                products={item.products}
                headerTitle={item.title}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
});

export default AllProductDatas;