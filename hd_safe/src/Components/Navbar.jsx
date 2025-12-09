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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { useTheme, alpha } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const navItems = [
  { label: "HOME", path: "/", icon: <HomeIcon fontSize="small" /> },
  { label: "ABOUT US", path: "/about", icon: <InfoIcon fontSize="small" /> },
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
  const scrolled = useScrolled(10);
  const [open, setOpen] = useState(false);
  const location = useLocation(); // for active item

  // color fallbacks (if theme not set)
  const PRIMARY = theme?.palette?.primary?.main ?? "#FF4D00"; // safety orange
  const SECONDARY = theme?.palette?.secondary?.main ?? "#2B2B2B"; // steel grey
  const WHITE = theme?.palette?.common?.white ?? "#FFFFFF";
  const TEXT_DEFAULT = theme?.palette?.text?.primary ?? "#2B2B2B"; // "normal" text color

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 0}
        sx={{
          background: scrolled ? alpha(SECONDARY, 0.08) : "transparent",
          backdropFilter: scrolled ? "saturate(120%) blur(6px)" : "none",
          transition: "all 220ms ease",
          px: 2,
        }}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            disableGutters
            sx={{
              minHeight: scrolled ? 72 : 120,
              transition: "min-height 220ms ease",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Left: Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                transform: scrolled ? "scale(0.82)" : "scale(1)",
                transformOrigin: "left center",
                transition: "transform 220ms ease",
              }}
            >
              <Box
                component="img"
                src="/LogoBg.png"
                alt="Logo"
                sx={{ height: scrolled ? 56 : 90, objectFit: "contain", display: "block" }}
              />
            </Box>

            {/* Center: Navigation (hidden on small screens) */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
                position: "relative",
              }}
            >
              {navItems.map((item) => {
                const active = location?.pathname === item.path;
                const textColor = active ? PRIMARY : scrolled ? WHITE : TEXT_DEFAULT;

                return (
                  <Button
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    startIcon={item.icon}
                 sx={{
  fontWeight: 900,
  letterSpacing: 0.6,
  px: 2.5,
  py: 1,
  borderRadius: 50,
  color: WHITE,
  background: ` ${PRIMARY} `,
  transition: "all 220ms ease",

  // makes active item bolder
  boxShadow: active
    ? `0 0 8px ${alpha(PRIMARY, 0.4)}`
    : "none",

  "&:hover": {
    opacity: 0.9,
  },
}}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>

            {/* Right: actions */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, ml: "auto" }}>
              {/* Gradient pill CTA — always visible on desktop */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  background: `linear-gradient(90deg, ${PRIMARY} 0%, ${SECONDARY} 100%)`,
                  px: 3,
                  py: 0.9,
                  borderRadius: 999,
                  boxShadow: `0 6px 18px ${alpha(SECONDARY, 0.18)}`,
                }}
              >
                <Button
                  variant="text"
                  href="/contact"
                  sx={{
                    color: WHITE,
                    fontWeight: 700,
                    textTransform: "none",
                    "&:hover": { background: "transparent", opacity: 0.96 },
                    pr: 0,
                  }}
                >
                  Get A Quote
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  size="small"
                  sx={{
                    ml: 1.5,
                    background: alpha(WHITE, 0.12),
                    color: WHITE,
                    boxShadow: "none",
                    textTransform: "none",
                    borderRadius: 2,
                    "&:hover": { background: alpha(WHITE, 0.18) },
                  }}
                >
                  Contact
                </Button>
              </Box>

             {/* Mobile Hamburger */}
<IconButton

  edge="end"
  aria-label="menu"
  onClick={() => setOpen(true)}
  sx={{
    color: WHITE, 
    display: { md: "none" }, 
  }}
>
  <MenuIcon />
</IconButton>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
   {/* Mobile Drawer */}
<Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
  PaperProps={{
    sx: {
      background: `linear-gradient(135deg, ${alpha(PRIMARY, 0.12)} 0%, ${alpha(
        SECONDARY,
        0.85
      )} 100%)`,
      backdropFilter: "blur(18px)",
      borderLeft: `1px solid ${alpha(WHITE, 0.24)}`,
      width: 320,
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

        <IconButton onClick={() => setOpen(false)} sx={{ color: WHITE }}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 1, borderColor: alpha(WHITE, 0.2) }} />

      {/* Menu List */}
      <List sx={{ flexGrow: 1 }}>
        {navItems.map((item) => (
          <motion.div
            key={item.label}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
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
                "&.Mui-selected": {
                  background: alpha(PRIMARY, 0.25),
                  color: WHITE,
                },
                "&:hover": {
                  background: alpha(WHITE, 0.12),
                },
              }}
            >
              <ListItemIcon sx={{ color: WHITE }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </motion.div>
        ))}
      </List>

      <Divider sx={{ my: 1, borderColor: alpha(WHITE, 0.2) }} />

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Button
          fullWidth
          variant="contained"
          component={RouterLink}
          to="/contact"
          onClick={() => setOpen(false)}
          sx={{
            background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
            color: WHITE,
            textTransform: "none",
            py: 1.2,
            borderRadius: 3,
            fontWeight: 700,
          }}
        >
          Get A Quote
        </Button>
      </motion.div>
    </Box>
  </motion.div>
</Drawer>
          
    </>
  );
}
