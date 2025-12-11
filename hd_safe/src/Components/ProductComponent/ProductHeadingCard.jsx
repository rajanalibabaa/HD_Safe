import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ProductHeadingCard = ({
  title,
  image,
  align = "left",
}) => {
  if (!title && !image) return null;

  return (
    <Box
      sx={{
        width: {
          xs: '100%',     // Mobile: full width
          sm: '100%',     // Tablet: full width
          md: '90%',      // Laptop: 90% width
          lg: '90%',      // Desktop: 90% width
          xl: '90%'       // Large Desktop: 90% width
        },
        height: {
          xs: '40vh',     // Mobile
          sm: '50vh',     // Tablet
          md: '60vh',     // Laptop
          lg: '65vh',     // Desktop
          xl: '70vh'      // Large Desktop
        },
        /* Match ProductDataCard heights/minHeights for consistent layout */
        minHeight: {
          xs: '320px',
          sm: '360px',
          md: '420px',
          lg: '420px',
          xl: '520px'
        },
        position: 'relative',
        overflow: 'hidden',
        borderRadius: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 6,
          xl: 8
        },
        boxShadow: {
          xs: '0 4px 12px rgba(0,0,0,0.15)',
          sm: '0 6px 20px rgba(0,0,0,0.18)',
          md: '0 10px 30px rgba(0,0,0,0.20)',
          lg: '0 20px 50px rgba(0,0,0,0.25)',
          xl: '0 25px 60px rgba(0,0,0,0.30)'
        },
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.5s ease',
        cursor: 'pointer',
        mx: 'auto',
        mb: {
          xs: 1,    // Mobile: 8px
          sm: 2,    // Tablet: 16px
          md: 3,    // Laptop: 24px
          lg: 3,    // Desktop: 24px
          xl: 4     // Large Desktop: 32px
        },
        '&:hover': {
          transform: {
            xs: 'none',
            sm: 'none',
            md: 'translateY(-8px) scale(1.02)',
            lg: 'translateY(-12px) scale(1.02)',
            xl: 'translateY(-15px) scale(1.02)'
          },
          boxShadow: {
            xs: '0 4px 12px rgba(0,0,0,0.15)',
            sm: '0 6px 20px rgba(0,0,0,0.18)',
            md: '0 20px 50px rgba(0,0,0,0.25)',
            lg: '0 35px 70px rgba(0,0,0,0.30)',
            xl: '0 45px 90px rgba(0,0,0,0.35)'
          },
        },
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: align === 'right'
            ? {
                xs: 'linear-gradient(270deg, rgba(0,0,0,0.85), rgba(0,0,0,0.4))',
                sm: 'linear-gradient(270deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
                md: 'linear-gradient(270deg, rgba(0,0,0,0.75), rgba(0,0,0,0.25))'
              }
            : {
                xs: 'linear-gradient(90deg, rgba(0,0,0,0.85), rgba(0,0,0,0.4))',
                sm: 'linear-gradient(90deg, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
                md: 'linear-gradient(90deg, rgba(0,0,0,0.75), rgba(0,0,0,0.25))'
              },
        }}
      />

      {/* Content Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          color: 'white',
          px: {
            xs: 1.5,    // Mobile: 16px
            sm: 2,    // Tablet: 24px
            md: 3,    // Laptop: 32px
            lg: 4,    // Desktop: 48px
            xl: 5     // Large Desktop: 64px
          },
          py: {
            xs: 1.5,    // Mobile: 16px
            sm: 2,    // Tablet: 24px
            md: 3,    // Laptop: 32px
            lg: 3,    // Desktop: 32px
            xl: 3.5     // Large Desktop: 40px
          },
          width: '100%',
          maxWidth: {
            xs: '100%',      // Mobile: full
            sm: '90%',       // Tablet: 90%
            md: '80%',       // Laptop: 80%
            lg: '70%',       // Desktop: 70%
            xl: '65%'        // Large Desktop: 65%
          },
          textAlign: {
            xs: 'center',
            sm: 'center',
            md: align,
          },
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            xs: 'center',
            sm: 'center',
            md: align === 'right' ? 'flex-end' : 'flex-start',
            lg:'center'
          }
        }}
      >
        {/* Title */}
        {title && (
          <Typography
            variant="h1"
            sx={{
              fontWeight: {
                xs: 700,
                sm: 800,
                md: 900
              },
              fontSize: {
                xs: '2rem',     // Mobile: 32px
                sm: '2.5rem',   // Tablet: 40px
                md: '3rem',     // Laptop: 48px
                lg: '2.5rem',   // Desktop: 56px
                xl: '4rem'      // Large Desktop: 64px
              },
              lineHeight: {
                xs: 1.2,
                sm: 1.15,
                md: 1.1
              },
              mb: {
                xs: 1.5,    // Mobile: 12px
                sm: 2,      // Tablet: 16px
                md: 2.5,    // Laptop: 20px
                lg: 3,      // Desktop: 24px
                xl: 3.5     // Large Desktop: 28px
              },
              textShadow: '0 2px 10px rgba(0,0,0,0.8)',
              textAlign: 'left' ,
            }}
          >
            {title}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductHeadingCard;