import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
  Fab,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';

// === DesktopNavBar Component ===
const DesktopNavBar = ({ buttonLabels }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position
  const checkScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);

  // Get item width for scrolling
  const getItemWidth = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || container.children.length === 0) return 220; // Default to button width
    const firstItem = container.children[0];
    const style = window.getComputedStyle(firstItem);
    const width = firstItem.offsetWidth;
    const margin = (parseInt(style.marginLeft) || 0) + (parseInt(style.marginRight) || 0);
    return width + margin + 32; // Added extra padding
  }, []);

  // Scroll function
  const scrollToDirection = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = getItemWidth();
    container.scrollBy({
      left: direction === 'left' ? -itemWidth : itemWidth,
      behavior: 'smooth',
    });
  };

  // Initialize and add event listeners
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => checkScrollButtons();
    const handleResize = () => checkScrollButtons();

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial check after a small delay to ensure DOM is ready
    setTimeout(() => checkScrollButtons(), 100);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [checkScrollButtons]);

  return (
    <Box
      sx={{
        py: 2,
        px: { xs: 2, lg: 4 },
        bgcolor: 'background.default',
        borderBottom: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255,255,255,0.92)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton
          onClick={() => scrollToDirection('left')}
          disabled={!canScrollLeft}
          sx={{
            bgcolor: 'white',
            boxShadow: 5,
            color: 'primary.main',
            '&:disabled': { 
              opacity: 0.3, 
              bgcolor: 'grey.200',
              cursor: 'not-allowed'
            },
            '&:hover': { 
              bgcolor: 'primary.main', 
              color: 'white',
              transform: 'scale(1.05)'
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Box
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          sx={{
            flex: 1,
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            py: 1,
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { 
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#c1c1c1',
              borderRadius: '10px',
              '&:hover': {
                background: '#a1a1a1'
              }
            },
            '-ms-overflow-style': 'auto',
            'scrollbar-width': 'thin',
          }}
        >
          {buttonLabels.map((label, index) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              sx={{
                minWidth: { md: '180px', lg: '220px' },
                height: 52,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                px: 3,
                fontWeight: 600,
                borderRadius: '30px',
                textTransform: 'none',
                boxShadow: 4,
                '&:hover': { 
                  boxShadow: 8, 
                  transform: 'translateY(-3px)' 
                },
                transition: 'all 0.3s ease',
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        <IconButton
          onClick={() => scrollToDirection('right')}
          disabled={!canScrollRight}
          sx={{
            bgcolor: 'white',
            boxShadow: 5,
            color: 'primary.main',
            '&:disabled': { 
              opacity: 0.3, 
              bgcolor: 'grey.200',
              cursor: 'not-allowed'
            },
            '&:hover': { 
              bgcolor: 'primary.main', 
              color: 'white',
              transform: 'scale(1.05)'
            },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

// === MobileDrawer Component ===
const MobileDrawer = ({ buttonLabels, drawerOpen, setDrawerOpen }) => {
  return (
    <>
      {/* Floating Button */}
      <Fab
        color="primary"
        aria-label="open categories"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1300,
          width: { xs: 56, sm: 64 },
          height: { xs: 56, sm: 64 },
          boxShadow: 8,
          '&:hover': { 
            transform: 'translateX(-50%) scale(1.1)',
            boxShadow: 12
          },
          transition: 'all 0.3s ease',
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
      </Fab>

      {/* Drawer */}
      <Drawer
        anchor="bottom"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            maxHeight: '85vh',
            py: 2,
            px: 2,
            bgcolor: 'background.paper',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          px: 2, 
          mb: 2 
        }}>
          <Typography variant="h6" fontWeight={700} color="primary">
            All Categories
          </Typography>
          <IconButton 
            onClick={() => setDrawerOpen(false)} 
            size="large"
            sx={{
              '&:hover': { bgcolor: 'grey.100' }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Grid of Buttons */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
            px: 2,
            pb: 10,
            overflowY: 'auto',
            maxHeight: '70vh',
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#c1c1c1',
              borderRadius: '10px',
            },
          }}
        >
          {buttonLabels.map((label, index) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              onClick={() => {
                console.log(`Selected: ${label}`);
                setDrawerOpen(false);
              }}
              sx={{
                height: { xs: 75, sm: 85 },
                borderRadius: 3,
                fontWeight: 600,
                fontSize: { xs: '0.75rem', sm: '0.9rem' },
                textTransform: 'none',
                boxShadow: 3,
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

// === Main ServiceNavBar Component ===
const ServiceNavBar = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const buttonLabels = [
    'Head Protection',
    'Eye Protection',
    'Respiratory Protection',
    'Ear Protection',
    'Face Protection',
    'Hand Protection',
    'Foot Protection',
    'Body Protection',
    'Fall Protection',
    'Road Safety',
    'Fire Safety',
    'Tools & Hardware Machinery',
    'Scaffolding & Surveying / Testing Instruments',
  ];

  return (
    <>
      {isDesktop ? (
        <DesktopNavBar buttonLabels={buttonLabels} />
      ) : (
        <MobileDrawer 
          buttonLabels={buttonLabels} 
          drawerOpen={drawerOpen} 
          setDrawerOpen={setDrawerOpen} 
        />
      )}
    </>
  );
};

export default ServiceNavBar;