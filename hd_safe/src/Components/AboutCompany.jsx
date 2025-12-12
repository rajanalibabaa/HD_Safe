import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, Button, useTheme, useMediaQuery ,} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useInView, useAnimation } from "framer-motion";
import image from "../assets/AboutCompany.jpg";

// Floating Square Box
const Square = styled(Box)(({ size, bgcolor }) => ({
  width: size,
  height: size,
  backgroundColor: bgcolor,
  position: "absolute",
  zIndex: 2,
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const AboutCompany = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const controls = useAnimation();
  const imageControls = useAnimation();
  const ref = useRef(null);
  const imageRef = useRef(null);
  
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (isImageInView) {
      imageControls.start("visible");
    }
  }, [imageControls, isImageInView]);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 6, md: 20 },
        px: { xs: 2, sm: 4, md: 10 },
        overflow: "hidden",
        backgroundColor: "#ff6700",
      }}
    >
      <Box  display={"flex"} flexDirection={isMobile ? "column-reverse" : "row"} alignItems="center" justifyContent="center" gap={4}>
        {/* LEFT SIDE IMAGE */}
        <Grid item xs={12} md={6}>
          <Box sx={{ position: "relative" }} ref={imageRef}>
            {/* Floating Squares with animations */}
            {/* <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isImageInView ? floatingAnimation : { opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Square 
                size="40px" 
                bgcolor="#ffffffff" 
                sx={{ 
                  top: { xs: "85%", md: "94%" },
                  left: { xs: "-10px", md: "-20px" },
                  display: { xs: "none", sm: "block" , md: "block" }
                }} 
              />
            </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isImageInView ? floatingAnimation : { opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Square 
                size="80px" 
                bgcolor="#ffffffff" 
                sx={{ 
                  top: { xs: "-10%", md: "-15%" },
                  left: { xs: "85%", md: "98%" },
                  display: { xs: "none", sm: "block" , md: "block" }
                }} 
              /> */}
            {/* </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isImageInView ? floatingAnimation : { opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Square 
                size="50px" 
                bgcolor="#fff" 
                sx={{ 
                  top: { xs: "-2%", md: "-3%" },
                  left: { xs: "80%", md: "90%" },
                  border: "2px solid #ff6700",
                  display: { xs: "none", sm: "block", md: "block" }
                }} 
              />
            </motion.div> */}

            <motion.div
              variants={imageVariants}
              initial="hidden"
              animate={imageControls}
            >
                <Square size="40px" bgcolor="#ffffffff" sx={{ top: "94%", left: "-20px" }} />
                <Square size="80px" bgcolor="#ffffffff" sx={{ top: "-15%", left: "98%" }} />
<Square size="50px" bgcolor="#000000ff" sx={{ top: "-3%", left: "90%" }} />
              <Box
                component="img"
                src={image}
                alt="worker"
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: "800px" },
                  height: { xs: "350px", sm: "400px", md: "500px" },
                  objectFit: "cover",
                  borderTopLeftRadius: { xs: "150px", md: "250px" },
                  borderTopRightRadius: { xs: "150px", md: "0" },
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              />
            </motion.div>
          </Box>
        </Grid>

        {/* RIGHT CONTENT */}
        <Grid item xs={12} md={6}>
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: 600,
                  color: "#ffffffff",
                  mb: 1,
                }}
              >
                About our Company
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  fontSize: { xs: "24px", sm: "28px", md: "30px" },
                  fontWeight: 700,
                  color: "#ffffffff",
                  lineHeight: 1.3,
                  mb: { xs: 2, md: 0 },
                }}
              >
                HDSAFE Industrial Solutions  is a  {" "}
                <Box 
                  component="span" 
                  sx={{ 
                    // color: "#000000ff",
                    display: "inline-block"
                  }}
                >
                  industrial safety products and personal protective equipment (PPE)
                </Box>
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography
                sx={{
                  mt: { xs: 2, md: 3 },
                  fontSize: { xs: "16px", md: "18px" },
                  color: "#ffffffff",
                  lineHeight: 1.7,
                }}
              >
                Based in Parrys, Chennai, the company supplies high-quality safety solutions to businesses <br/> across industries including manufacturing, construction, fire safety, and logistics.
              </Typography>
            </motion.div>

            {/* BUTTON */}
            <motion.div variants={itemVariants}>
              <Box sx={{ mt: { xs: 3, md: 4 } }}>
                <Button
                  sx={{
                    background: "#000",
                    color: "#fff",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1.2, md: 1.4 },
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 600,
                    borderRadius: 0,
                    textTransform: "none",
                    "&:hover": { 
                      background: "#222",
                      transform: "translateY(-3px)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                >
                  More About Us
                </Button>
              </Box>
            </motion.div>

            {/* Bottom Content Box */}
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  mt: { xs: 4, md: 5 },
                  p: { xs: 2, md: 3 },
                  borderLeft: { xs: "4px solid #000000ff", md: "6px solid #000000ff" },
                  background: "#f5f5f5",
                  borderRadius: "0 4px 4px 0",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "#000000ff",
                    lineHeight: 1.7,
                  }}
                >
                  Our mission is to deliver dependable safety products backed by timely service and competitive pricing. With years of expertise, we help organizations create safer workplaces and comply with industrial safety regulations.
                </Typography>
              </Box>
            </motion.div>
          </motion.div>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutCompany;