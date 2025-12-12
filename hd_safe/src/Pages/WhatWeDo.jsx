import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  CheckCircle as CheckIcon,
  Security as SecurityIcon,
  LocalFireDepartment as FireIcon,
  SportsKabaddi as FallIcon,
  Visibility as EyeIcon,
  Work as WorkIcon,
} from "@mui/icons-material";
import { motion, useReducedMotion } from "framer-motion";

import FancyButton from "../Components/FancyButton";

import img1 from "../assets/Whatwedo/UdyogiLogo.png";
import img2 from "../assets/Whatwedo/Kanex.png";
import img3 from "../assets/Whatwedo/Stanleysafety.png";
import img4 from "../assets/Whatwedo/Safepro.png";
import img5 from "../assets/Whatwedo/Mallcom.png";
import img6 from "../assets/Whatwedo/karamsafety.webp";

const HexBrand = React.memo(
  ({
    left,
    top,
    size,
    border,
    logo,
    name,
    stroke,
    delay = 0,
    reduceMotion = false,
  }) => {
    const hexClip =
      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

    /* animation presets */
    const variants = reduceMotion
      ? {} 
      : {
          initial: { scale: 0, opacity: 0 },
          appear: {
            scale: 1,
            opacity: 1,
            transition: { delay, type: "spring", stiffness: 260, damping: 18 },
          },
          idle: {
            y: [0, -6, 0],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          },
          hover: {
            scale: 1.15,
            rotate: 4,
            boxShadow: "0px 0px 0px rgba(0,0,0,0)", 
            transition: { type: "spring", stiffness: 220 },
          },
          tap: { scale: 0.94, rotate: 0 },
        };

    return (
      <motion.div
        style={{
          position: "absolute",
          width: size,
          height: size,
          left,
          top,
          cursor: "pointer",
        }}
        variants={variants}
        initial="initial"
        animate={["appear", "idle"]}
        whileHover="hover"
        whileTap="tap"
      >
        {/* outline */}
        <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ position: "absolute" }}>
          <polygon
            points="25 6.7 75 6.7 100 50 75 93.3 25 93.3 0 50"
            fill="none"
            stroke={stroke}
            strokeWidth={border * 1.8}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>

        {/* inner hex */}
        <Box
          sx={{
            position: "absolute",
            inset: border,
            clipPath: hexClip,
            WebkitClipPath: hexClip,
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logo}
            alt={name}
            loading="lazy"
            style={{ width: "76%", height: "76%", objectFit: "contain" }}
          />
        </Box>
      </motion.div>
    );
  }
);

const featureList = [
  { text: "Personal Protective Equipment (PPE)", icon: <SecurityIcon /> },
  { text: "Fire extinguishers and firefighting accessories", icon: <FireIcon color="error" /> },
  { text: "Fall-protection gear", icon: <FallIcon color="info" /> },
  { text: "Eye, ear & respiratory protection", icon: <EyeIcon color="success" /> },
  { text: "Safety shoes, helmets, gloves & reflective jackets", icon: <WorkIcon color="warning" /> },
];

const brands = [
  { name: "Udyogi", img: img1 },
  { name: "Karam", img: img6 },
  { name: "Stanley", img: img3 },
  { name: "Safepro", img: img4 },
  { name: "Kanex", img: img2 },
  { name: "Mallcom", img: img5 },
];

export default function WhatWeDo() {
  const theme  = useTheme();
  const isXs   = useMediaQuery(theme.breakpoints.down("sm"));
  const reduce = useReducedMotion();

  /* honey-comb geometry */
  const BORDER = 4;
  const INNER  = isXs ? 110 : 150;
  const OUTER  = INNER + BORDER * 4;
  const CANVAS = isXs ? 300 : 460;
  const R      = isXs ? 125 : 190;
  const stroke = "#ff6700";

  /* animation helpers */
  const stagger = 0.12;
  const parentVariant = reduce ? {} : {
    hidden: { opacity: 0, y: 50 },
    show:   { opacity: 1, y: 0, transition: { staggerChildren: stagger } },
  };
  const childVariant = reduce ? {} : {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0 },
  };

  const handleContactClick = () => {
    console.log("Contact us clicked");
    // Add your contact logic here
  };

  const handleCatalogueClick = () => {
    console.log("View catalogue clicked");
    // Add your catalogue logic here
  };

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 4 } }}>
      {/* section fade-in once it scrolls into view */}
      <motion.div
        variants={reduce ? {} : { hidden: { opacity: 0 }, show: { opacity: 1 } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Typography
<<<<<<< HEAD
          variant={isXs ? "h3" : "h2"}
          fontWeight={800}
          gutterBottom
          sx={{
            textAlign: "center",
            background: "#FF6700",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
=======
          component="h2"
          variant={isXs ? "h4" : "h2"}
          fontWeight={700}
          textAlign="center"
          color="#ff6700"
          mb={4}
>>>>>>> 2507c2e5b6d256fc65a772870ca7d5b8f2a0c4cc
        >
          What we do
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: 1440, mx: "auto" }}
        >
          <Grid item xs={12} md={5}>
            <Typography color="text.primary" mb={2} sx={{fontWeight:"bold"}}>
              We specialise in the distribution and supply of a wide range of industrial
              safety and firefighting products such as:
            </Typography>

            <List dense component={motion.div} variants={parentVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
              {featureList.map(({ text }) => (
                <ListItem key={text} disableGutters component={motion.div} variants={childVariant}>
                  <ListItemIcon sx={{ minWidth: 32, color: theme.palette.primary.main }}>
                    <CheckIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={text} primaryTypographyProps={{ variant: "body1" }} />
                </ListItem>
              ))}
            </List>

            <Stack 
              direction={{ xs: "column", sm: "row" }} 
              spacing={2} 
              mt={3}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <FancyButton 
                variant="primary"
                size="medium"
                onClick={handleContactClick}
                aria-label="contact us"
              >
                Contact us
              </FancyButton>

              <FancyButton
                variant="secondary"
                size="medium"
                onClick={handleCatalogueClick}
                aria-label="view catalogue"
              >
                View catalogue
              </FancyButton>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: CANVAS, height: CANVAS, position: "relative" }}>
              {/* centre hex (static) */}
              <Box
                sx={{
                  position: "absolute",
                  width: INNER + 10,
                  height: INNER,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  px: 2,
                  clipPath:
                    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                  background: "white",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 750, color: "#ff6700", fontSize: { xs: "1.2rem", md: "1.6rem" } }}
                >
                  Brands
                  <br />
                  we deal in
                </Typography>
              </Box>

              {/* outer six hexagons with stagger pop-in */}
              {brands.map((b, idx) => {
                const theta = (idx / 6) * Math.PI * 2 - Math.PI / 6;
                const left  = CANVAS / 2 + R * Math.cos(theta) - OUTER / 2;
                const top   = CANVAS / 2 + R * Math.sin(theta) - OUTER / 2;

                return (
                  <HexBrand
                    key={b.name}
                    left={left}
                    top={top}
                    size={OUTER}
                    border={BORDER}
                    logo={b.img}
                    name={b.name}
                    stroke={stroke}
                    delay={0.25 + idx * 0.1}
                    reduceMotion={reduce}
                  />
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}