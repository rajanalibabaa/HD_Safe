// src/components/ProductComponent/ProductHeadingDatas.jsx
import React from 'react';
import { Box } from '@mui/material';
import ProductHeadingCard from './ProductHeadingCard';
import ProductDataCard from './ProductDataCard';

const ProductHeadingDatas = () => {
  const categories = [
    {
      id: 1,
      title: "Head Protection",
      subtitle: "Industrial-grade helmets with ANSI Z89.1 certification",
      image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600",
      buttonText: "View Helmets",
      products: [
        { id: 101, name: "Hard Hat Pro", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 102, name: "Full Brim Helmet", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 103, name: "Welding Helmet", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 104, name: "Climbing Safety Cap", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 105, name: "Hard Hat Pro", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 106, name: "Full Brim Helmet", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 107, name: "Welding Helmet", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 108, name: "Climbing Safety Cap", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 109, name: "Hard Hat Pro", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 110, name: "Full Brim Helmet", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 111, name: "Welding Helmet", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 112, name: "Climbing Safety Cap", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
      ]
    },
    {
      id: 2,
      title: "Hand & Arm Safety",
      subtitle: "Cut-resistant gloves rated Level 5+ protection",
      image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600",
      buttonText: "Shop Gloves",
      products: [
        { id: 201, name: "Cut Level 5 Gloves", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 202, name: "Chemical Resistant", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 203, name: "Anti-Vibration", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 204, name: "Thermal Insulated", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 205, name: "Cut Level 5 Gloves", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 206, name: "Cut Level 5 Gloves", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 207, name: "Cut Level 5 Gloves", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 208, name: "Cut Level 5 Gloves", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 209, name: "Cut Level 5 Gloves", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 2010, name: "Cut Level 5 Gloves", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },

      ]

    },
    {
      id: 3,
      title: "Eye & Face Protection",
      subtitle: "Anti-fog, impact-resistant safety goggles & shields",
      image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600",
      buttonText: "Explore Now",
      products: [
        { id: 301, name: "Anti-Fog Goggles", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 302, name: "Full Face Shield", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 303, name: "Polarized Glasses", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 304, name: "Welding Goggles", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
      ]
    },
    {
      id: 4,
      title: "Fall Protection",
      subtitle: "Full-body harnesses and shock-absorbing lanyards",
      image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600",
      buttonText: "See Systems",
      products: [
        { id: 401, name: "Full Body Harness", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 402, name: "Shock Absorber", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 403, name: "Self-Retracting Lifeline", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
        { id: 404, name: "Roof Anchor Kit", image: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?w=600" },
      ]
    }
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
      {categories.map((item, index) => {
        const isEven = index % 2 === 0;

        return (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: isEven ? 'row' : 'row-reverse' },
              alignItems: 'center',
              gap: { xs: 6, lg: 8 },
              mb: { xs: 12, lg: 20 },
              opacity: 0,
              animation: 'fadeInUp 0.8s ease-out forwards',
              animationDelay: `${index * 0.3}s`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(50px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {/* Hero Image + Text Card */}
            <Box sx={{ flex: 1, width: '100%', maxWidth: { lg: '50%' } }}>
              <ProductHeadingCard
                title={item.title}
                subtitle={item.subtitle}
                image={item.image}
                align={isEven ? 'left' : 'right'}
                buttonText={item.buttonText}
                onButtonClick={() => console.log(`${item.title} clicked`)}
              />
            </Box>

            {/* Product Grid Card on Opposite Side */}
            <Box sx={{ flex: 1, width: '100%', maxWidth: { lg: '50%' } }}>
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
};

export default ProductHeadingDatas;