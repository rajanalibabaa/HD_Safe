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

// === DesktopNavBar with Infinite Auto-Scroll + Hover Pause ===
const DesktopNavBar = ({ buttonLabels, scrollToSection }) => {
  const scrollContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeCategory, setActiveCategory] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const checkScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);

  const getItemWidth = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || container.children.length === 0) return 220;
    const firstItem = container.children[0];
    const style = window.getComputedStyle(firstItem);
    const width = firstItem.offsetWidth;
    const margin = (parseInt(style.marginLeft) || 0) + (parseInt(style.marginRight) || 0);
    return width + margin + 32; // gap + padding
  }, []);

  // Manual scroll by one item
  const scrollToDirection = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const itemWidth = getItemWidth();
    container.scrollBy({
      left: direction === 'left' ? -itemWidth : itemWidth,
      behavior: 'smooth',
    });
  };

  const handleCategoryClick = (categoryId, label) => {
    console.log(`Category clicked: ${label} (ID: ${categoryId})`);
    setActiveCategory(categoryId);
    scrollToSection?.(categoryId);
  };

  // Infinite Auto-Scroll (smooth + seamless)
  const autoScroll = useCallback(() => {
    if (!scrollContainerRef.current || isPaused) return;

    const container = scrollContainerRef.current;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    // When reaching near end → jump instantly to start (seamless loop)
    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      container.scrollTo({ left: 0, behavior: 'instant' });
    } else {
      // Slow smooth scroll (1px per frame ≈ 60fps = 60px/sec)
      container.scrollBy({ left: 1, behavior: 'smooth' });
    }

    animationFrameRef.current = requestAnimationFrame(autoScroll);
  }, [isPaused]);

  // Start auto-scroll on mount
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoScroll]);

  // Update arrow visibility
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => checkScrollButtons();
    const handleResize = () => checkScrollButtons();

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    setTimeout(checkScrollButtons, 200);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [checkScrollButtons]);

  return (
    <Box
      sx={{
        px: { xs: 1, lg: 1 },
        bgcolor: 'background.default',
        position: 'sticky',
        top: 62,
        zIndex: 1100,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Left Arrow */}
        <IconButton
          onClick={() => scrollToDirection('left')}
          disabled={!canScrollLeft}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            bgcolor: 'white',
            boxShadow: 3,
            p: 0.8,
            color: 'primary.main',
            '&:disabled': { opacity: 0.3, bgcolor: 'grey.200' },
            '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.1)' },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>

        {/* Scrollable Content - Duplicated for Infinite Loop */}
        <Box
          ref={scrollContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            flex: 1,
            display: 'flex',
            overflowX: 'hidden',
            gap: 0.5,
            py: 0.5,
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          {/* Duplicate labels twice for seamless infinite scroll */}
          {[...buttonLabels, ...buttonLabels].map((label, index) => {
            const originalIndex = index % buttonLabels.length;
            const categoryId = originalIndex + 1;

            return (
              <Button
                key={`${label}-${index}`}
                variant={activeCategory === categoryId ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handleCategoryClick(categoryId, label)}
                sx={{
                  minWidth: { md: '140px', lg: '160px' },
                  height: 28,
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  px: 2,
                  fontWeight: activeCategory === categoryId ? 700 : 600,
                  borderRadius: '25px',
                  textTransform: 'none',
                  fontSize: '0.55rem',
                  boxShadow: activeCategory === categoryId ? 4 : 1,
                  border: activeCategory === categoryId ? 'none' : '2px solid',
                  borderColor: 'primary.main',

                  transition: 'all 0.3s ease',
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => scrollToDirection('right')}
          disabled={!canScrollRight}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{
            bgcolor: 'white',
            boxShadow: 3,
            p: 0.8,
            color: 'primary.main',
            '&:disabled': { opacity: 0.3, bgcolor: 'grey.200' },
            '&:hover': { bgcolor: 'primary.main', color: 'white', transform: 'scale(1.1)' },
            transition: 'all 0.3s ease',
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>
    </Box>
  );
};

// === MobileDrawer Component (Unchanged - Beautiful Grid) ===
const MobileDrawer = ({ buttonLabels, drawerOpen, setDrawerOpen, scrollToSection }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategoryClick = (categoryId, label) => {
    console.log(`Category clicked: ${label} (ID: ${categoryId})`);
    setActiveCategory(categoryId);
    scrollToSection?.(categoryId);
    setDrawerOpen(false);
  };

  return (
    <>
      <Fab
        color="primary"
        aria-label="open categories"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: { xs: 20, sm: 30 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1300,
          width: { xs: 56, sm: 64 },
          height: { xs: 56, sm: 64 },
          boxShadow: 6,
          '&:hover': { transform: 'translateX(-50%) scale(1.1)', boxShadow: 10 },
          transition: 'all 0.3s ease',
        }}
      >
        <KeyboardArrowUpIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
      </Fab>

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
          <Typography variant="h6" fontWeight={700} color="primary">
            All Categories
          </Typography>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 2,
            px: 2,
            pb: 10,
            overflowY: 'auto',
            maxHeight: '70vh',
            '&::-webkit-scrollbar': { width: '6px' },
            '&::-webkit-scrollbar-track': { background: '#f1f1f1', borderRadius: '10px' },
            '&::-webkit-scrollbar-thumb': { background: '#c1c1c1', borderRadius: '10px' },
          }}
        >
          {buttonLabels.map((label, index) => {
            const categoryId = index + 1;
            return (
              <Button
                key={index}
                variant={activeCategory === categoryId ? 'contained' : 'outlined'}
                color="primary"
                onClick={() => handleCategoryClick(categoryId, label)}
                sx={{
                  height: { xs: 70, sm: 80 },
                  borderRadius: 3,
                  fontWeight: activeCategory === categoryId ? 700 : 600,
                  fontSize: { xs: '0.75rem', sm: '0.85rem' },
                  textTransform: 'none',
                  boxShadow: activeCategory === categoryId ? 3 : 1,
                  border: activeCategory === categoryId ? 'none' : '2px solid',
                  borderColor: 'primary.main',
                  '&:hover': {
                    boxShadow: 5,
                    transform: 'translateY(-2px)',
                    bgcolor: activeCategory === categoryId ? 'primary.dark' : 'primary.light',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>
      </Drawer>
    </>
  );
};

// === Main ServiceNavBar Component ===
const ServiceNavBar = ({ scrollToSection }) => {
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
    'Scaffolding & Surveying Testing Instruments',
  ];

  return (
    <>
      {isDesktop ? (
        <DesktopNavBar buttonLabels={buttonLabels} scrollToSection={scrollToSection} />
      ) : (
        <MobileDrawer
          buttonLabels={buttonLabels}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          scrollToSection={scrollToSection}
        />
      )}
    </>
  );
};

export default ServiceNavBar;