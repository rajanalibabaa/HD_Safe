import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';

const ProductDataCard = ({
  products = [],
  align = "left",
}) => {
  const scrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (products.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: 'center', color: 'text.secondary' }}>
        <Typography>No products available</Typography>
      </Box>
    );
  }

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = window.innerWidth < 600 ? 280 : 320;
      const gap = window.innerWidth < 600 ? 16 : 24;
      const scrollPosition = index * (cardWidth + gap);

      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });

      setCurrentIndex(index);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: {
          xs: '100%',
          sm: '100%',
          md: '90%',
          lg: '42vw',
          xl: '34vw'
        },
        height: {
          xs: 'auto',
          sm: 'auto',
          md: '60vh',
          lg: '73vh',
          xl: '70vh'
        },
        minHeight: {
          xs: '320px',
          sm: '360px',
          md: '420px',
          lg: '460px',
          xl: '520px'
        },
        borderRadius: { xs: 2, sm: 3, md: 4, lg: 4, xl: 6 },
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s ease',
        mx: 'auto',       // ⭐ Centered perfectly
        mb: { xs: 1, sm: 2, md: 3, lg: 3, xl: 4 },
      }}
    >

      {/* ------------------ MOBILE / TABLET SCROLL ------------------ */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: { xs: 'flex', sm: 'flex', md: 'none' },
          overflowX: 'auto',
          overflowY: 'hidden',
          py: { xs: 2, sm: 2.5 },
          px: { xs: 2, sm: 2.5 },
          gap: { xs: 2, sm: 3 },
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { height: 0 },
        }}
      >
        {products.map((product, index) => (
          <Card
            key={product.id}
            sx={{
              minWidth: { xs: 280, sm: 320 },
              width: { xs: 280, sm: 320 },
              flexShrink: 0,
              borderRadius: 2.5,
              overflow: 'hidden',
              cursor: 'pointer',
              border: '1px solid',
              borderColor: 'grey.200',
              opacity: index === currentIndex ? 1 : 0.7,
              transform: index === currentIndex ? 'scale(1.02)' : 'scale(0.97)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.04)',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              }
            }}
          >
            <Box sx={{ position: 'relative', paddingTop: '75%' }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>

            <CardContent sx={{ bgcolor: 'white', p: 2 }}>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  lineHeight: 1.3,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* ------------------ DESKTOP GRID ------------------ */}
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex' },
          flex: 1,
          overflowY: 'auto',
          p: { md: 1.5, lg: 2, xl: 2.5 },
          '&::-webkit-scrollbar': { width: 8 },
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: '10px'
          },
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              md: 'repeat(3, 1fr)',   // Laptop
              lg: 'repeat(3, 1fr)',   // Desktop
              xl: 'repeat(3, 1fr)'    // Large Desktop
            },
            gap: { md: 2, lg: 2.5, xl: 3 },
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.04)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                }
              }}
            >
              <Box sx={{ position: 'relative', paddingTop: '55%' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box>

              <CardContent sx={{ p: { md: 1.5, lg: 1.5, xl: 2 } }}>
                <Typography
                  variant="body2"
                  textAlign="center"
                  fontWeight={600}
                  sx={{
                    fontSize: { md: '0.85rem', lg: '0.8rem', xl: '1rem' },
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}
                >
                  {product.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDataCard;
