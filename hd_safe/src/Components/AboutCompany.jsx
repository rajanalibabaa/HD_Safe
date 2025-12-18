import React, { useEffect, useRef } from "react";
import {
 
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";


import { styled } from "@mui/material/styles";
import { motion, useInView, useAnimation } from "framer-motion";
import image from "../assets/AboutCompany.jpg";
import FancyButton from "./FancyButton";
import { useNavigate } from "react-router-dom";

// Floating Square
const Square = styled(Box)(({ size, bgcolor }) => ({
  width: size,
  height: size,
  backgroundColor: bgcolor,
  position: "absolute",
  zIndex: 2,
}));

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};


const AboutCompany = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Add this for xs detection

    const handleContactClick = () => {
   navigate ("/aboutus");
  };

  const textControls = useAnimation();
  const imageControls = useAnimation();

  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  useEffect(() => {
    if (textInView) textControls.start("visible");
  }, [textInView]);

  useEffect(() => {
    if (imageInView) imageControls.start("visible");
  }, [imageInView]);

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 5, md: 16 },
        px: { xs: 2, sm: 4, md: 5 },
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Grid
        container
        alignItems="center"
        spacing={6}
        direction={isMobile ? "column-reverse" : "row"}
      >
        {/* IMAGE SIDE */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ 
            flexBasis: "50%", 
            maxWidth: "30%",
            display: { xs: "none", md: "block" } // Hide image on mobile
          }}
        >
         <Box ref={imageRef} sx={{ position: "relative" }}>
  <motion.div
    variants={imageVariants}
    initial="hidden"
    animate={imageControls}
  >
    <Square size="40px" bgcolor="#ff6700" sx={{ bottom: -20, left: -20 }} />
    <Square size="80px" bgcolor="#ff6700" sx={{ top: -30, right: -20 }} />
    <Square size="50px" bgcolor="#000" sx={{ top: 30, right: 40 }} />

    <Box
      component="img"
      src={image}
      alt="About Company"
      sx={{
        width: "100%",
        height: { xs: 320, sm: 400, md: 520 },
        objectFit: "cover",
        borderTopLeftRadius: { xs: 120, md: 260 },
        borderTopRightRadius: { xs: 120, md: 0 },
        boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
      }}
    />
  </motion.div>
</Box>
        </Grid>

        {/* CONTENT SIDE */}
        <Grid
          item
          xs={12}
          md={isMobile ? 12 : 6} // Take full width on mobile
          sx={{ 
            flexBasis: isMobile ? "100%" : "65%", 
            maxWidth: isMobile ? "100%" : "80%",
            width: "100%",
            px: { xs: 0, md: 2 } // Remove horizontal padding on mobile
          }}
        >
          <motion.div
            ref={textRef}
            variants={containerVariants}
            initial="hidden"
            animate={textControls}
          >
            <motion.div variants={itemVariants}>
               <Typography
                       variant={isSmallScreen ? "h4" : "h2"} // Fixed: Use isSmallScreen instead of xs
                       fontWeight={800}
                       gutterBottom
                       sx={{
                        textAlign: "center",
            background: "#000000ff",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: { xs: 2, md: 3 },
                       }}
                     >
                About our Company
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: 18, sm: 28, md: 22 },
                  fontWeight: 700,
                  textAlign:{xs:"justify",md:"left"},
                  lineHeight: 1.3,
                  mb: 2,
                  px: { xs: 1, md: 0 } // Add some padding on mobile
                }}
              >
                HDSAFE Industrial Solutions is a leader in industrial safety products
                and personal protective equipment (PPE)
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 17 },
                  lineHeight: 1.7,
                  color: "#333",
                  mb: 4,
                  textAlign:{xs:"justify",md:"left"},
                  px: { xs: 1, md: 0 } 
                }}
              >
                Based in Parrys, Chennai, we supply high-quality safety solutions
                across manufacturing, construction, fire safety, and logistics.
                Our mission is to deliver dependable products backed by timely
                service and competitive pricing—helping organizations build safer,
                compliant workplaces.
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
             <Box sx={{ 
               mt: { xs: 3, md: 4 }, 
               display: "flex", 
               justifyContent: {xs:"center",md:"flex-start"},
               px: { xs: 1, md: 0 } // Add some padding on mobile
             }}>
                  <FancyButton   onClick = {handleContactClick} sx={{ px:3, py:2 }}>
                    More About Us
                  </FancyButton>
                </Box>
            </motion.div>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutCompany;