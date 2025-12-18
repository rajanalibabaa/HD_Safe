import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

/* ===================== DESKTOP NAVBAR (UNCHANGED UI) ===================== */

const DesktopNavBar = ({ buttonLabels, scrollToSection }) => {
  const [activeCategory, setActiveCategory] = useState(1);

  const handleCategoryClick = (categoryId, label) => {
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
        minHeight: 120,
        bgcolor: '#ffffff7e',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1100,
      }}
    >
      <Box sx={{ width: '100%' }}>
        {/* First Row */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            mb: 1,
          }}
        >
          {firstRowLabels.map((label, index) => {
            const categoryId = index + 1;
            return (
              <Button
                key={index}
                variant={activeCategory === categoryId ? 'outlined' : 'text'}
                onClick={() => handleCategoryClick(categoryId, label)}
                sx={{
                  height: 36,
                  px: 1.5,
                  borderRadius: '25px',
                  fontWeight: activeCategory === categoryId ? 700 : 600,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>

        {/* Second Row */}
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {secondRowLabels.map((label, index) => {
            const categoryId = firstRowLabels.length + index + 1;
            return (
              <Button
                key={index}
                variant={activeCategory === categoryId ? 'outlined' : 'text'}
                onClick={() => handleCategoryClick(categoryId, label)}
                sx={{
                  height: 36,
                  px: 1.5,
                  borderRadius: '25px',
                  fontWeight: activeCategory === categoryId ? 700 : 600,
                  textTransform: 'none',
                  fontSize: '0.9rem',
                }}
              >
                {label}
              </Button>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};


const MobileFilterBar = ({ onOpen }) => (
  <Box
    sx={{
      position: 'sticky',
      top: 64,
      zIndex: 1200,
      bgcolor: '#fff',
      px: 2,
      py: 1,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
    }}
  >
    <Typography fontWeight={700} sx={{fontSize:"30px"}}>Products</Typography>

    <Button
      variant="outlined"
      startIcon={<FilterAltOutlinedIcon />}
      onClick={onOpen}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
      }}
    >
      Filter
    </Button>
  </Box>
);

/* ===================== MOBILE FILTER PANEL ===================== */

const MobileFilterPanel = ({
  open,
  onClose,
  buttonLabels,
  scrollToSection,
}) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '85%',
          maxWidth: 320,
          px: 2,
          py: 2,
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography fontWeight={700}>Filter</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Category List */}
      <Typography fontWeight={600} mb={1}>
        Categories
      </Typography>

      <Box>
        {buttonLabels.map((label, index) => (
          <Box
            key={index}
            onClick={() => {
              scrollToSection?.(index + 1);
              onClose();
            }}
            sx={{
              py: 1.3,
              borderBottom: '1px solid #eee',
              cursor: 'pointer',
              fontSize: '0.95rem',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

/* ===================== MAIN COMPONENT ===================== */

const ServiceNavBar = ({ scrollToSection }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [filterOpen, setFilterOpen] = useState(false);

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
        <DesktopNavBar
          buttonLabels={buttonLabels}
          scrollToSection={scrollToSection}
        />
      ) : (
        <>
          <MobileFilterBar onOpen={() => setFilterOpen(true)} />

          <MobileFilterPanel
            open={filterOpen}
            onClose={() => setFilterOpen(false)}
            buttonLabels={buttonLabels}
            scrollToSection={scrollToSection}
          />
        </>
      )}
    </>
  );
};

export default ServiceNavBar;
