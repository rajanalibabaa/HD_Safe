// StrengthsSection.jsx
import React from "react";
import { Box, Grid, Typography, useTheme, useMediaQuery, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

// 1) Data
const strengthsData = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Prompt Delivery",
    description: "Ensuring timely shipping with dependable logistics support.",
  },
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: "Transparent Pricing",
    description: "Fair pricing with complete transparency across all orders.",
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Trusted Brands",
    description: "Strong associations with top-quality and reputable partners.",
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    title: "Expert Team",
    description: "Our experts provide guidance with deep product knowledge.",
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Support",
    description: "Dedicated assistance before, during & after your purchase.",
  },
];

// 2) Glassmorphic Card
const GlassCard = styled(motion.div)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  background: "rgba(255, 255, 255, 0.15)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
  cursor: "pointer",
  overflow: "hidden",
  height: "100%",
}));

export default function StrengthsSection() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 6 },
        overflow: "hidden",
        background: theme.palette.grey[100],
      }}
    >
      {/* Animated background blob */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          bg: theme.palette.primary.light,
          borderRadius: "50%",
          filter: "blur(100px)",
          top: "-100px",
          right: "-100px",
          opacity: 0.3,
          zIndex: 0,
        }}
      />

      <Typography
        variant={isXs ? "h4" : "h2"}
        align="center"
        fontWeight={700}
        gutterBottom
        sx={{ position: "relative", zIndex: 1 }}
      >
        Our Strengths
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <AnimatePresence>
          {strengthsData.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <GlassCard
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{
                  opacity: { duration: 0.4, delay: idx * 0.15 },
                  y: { type: "spring", stiffness: 80, damping: 12, delay: idx * 0.15 },
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 12px 48px rgba(0,0,0,0.2)",
                  rotateX: 3,
                  rotateY: -3,
                }}
              >
                {/* Icon with its own pop-in */}
                <Box
                  component={motion.div}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: idx * 0.2 }}
                  sx={{
                    width: 64,
                    height: 64,
                    mb: 2,
                    mx: "auto",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.palette.common.white,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  align="center"
                  fontWeight={600}
                  gutterBottom
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                >
                  {item.description}
                </Typography>
              </GlassCard>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>
    </Box>
  );
}
