import React, { useState } from 'react';
import {
  Box,
  Button,
  Fab,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CloseIcon from '@mui/icons-material/Close';

const DesktopNavBar = ({ buttonLabels, scrollToSection }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategoryClick = (categoryId, label) => {
    console.log(`Category clicked: ${label} (ID: ${categoryId})`);
    setActiveCategory(categoryId);
    scrollToSection?.(categoryId);
  };

  const firstRowLabels = buttonLabels.slice(0, 7);
  const secondRowLabels = buttonLabels.slice(7);

  return (
    <Box
      sx={{
        width: '100%',
        px: { xs: 1, lg: 4 },
        py: 2,
        bgcolor: '#ffffff7e',
        position: 'static',
        top: 62,
        zIndex: 1100,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* First Row - Full width, evenly distributed */}
      <Box sx={{ 
        display: 'flex', 
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 0.5,
        mb: 1,
        flexWrap: 'nowrap',
      }}>
        {firstRowLabels.map((label, index) => {
          const categoryId = index + 1;
          return (
            <Button
              key={`${label}-${index}`}
              variant={activeCategory === categoryId ? 'outlined' : 'text'}
              color="black"
              onClick={() => handleCategoryClick(categoryId, label)}
              sx={{
                flex: '1 1 auto',
                minWidth: 'fit-content',
                maxWidth: '100%',
                height: 36,
                whiteSpace: 'nowrap',
                px: 1.5,
                fontWeight: activeCategory === categoryId ? 700 : 600,
                borderRadius: '25px',
                textTransform: 'none',
                fontSize: '0.90rem',
                // boxShadow: activeCategory === categoryId ? 4 : 1,
                // border: activeCategory === categoryId ? 'none' : '2px solid',
                // borderColor: 'primary.main',
                // transition: 'all 0.3s ease',
                // '&:hover': {
                //   boxShadow: 5,
                //   transform: 'translateY(-1px)',
                // },
              }}
            >
              {label}
            </Button>
          );
        })}
      </Box>

      {/* Second Row - Full width, evenly distributed */}
      <Box sx={{ 
        display: 'flex', 
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: 0.5,
        flexWrap: 'nowrap',
      }}>
        {secondRowLabels.map((label, index) => {
          const categoryId = firstRowLabels.length + index + 1;
          return (
            <Button
              key={`${label}-${firstRowLabels.length + index}`}
              variant={activeCategory === categoryId ? 'outlined' : 'text'}
              color="black"
              onClick={() => handleCategoryClick(categoryId, label)}
              sx={{
                flex: '1 1 auto',
                minWidth: 'fit-content',
                maxWidth: '100%',
                height: 36,
                whiteSpace: 'nowrap',
                px: 1.5,
                fontWeight: activeCategory === categoryId ? 700 : 600,
                borderRadius: '25px',
                textTransform: 'none',
                fontSize: '0.90rem',
                // boxShadow: activeCategory === categoryId ? 4 : 1,
                // border: activeCategory === categoryId ? 'none' : '2px solid',
                // borderColor: 'primary.main',
                // transition: 'all 0.3s ease',
                // '&:hover': {
                //   boxShadow: 5,
                //   transform: 'translateY(-1px)',
                // },
              }}
            >
              {label}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};

// === MobileDrawer Component ===
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