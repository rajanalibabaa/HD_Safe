// ProductDataCard.jsx
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
          lg: '40vw',     // Desktop: 40% viewport width
          xl: '35vw'      // Large Desktop: 35% viewport width
        },
        height: {
          xs: 'auto',     // Mobile: auto height
          sm: 'auto',     // Tablet: auto height
          md: '75vh',     // Laptop: 75% viewport height
          lg: '80vh',     // Desktop: 80% viewport height
          xl: '85vh'      // Large Desktop: 85% viewport height
        },
        minHeight: {
          xs: '380px',    // Mobile: minimum 380px
          sm: '420px',    // Tablet: minimum 420px
          md: '550px',    // Laptop: minimum 550px
          lg: '600px',    // Desktop: minimum 600px
          xl: '650px'     // Large Desktop: minimum 650px
        },
        bgcolor: 'background.paper',
        borderRadius: {
          xs: 2,
          sm: 3,
          md: 4,
          lg: 4,
          xl: 8
        },
        boxShadow: {
          xs: '0 4px 12px rgba(0,0,0,0.08)',
          sm: '0 6px 20px rgba(0,0,0,0.10)',
          md: '0 8px 28px rgba(0,0,0,0.12)',
          lg: '0 10px 30px rgba(0,0,0,0.15)',
          xl: '0 12px 35px rgba(0,0,0,0.18)'
        },
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'grey.300',
        transition: 'all 0.4s ease',
        mx: 'auto',
        mb: {
          xs: 2,    // Mobile: 16px
          sm: 3,    // Tablet: 24px
          md: 4,    // Laptop: 32px
          lg: 5,    // Desktop: 40px
          xl: 6     // Large Desktop: 48px
        },
        '&:hover': {
          transform: {
            xs: 'none',
            sm: 'none',
            md: 'translateY(-5px)',
            lg: 'translateY(-8px)',
            xl: 'translateY(-10px)'
          },
          boxShadow: {
            xs: '0 4px 12px rgba(0,0,0,0.08)',
            sm: '0 6px 20px rgba(0,0,0,0.10)',
            md: '0 15px 40px rgba(0,0,0,0.15)',
            lg: '0 20px 50px rgba(0,0,0,0.18)',
            xl: '0 25px 60px rgba(0,0,0,0.20)'
          },
        },
      }}
    >
      {/* Header */}
      <Box sx={{
        px: {
          xs: 2,    // Mobile: 16px
          sm: 3,    // Tablet: 24px
          md: 4,    // Laptop: 32px
          lg: 5,    // Desktop: 40px
          xl: 6     // Large Desktop: 48px
        },
        py: {
          xs: 1.5,  // Mobile: 12px
          sm: 2,    // Tablet: 16px
          md: 2.5,  // Laptop: 20px
          lg: 3,    // Desktop: 24px
          xl: 3.5   // Large Desktop: 28px
        },
        bgcolor: 'primary.main',
        display: 'flex',
        flexDirection: 'row',            // This is what you need
        justifyContent: 'space-between', // This pushes items to opposite sides
        alignItems: 'center',            // Vertically centers items
        width: '100%',
        flexShrink: 0,
      }}>
        <Box>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{
              fontSize: {
                xs: '1.1rem',   // Mobile: 17.6px
                sm: '1.3rem',   // Tablet: 20.8px
                md: '1.4rem',   // Laptop: 22.4px
                lg: '1.5rem',   // Desktop: 24px
                xl: '1.6rem'    // Large Desktop: 25.6px
              },
              lineHeight: 1.2,
            }}
          >
            {headerTitle}
          </Typography>
          <Typography
            variant="body2"
            opacity={0.9}
            sx={{
              fontSize: {
                xs: '0.75rem',   // Mobile: 12px
                sm: '0.8125rem', // Tablet: 13px
                md: '0.875rem',  // Laptop: 14px
                lg: '0.9375rem', // Desktop: 15px
                xl: '1rem'       // Large Desktop: 16px
              },
               whiteSpace: 'nowrap', // Prevents text wrapping
              mt: 0.5,
              

            }}
          >
            {products.length} items available
          </Typography>
        </Box>

        {/* Mobile/Tablet Navigation */}
        <Box sx={{
          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none'
          },
          gap: 1,
          alignItems: 'center'
        }}>
          <Typography
            variant="caption"
            sx={{
              color: 'white',
              fontSize: {sm:'1rem',xs:'0.75rem'},
              mr: {xs:4,sm:12}
              
            }}
          >
            {currentIndex + 1} / {products.length}
          </Typography>
          <IconButton
            onClick={scrollPrev}
            disabled={currentIndex === 0}
            sx={{
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              '&.Mui-disabled': { opacity: 0.3 },
              width: 32,
              height: 32,
              right:{xs:18,sm:40}
            }}
          >
            <ChevronLeftIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={scrollNext}
            disabled={currentIndex === products.length - 1}
            sx={{
              color: 'white',
              bgcolor: 'rgba(255,255,255,0.1)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
              '&.Mui-disabled': { opacity: 0.3 },
              width: 32,
              height: 32,
              right:{xs:18,sm:40}
            }}
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

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
                    sm: '1rem'       // Tablet: 16px
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

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {product.price && (
                  <Typography
                    variant="h6"
                    color="primary.main"
                    fontWeight={700}
                    sx={{
                      fontSize: {
                        xs: '0.9375rem', // Mobile: 15px
                        sm: '1rem'       // Tablet: 16px
                      }
                    }}
                  >
                    ${product.price}
                  </Typography>
                )}

                {product.rating && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: '0.75rem',
                        sm: '0.8125rem'
                      },
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    ⭐ {product.rating}
                  </Typography>
                )}
              </Box>
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
            md: 3,    // Laptop: 24px
            lg: 4,    // Desktop: 32px
            xl: 5     // Large Desktop: 40px
          },
          bgcolor: '#fafafa',
          '&::-webkit-scrollbar': {
            width: {
              md: '6px',
              lg: '8px',
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
          flexDirection: 'column'
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
              lg: 3,      // Desktop: 24px
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
                  md: 2,
                  lg: 2.5,
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
                      lg: '0.9375rem',
                      xl: '1rem'
                    },
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
                {product.price && (
                  <Typography
                    variant="caption"
                    color="primary.main"
                    fontWeight={700}
                    sx={{
                      fontSize: {
                        md: '0.75rem',
                        lg: '0.8125rem',
                        xl: '0.875rem'
                      }
                    }}
                  >
                    ${product.price}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
            xl: 6
          },
          py: {
            xs: 1.5,
            sm: 2,
            md: 2,
            lg: 2.5,
            xl: 3
          },
          bgcolor: 'grey.50',
          borderTop: '1px solid',
          borderColor: 'grey.300',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexShrink: 0
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            fontSize: {
              xs: '0.7rem',
              sm: '0.75rem',
              md: '0.8125rem',
              lg: '0.875rem',
              xl: '0.9375rem'
            }
          }}
        >
          {/* Mobile/Tablet */}
          <Box component="span" sx={{ display: { xs: 'inline', sm: 'inline', md: 'none' } }}>
            Tap arrows or swipe to navigate
          </Box>

          {/* Desktop/Laptop */}
          <Box component="span" sx={{ display: { xs: 'none', sm: 'none', md: 'inline' } }}>
            Scroll to explore more products
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDataCard;