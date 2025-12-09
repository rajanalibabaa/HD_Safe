import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import img1 from '../assets/HdSafeHero1.jpg';
import img2 from '../assets/HdSafeHero2.jpg';
import img3 from '../assets/HdSafeHero3.jpg';
const backgroundImages = [
  img1,
  img2,
  img3,
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  // Auto change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "100vh", md: "90vh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImages[index]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
      </AnimatePresence>

      {/* Content Section */}
      <Grid
        // container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          zIndex: 10,
          height: "100%",
          alignItems: "center",
          px: { xs: 2, md: 6 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, position: "absolute", top: 20, left: 20, color: "#fff", fontSize: 24, fontWeight: "bold" }}>
            <Typography>01</Typography>
            <Typography>02</Typography>
            <Typography>03</Typography>
        </Box>
        {/* LEFT SIDE CONTENT */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              color: "#fff",
              fontWeight: "700",
              mb: 2,
              fontSize: { xs: "32px", md: "48px" },
            }}
          >
            Transform Your Space With Quality Interiors
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "#f1f1f1",
              mb: 3,
              maxWidth: "90%",
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            High-quality interior & exterior design solutions for residential and
            commercial spaces.
          </Typography>

          <Button
            variant="contained"
            sx={{
              background: "#ffb400",
              color: "#000",
              fontWeight: "600",
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              "&:hover": { background: "#ff9800" },
            }}
          >
            Explore More
          </Button>
        </Grid>

        {/* RIGHT SIDE FAST ENQUIRY FORM */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            ml: { md: "auto" },
            mt: { xs: 4, md: 0 },
          }}
        >
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: "20px",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: "600", mb: 2, textAlign: "center" }}
            >
              Fast Enquiry
            </Typography>

            <TextField
              label="Full Name"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Mobile Number"
              fullWidth
              size="small"
              sx={{ mb: 2 }}
            />
            <TextField label="Email" fullWidth size="small" sx={{ mb: 2 }} />
            <TextField
              label="Your Requirement"
              fullWidth
              multiline
              rows={3}
              size="small"
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                background: "#ffb400",
                color: "#000",
                fontWeight: "600",
                py: 1.2,
                borderRadius: "10px",
                "&:hover": { background: "#ff9800" },
              }}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
