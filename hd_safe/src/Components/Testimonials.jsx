import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  useTheme,
  Fade,
  Container,
  IconButton,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const testimonials = [
  {
    name: "Edward Alexander",
    rating: 4.9,
    date: "29 Aug 2017",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    message:
      "Overall pleasurable experience. Pay a little first and pay a little during the development of the app as milestones are achieved, which made me feel very confident and comfortable. Seamless and easy process.",
  },
  {
    name: "Diana Johnston",
    rating: 4.9,
    date: "29 Aug 2017",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    message:
      "They have awesome customer service. I wouldn't recommend going anywhere else. All of you guys are awesome. Definitely love the way the team works.",
  },
  {
    name: "Lauren Contreras",
    rating: 4.9,
    date: "29 Aug 2017",
    avatar: "https://randomuser.me/api/portraits/women/18.jpg",
    message:
      "Amazing experience. The whole process was smooth and I loved the communication throughout the project. Great work ethic and dedication!",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [rotationAngle, setRotationAngle] = useState(0);
  const theme = useTheme();

  // Auto-rotate testimonials with circular rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        const nextIndex = (activeIndex + 1) % testimonials.length;
        setActiveIndex(nextIndex);
        // Rotate circle by 120 degrees (360/3 testimonials)
        setRotationAngle(prev => prev - 120);
        setFadeIn(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeReview = testimonials[activeIndex];

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
      setActiveIndex(prevIndex);
      setRotationAngle(prev => prev + 120);
      setFadeIn(true);
    }, 300);
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      const nextIndex = (activeIndex + 1) % testimonials.length;
      setActiveIndex(nextIndex);
      setRotationAngle(prev => prev - 120);
      setFadeIn(true);
    }, 300);
  };

  // Calculate positions with rotation
  const getCirclePosition = (index, total) => {
    const radius = 120; // Circle radius
    const centerX = 140; // Center X coordinate
    const centerY = 140; // Center Y coordinate
    
    // Calculate base angle for equal spacing
    const baseAngle = (index * (360 / total)) * (Math.PI / 180);
    
    // Add rotation angle (converted to radians)
    const rotationRad = (rotationAngle * Math.PI) / 180;
    const finalAngle = baseAngle + rotationRad;
    
    return {
      x: centerX + radius * Math.cos(finalAngle),
      y: centerY + radius * Math.sin(finalAngle),
      angle: finalAngle,
    };
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 6, md: 8 },
          minHeight: 400,
        }}
      >
        {/* LEFT: Rotating Circle with profiles */}
        <Box sx={{ flex: 1, position: "relative" }}>
          {/* "Customer Reviews" Title */}
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{
              color: "#111",
              mb: 4,
              display: "flex",
              alignItems: "center",
              "&::before": {
                content: '""',
                width: 40,
                height: 3,
                backgroundColor: "#2e7d32",
                display: "inline-block",
                marginRight: "12px",
                borderRadius: "2px",
              },
            }}
          >
            Customer Reviews
          </Typography>

          {/* Rotating Circle Container */}
          <Box
            sx={{
              position: "relative",
              width: 280,
              height: 280,
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.7s ease",
              transform: `rotate(${rotationAngle}deg)`,
            }}
          >
            {/* Circle Background Line */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px dashed rgba(46, 125, 50, 0.2)",
                transition: "all 0.7s ease",
              }}
            />

{testimonials.map((review, index) => {
  // Limit angles to left semicircle: −60°, 0°, +60°
  const leftArcAngles = [-60, 0, 60];
  const baseAngle = leftArcAngles[index] ?? 0;
  const angleRad = (baseAngle * Math.PI) / 180;

  // Circle geometry
  const radius = 120;
  const centerX = 140;   // move circle slightly right
  const centerY = 140;   // vertical center

  // Compute coordinates for each profile along the left arc
  const staticX = centerX - radius * Math.cos(angleRad); // “−” to mirror horizontally
  const staticY = centerY + radius * Math.sin(angleRad);

  const isActive = activeIndex === index;

  return (
    <Box
      key={index}
      onClick={() => {
        if (index !== activeIndex) {
          setFadeIn(false);
          setTimeout(() => {
            setActiveIndex(index);
            setRotationAngle(index * -120);
            setFadeIn(true);
          }, 300);
        }
      }}
      sx={{
        position: "absolute",
        left: staticX - 32,
        top: staticY - 32,
        cursor: "pointer",
        transform: `rotate(${-rotationAngle}deg)`,
        zIndex: isActive ? 10 : 1,
        transition: "all 0.5s ease",
      }}
    >
      <Avatar
        src={review.avatar}
        alt={review.name}
        sx={{
          width: isActive ? 80 : 60,
          height: isActive ? 80 : 60,
          border: `3px solid ${isActive ? "#2e7d32" : "transparent"}`,
          boxShadow: isActive
            ? "0 8px 25px rgba(46,125,50,0.35)"
            : "0 4px 12px rgba(0,0,0,0.15)",
          transition: "all 0.3s ease",
        }}
      />
    </Box>
  );
})}

          
          </Box>

      
        </Box>

        {/* RIGHT: Testimonial Text */}
        <Box sx={{ flex: 1, position: "relative", minHeight: 300 }}>
          <FormatQuoteIcon
            sx={{
              position: "absolute",
              top: -15,
              left: -15,
              fontSize: 80,
              color: theme.palette.grey[300],
              opacity: 0.6,
              zIndex: 0,
            }}
          />

          <Fade in={fadeIn} timeout={500}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "italic",
                  color: "#444",
                  lineHeight: 1.8,
                  mb: 4,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                "{activeReview.message}"
              </Typography>

              {/* Active User Info */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {activeReview.name}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <Rating
                    value={activeReview.rating}
                    precision={0.1}
                    readOnly
                    size="medium"
                    sx={{ color: "#2e7d32", mr: 2 }}
                  />
                  <Typography variant="body1" fontWeight={600} sx={{ mr: 2 }}>
                    {activeReview.rating}/5
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    • {activeReview.date}
                  </Typography>
                </Box>
              </Box>

              {/* Navigation Controls */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: 4 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton
                    onClick={handlePrev}
                    sx={{
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      "&:hover": {
                        bgcolor: "action.hover",
                        borderColor: "#2e7d32",
                      },
                    }}
                  >
                    <ChevronLeftIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleNext}
                    sx={{
                      bgcolor: "background.paper",
                      border: "1px solid",
                      borderColor: "divider",
                      "&:hover": {
                        bgcolor: "action.hover",
                        borderColor: "#2e7d32",
                      },
                    }}
                  >
                    <ChevronRightIcon />
                  </IconButton>
                </Box>

                {/* Progress Dots */}
                <Box sx={{ display: "flex", gap: 1.5 }}>
                  {testimonials.map((_, index) => (
                    <Box
                      key={index}
                      onClick={() => {
                        if (index !== activeIndex) {
                          setFadeIn(false);
                          setTimeout(() => {
                            const diff = index - activeIndex;
                            setActiveIndex(index);
                            setRotationAngle(prev => prev - diff * 120);
                            setFadeIn(true);
                          }, 300);
                        }
                      }}
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        bgcolor: index === activeIndex ? "#2e7d32" : "grey.300",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          </Fade>
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonials;