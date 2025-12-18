import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { alpha } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { label: "HOME", path: "/", icon: <HomeIcon fontSize="small" /> },
  { label: "ABOUT US", path: "/aboutus", icon: <InfoIcon fontSize="small" /> },
  { label: "PRODUCTS", path: "/products", icon: <StorefrontIcon fontSize="small" /> },
  { label: "CONTACT US", path: "/contact", icon: <ContactMailIcon fontSize="small" /> },
];

const useScrolled = (threshold = 12) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
};

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Color fallbacks
  const PRIMARY = theme?.palette?.primary?.main ?? "#FF4D00"; 
  const SECONDARY = theme?.palette?.secondary?.main ?? "#2B2B2B";
  const WHITE = theme?.palette?.common?.white ?? "#FFFFFF";
  const TEXT_DEFAULT = theme?.palette?.text?.primary ?? "#2B2B2B";

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 0}
        sx={{
          background: scrolled ? alpha(SECONDARY, 0.08) : "transparent",
          backdropFilter: scrolled ? "saturate(120%) blur(6px)" : "none",
          transition: "all 220ms ease",
          px: { xs: 1, sm: 2 },
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              minHeight: scrolled ? { xs: 64, sm: 72 } : { xs: 70, sm: 90, md: 120 },
              transition: "min-height 220ms ease",
              // display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
           

            {/* DESKTOP VIEW: Logo (Left) */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                transform: scrolled ? "scale(0.82)" : "scale(1)",
                transformOrigin: "left center",
                transition: "transform 220ms ease",
                ml: { md: 2 },
              }}
            >
              <Box
                component="img"
                src="/LogoBg.png"
                alt="Logo"
                sx={{
                  height: scrolled ? 56 : { md: 80, lg: 90 },
                  width: 'auto',
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* MOBILE VIEW: Logo (Right) */}
            {isMobile && (
              <Box
                component={RouterLink}
                to="/"
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  alignItems: "center",
                  textDecoration: "none",
                  color: "inherit",
                  transform: scrolled ? "scale(0.85)" : "scale(1)",
                  transformOrigin: "center",
                  transition: "transform 220ms ease",
                }}
              >
                <Box
                  component="img"
                  src="/LogoBg.png"
                  alt="Logo"
                  sx={{
                    height: scrolled ? 50 : { xs: 55, sm: 60 },
                    width: 'auto',
                    objectFit: "contain",
                  }}
                />
              </Box>
            )}

            {/* DESKTOP VIEW: Navigation Center */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
                position: "relative",
              }}
            >
              {navItems.map((item) => {
                const active = location?.pathname === item.path;
                return (
                  <Button
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    startIcon={item.icon}
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 0.6,
                      px: 2.5,
                      py: 1,
                      borderRadius: 50,
                      color: WHITE,
                      background: active ? PRIMARY : alpha(SECONDARY, 0.7),
                      transition: "all 220ms ease",
                      onClick: () => window.scrollTo(0, 0) ,// Scroll to top on click,
                      boxShadow: active
                        ? `0 0 8px ${alpha(PRIMARY, 0.4)}`
                        : "none",
                      '&:hover': {
                        background: active ? PRIMARY : alpha(PRIMARY, 0.8),
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

         

            {/* Mobile Menu Button (Centered between contact button and logo) */}
            {isMobile && (
              <IconButton
                onClick={() => setOpen(true)}
                sx={{
                  color: WHITE,
                  background: alpha(SECONDARY, 0.3),
                  backdropFilter: 'blur(4px)',
                  border: `1px solid ${alpha(WHITE, 0.1)}`,
                  '&:hover': {
                    background: alpha(SECONDARY, 0.5),
                  },
                }}
              >
                <MenuIcon sx={{ fontSize: 24 }} />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            background: `linear-gradient(135deg, ${alpha(PRIMARY, 0.12)} 0%, ${alpha(
              SECONDARY,
              0.95
            )} 100%)`,
            backdropFilter: "blur(18px)",
            borderLeft: `1px solid ${alpha(WHITE, 0.24)}`,
            width: { xs: 280, sm: 320 },
          },
        }}
      >
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ height: "100%" }}
        >
          <Box
            sx={{
              p: 2,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              color: WHITE,
            }}
          >
            {/* Top Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, letterSpacing: 0.5, color: WHITE }}
              >
                Menu
              </Typography>

              <IconButton 
                onClick={() => setOpen(false)} 
                sx={{ 
                  color: WHITE,
                  background: alpha(WHITE, 0.1),
                  '&:hover': {
                    background: alpha(WHITE, 0.2),
                  }
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Divider sx={{ mb: 2, borderColor: alpha(WHITE, 0.2) }} />

            {/* Menu List */}
            <List sx={{ flexGrow: 1 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                >
                  <ListItemButton
                    component={RouterLink}
                    to={item.path}
                    selected={location?.pathname === item.path}
                    onClick={() => setOpen(false)}
                    sx={{
                      borderRadius: 2,
                      my: 0.5,
                      color: WHITE,
                      '&.Mui-selected': {
                        background: alpha(PRIMARY, 0.3),
                        color: WHITE,
                        '&:hover': {
                          background: alpha(PRIMARY, 0.4),
                        },
                      },
                      '&:hover': {
                        background: alpha(WHITE, 0.15),
                      },
                    }}
                  >
                    <ListItemIcon sx={{ 
                      color: location?.pathname === item.path ? PRIMARY : WHITE,
                      minWidth: 40
                    }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.label} 
                      primaryTypographyProps={{
                        fontWeight: location?.pathname === item.path ? 700 : 500,
                        fontSize: '1rem'
                      }}
                    />
                  </ListItemButton>
                </motion.div>
              ))}
            </List>

            
          </Box>
        </motion.div>
      </Drawer>
    </>
  );
}