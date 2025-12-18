import React, { useState, useEffect, forwardRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Dialog,
  DialogContent,
  Slide,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import Close from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";

import FancyButton from "../Components/FancyButton";
import QuickAssistanceForm from "../Components/ProductForm";

import img1 from "../assets/HdSafeHero1.jpg";
import img2 from "../assets/HdSafeHero2.jpg";
import img3 from "../assets/HdSafeHero3.jpg";

const backgroundImages = [img1, img2, img3];
const MotionBox = motion(Box);


const heroContent = [
  {
    number: "01",
    title: "Complete Industrial Safety & Engineering Solutions",
    subtitle:
      "End-to-end industrial safety, fabrication, electrical, and construction services designed to meet modern industry standards.",
    button: "Explore Services",
  },
  {
    number: "02",
    title: "Reliable Solutions for Industrial Automation & Infrastructure",
    subtitle:
      "We deliver high-quality automation, MEP works, industrial installations, and structural projects with precision and expertise.",
    button: "Our Expertise",
  },
  {
    number: "03",
    title: "Your Trusted Partner for Industrial Projects",
    subtitle:
      "From planning to execution — we ensure safe, efficient, and compliant solutions for factories, plants, warehouses, and commercial industries.",
    button: "Get a Quote",
  },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all background images
  useEffect(() => {
    let loadedCount = 0;
    
    backgroundImages.forEach((imgSrc) => {
      const img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === backgroundImages.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === backgroundImages.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Start slideshow only after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;
    
    const id = setInterval(
      () => setIndex((p) => (p + 1) % backgroundImages.length),
      4000
    );
    return () => clearInterval(id);
  }, [imagesLoaded]);

  const handleExploreClick = () => {
    navigate('/products');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "90vh", sm: "70vh", md: "100vh" },
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Background images stacked */}
      {backgroundImages.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ 
            duration: 0.8,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.55)",
            willChange: "opacity",
          }}
        />
      ))}

      <Grid
        container
        sx={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          alignItems: "center",
          px: { xs: 1, md: 2 },
          flexWrap: "nowrap",
        }}
        spacing={3}
      >
        {/* Left numbers */}
        <Grid
          item
          xs={2}
          md={1}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            gap: { xs: 0.9, md: 1.2 },
          }}
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              onClick={() => setIndex(i)}
              sx={{
                width: { xs: 28, sm: 32, md: 38, lg: 42 },
                height: { xs: 28, sm: 32, md: 38, lg: 42 },
                borderRadius: "8px",
                ml: 0.8,
                border: "2px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: index === i ? "#ffb400" : "transparent",
                color: index === i ? "#000" : "#fff",
                fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                fontWeight: 700,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.05)",
                  background: index === i ? "#ffb400" : "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              {`0${i + 1}`}
            </Box>
          ))}
        </Grid>

        {/* Animated hero text */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            pl: { xs: 1, md: 2 },
            pr: { md: "450px" },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "#fff",
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: 30, md: 48 },
                    lineHeight: 1.2,
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                  }}
                >
                  {heroContent[index].title}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.6 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                    color: "#eaeaea",
                    mb: 4,
                    fontSize: { xs: 16, md: 20 },
                    textShadow: "0 1px 5px rgba(0,0,0,0.2)",
                  }}
                >
                  {heroContent[index].subtitle}
                </Typography>
              </motion.div>
<MotionBox
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  sx={{
    display: "flex",
    flexWrap: "wrap",
    gap: 2,
    mt: 4,
    justifyContent: {
      xs: "center",      // ✅ mobile center
      md: "flex-start",  // ✅ desktop left
    },
  }}
>
  <FancyButton
    variant="primary"
    size="large"
    onClick={handleExploreClick}
    aria-label="explore more"
  >
    Explore More
  </FancyButton>

  <FancyButton
    variant="secondary"
    size="large"
    onClick={handleContactClick}
    aria-label="contact us"
  >
    Contact Us
  </FancyButton>
</MotionBox>
            </motion.div>
          </AnimatePresence>
        </Grid>
      </Grid>

      {/* RIGHT SIDE FORM */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "50%",
          right: "3vw",
          transform: "translateY(-50%)",
          zIndex: 15,
          width: 360,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -120 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <QuickAssistanceForm 
              slideIndex={index}
            />
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}