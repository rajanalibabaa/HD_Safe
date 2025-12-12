import React, { useRef, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProductDataCard = ({
  products = [],
  align = "left",
  headerTitle = "Featured Products"
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
      const scrollPosition = index * (cardWidth + (window.innerWidth < 600 ? 16 : 24));
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    if (currentIndex < products.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: {
          xs: '100%',     // Mobile: full width
          sm: '100%',     // Tablet: full width
          md: '90%',      // Laptop: 90% width
          lg: '43vw',     // Desktop: 40% viewport width
          xl: '35vw'      // Large Desktop: 35% viewport width
        },
        height: {
          xs: 'auto',     // Mobile: auto height
          sm: 'auto',     // Tablet: auto height
          md: '60vh',     // Laptop: 60% viewport height
          lg: '73vh',     // Desktop: 65% viewport height
          xl: '70vh'      // Large Desktop: 70% viewport height
        },
        minHeight: {
          xs: '320px',    // Mobile: minimum 320px
          sm: '360px',    // Tablet: minimum 360px
          md: '420px',    // Laptop: minimum 420px
          lg: '420px',    // Desktop: minimum 460px
          xl: '520px'     // Large Desktop: minimum 520px
        },

        borderRadius: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 4,
          xl: 8
        },
       
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',

        transition: 'all 0.4s ease',
        mx: 'auto',
        mb: {
          xs: 1,    // Mobile: 8px
          sm: 2,    // Tablet: 16px
          md: 3,    // Laptop: 24px
          lg: 3,    // Desktop: 24px
          xl: 4     // Large Desktop: 32px
        },

      }}
    >
      {/* Header */}

      {/* Mobile & Tablet: HORIZONTAL SCROLL CONTAINER */}
      <Box
        ref={scrollContainerRef}
        sx={{
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none'
          },
          overflowX: 'auto',
          overflowY: 'hidden',
          py: {
            xs: 2,    // Mobile: 16px
            sm: 3     // Tablet: 24px
          },
          px: {
            xs: 2,    // Mobile: 16px
            sm: 3     // Tablet: 24px
          },
          gap: {
            xs: 2,    // Mobile: 16px gap
            sm: 3     // Tablet: 24px gap
          },
          bgcolor: '#fafafa',
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': {
            height: '0px', // Hide scrollbar
          },
        }}
      >
        {products.map((product, index) => (
          <Card
            key={product.id}
            sx={{
              minWidth: {
                xs: '280px',   // Mobile: 280px wide cards
                sm: '320px'    // Tablet: 320px wide cards
              },
              width: {
                xs: '280px',
                sm: '320px'
              },
              flexShrink: 0,
              borderRadius: {
                xs: 2,
                sm: 3
              },
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid',
              borderColor: 'grey.200',
              opacity: index === currentIndex ? 1 : 0.7,
              transform: index === currentIndex ? 'scale(1.02)' : 'scale(0.98)',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
              },
            }}
          >
            <Box sx={{
              position: 'relative',
              paddingTop: '75%',
              overflow: 'hidden'
            }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                loading="lazy"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
              />
            </Box>
            <CardContent sx={{
              p: {
                xs: 2,    // Mobile: 16px
                sm: 2.5   // Tablet: 20px
              },
              pb: {
                xs: '16px !important',
                sm: '20px !important'
              },
              bgcolor: 'white',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <Typography
                variant="h6"
                fontWeight={600}
                color="text.primary"
                sx={{
                  fontSize: {
                    xs: '0.9375rem', // Mobile: 15px
                    sm: '1rem'  ,    // Tablet: 16px
                  },
                  lineHeight: 1.3,
                  mb: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {product.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Desktop & Laptop: VERTICAL SCROLL GRID */}
      <Box
        sx={{
          display: {
            xs: 'none',
            sm: 'none',
            md: 'flex'
          },
          flex: 1,
          overflowY: 'auto',
          p: {
            md: 1.5,    // Laptop: 12px
            lg: 2,      // Desktop: 16px
            xl: 2.5     // Large Desktop: 20px
          },
          // bgcolor: '#fafafa',
          '&::-webkit-scrollbar': {
            width: {
              md: '6px',
              lg: '10px',
              xl: '10px'
            }
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#ccc',
            borderRadius: '10px',
            '&:hover': {
              background: '#aaa'
            }
          },
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              md: 'repeat(3, 1fr)',   // Laptop: 3 columns
              lg: 'repeat(3, 1fr)',   // Desktop: 2 columns
              xl: 'repeat(3, 1fr)'    // Large Desktop: 3 columns
            },
            gap: {
              md: 2.5,    // Laptop: 20px
              lg: 2,      // Desktop: 24px
              xl: 3.5     // Large Desktop: 28px
            },
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                borderRadius: {
                  md: 3,
                  lg: 3.5,
                  xl: 4
                },
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: {
                    md: 'translateY(-6px) scale(1.03)',
                    lg: 'translateY(-8px) scale(1.04)',
                    xl: 'translateY(-10px) scale(1.05)'
                  },
                  boxShadow: {
                    md: '0 15px 35px rgba(0,0,0,0.15)',
                    lg: '0 20px 45px rgba(0,0,0,0.18)',
                    xl: '0 25px 50px rgba(0,0,0,0.20)'
                  },
                },
              }}
            >
              <Box sx={{
                position: 'relative',
                paddingTop: '53%',
                overflow: 'hidden'
              }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s ease'
                    
                  }}
                />
              </Box>
              <CardContent sx={{
                p: {
                  md: 2,
                  lg: 1,
                  xl: 3
                },
                pb: {
                  md: '16px !important',
                  lg: '20px !important',
                  xl: '24px !important'
                },
                bgcolor: 'white'
              }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  color="text.primary"
                  sx={{
                    fontSize: {
                      md: '0.875rem',
                      lg: '0.7rem',
                      xl: '1rem'
                    },
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign:'center'
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