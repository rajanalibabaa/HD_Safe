// StrengthsSection.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  styled,
  Container
} from "@mui/material";
import { motion } from "framer-motion";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const strengthsData = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Prompt Delivery",
    description: "Ensuring timely shipping with dependable logistics support.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: "Transparent Pricing",
    description: "Fair pricing with complete transparency across all orders.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Trusted Brands",
    description: "Strong associations with top‐quality and reputable partners.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    title: "Expert Team",
    description: "Our experts provide guidance with deep product knowledge.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Support",
    description: "Dedicated assistance before, during & after your purchase.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
];

// Enhanced glassy card with multiple effects
const EnhancedCard = styled(motion.div)(({ theme, gradient }) => ({
  position: "relative",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 3,
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  overflow: "hidden",
  cursor: "pointer",
  height: "100%",
  minHeight: 250,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.4s ease",

  // Subtle border
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: `
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2)
  `,

  // Gradient overlay on hover
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: gradient,
    opacity: 0,
    transition: "opacity 0.4s ease",
    zIndex: 0,
  },

  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.15),
      0 5px 15px rgba(0, 0, 0, 0.08),
      0 0 0 1px rgba(255, 255, 255, 0.3)
    `,
    
    "&::before": {
      opacity: 0.1,
    },
    
    "& .card-icon-container": {
      transform: "scale(1.1) rotate(5deg)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
    },
    
    "& .card-title": {
      background: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
  },

  // Floating particles effect
  "&::after": {
    content: '""',
    position: "absolute",
    top: -100,
    left: -100,
    width: 200,
    height: 200,
    background: gradient,
    opacity: 0.05,
    filter: "blur(40px)",
    zIndex: 0,
  },
}));

// Animated icon container
const IconContainer = styled(motion.div)(({ theme, color }) => ({
  position: "relative",
  width: 70,
  height: 70,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  zIndex: 2,
  
  // Glow effect
  "&::after": {
    content: '""',
    position: "absolute",
    inset: -3,
    borderRadius: "50%",
    background: color,
    filter: "blur(15px)",
    opacity: 0.3,
    zIndex: -1,
    transition: "all 0.3s ease",
  },
}));

// Animated background patterns
const FloatingShape = styled(motion.div)(({ theme, color }) => ({
  position: "absolute",
  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
  background: color,
  opacity: 0.05,
  filter: "blur(20px)",
}));

export default function StrengthsSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Background floating shapes */}
      {strengthsData.map((item, idx) => (
        <FloatingShape
          key={`shape-${idx}`}
          color={item.color}
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          sx={{ 
            textAlign: "center", 
            mb: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 } 
          }}
        >
          <Typography
            variant={isXs ? "h3" : "h2"}
            fontWeight={800}
            gutterBottom
            sx={{
              background: "#000000ff",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 3,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }
            }}
          >
            Our Key Strengths
          </Typography>
          
        
        </Box>

        {/* Strengths Grid - 3 cards per row */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ 
            position: "relative", 
            zIndex: 1,
            px: { xs: 2, sm: 3 }
          }}
        >
          {strengthsData.map((item, idx) => (
            <Grid 
              key={idx} 
              item 
              xs={12} 
              sm={6} 
              lg={4}
              sx={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <EnhancedCard
                gradient={item.gradient}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                sx={{
                  width: "100%",
                  maxWidth: 380
                }}
              >
                {/* Animated Icon */}
                <IconContainer
                  className="card-icon-container"
                  color={item.color}
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    rotate: { type: "spring", stiffness: 100, delay: idx * 0.1 },
                    scale: { type: "spring", stiffness: 100, delay: idx * 0.1 },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: item.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: "1.75rem",
                    }}
                  >
                    {item.icon}
                  </Box>
                </IconContainer>

                {/* Content */}
                <Box sx={{ 
                  position: "relative", 
                  zIndex: 2, 
                  textAlign: "center",
                  px: 1 
                }}>
                  <Typography
                    className="card-title"
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{
                      mb: 2,
                      transition: "all 0.3s ease",
                      fontSize: { xs: "1.25rem", sm: "1.5rem" }
                    }}
                  >
                    {item.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.6,
                      fontWeight: 400,
                      opacity: 0.9,
                      fontSize: { xs: "0.95rem", sm: "1rem" }
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>

                {/* Decorative corner accent */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 50,
                    height: 50,
                    borderTopRightRadius: theme.shape.borderRadius * 3,
                    borderBottomLeftRadius: "100%",
                    background: `linear-gradient(135deg, ${item.color}22, transparent)`,
                    zIndex: 1,
                  }}
                />
              </EnhancedCard>
            </Grid>
          ))}
        </Grid>

        {/* For 5 items, we have 2 rows: 3 + 2. Center the last 2 items */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          mt: 3 
        }}>
          <Grid 
            container 
            spacing={3} 
            sx={{ 
              maxWidth: { sm: "100%", md: "calc(66.666% + 24px)" },
              justifyContent: "center"
            }}
          >
            {strengthsData.slice(3).map((item, idx) => (
              <Grid 
                key={idx + 3} 
                item 
                xs={12} 
                sm={6}
                md={6}
                sx={{
                  display: { xs: "block", md: "none" }
                }}
              >
                {/* This will only show on mobile/tablet for the last 2 items */}
                <EnhancedCard
                  gradient={item.gradient}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: (idx + 3) * 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  sx={{
                    width: "100%",
                    maxWidth: 380,
                    mx: "auto"
                  }}
                >
                  <IconContainer
                    className="card-icon-container"
                    color={item.color}
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{
                      rotate: { type: "spring", stiffness: 100, delay: (idx + 3) * 0.1 },
                      scale: { type: "spring", stiffness: 100, delay: (idx + 3) * 0.1 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: item.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "1.75rem",
                      }}
                    >
                      {strengthsData[idx + 3].icon}
                    </Box>
                  </IconContainer>
                  
                  <Box sx={{ position: "relative", zIndex: 2, textAlign: "center" }}>
                    <Typography
                      className="card-title"
                      variant="h5"
                      fontWeight={700}
                      gutterBottom
                      sx={{
                        mb: 2,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {strengthsData[idx + 3].title}
                    </Typography>
                    
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        fontWeight: 400,
                        opacity: 0.9,
                      }}
                    >
                      {strengthsData[idx + 3].description}
                    </Typography>
                  </Box>
                </EnhancedCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        
      </Container>
    </Box>
  );
}