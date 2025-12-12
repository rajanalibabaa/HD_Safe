import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Fade,
  Container,
  IconButton,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const testimonials = [
  {
    name: "Madhan Anand",
    rating: 4.9,
    date: "26-June-25",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    Products:'Industrial Safety Helmets',
    message:
      "Overall pleasurable experience. Pay a little first and pay a little during the development...",
  },
  {
    name: "U Pavithra",
    rating: 4.9,
    date: "16-June-25",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    Products:'Safety Gloves',
    message: "They have awesome customer service. I wouldn't recommend going anywhere else.",
  },
  {
    name: "Lakshmanan N P",
    rating: 4.9,
    date: "07-June-24",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    Products:'Electrical Rubber Mats',
    message: "Amazing experience. Smooth process and great communication!",
  },
  {
    name: "ZAHID AMIR",
    rating: 4.9,
    date: "26-February-24",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
    Products:'Retro Reflective Tape',
    message: "Amazing experience. Smooth process and great communication!",
  },
  {
    name: "Ganesh Moorthy",
    rating: 4.9,
    date: "11-July-24",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
    Products:'Fire Safety Shoes',
    message: "Amazing experience. Smooth process and great communication!",
  },
  {
    name: "Siraj",
    rating: 4.9,
    date: "25-May-24",
    avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    Products:'Latex Gloves',
    message: "Amazing experience. Smooth process and great communication!",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Auto rotate every 4s
  useEffect(() => {
    const interval = setInterval(() => handleNext(), 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setFadeIn(true);
    }, 250);
  };

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
      setFadeIn(true);
    }, 250);
  };

  // Main rotation angle (rotates entire circle)
  const rotationDeg = -(active * (360 / testimonials.length));

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h5"
        fontWeight={700}
        sx={{
          mb: 5,
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            width: 40,
            height: 3,
            backgroundColor: "#2e7d32",
            borderRadius: 2,
            mr: 1.5,
            display: "inline-block",
          },
        }}
      >
        Customer Reviews
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 6, md: 10 },
          minHeight: 420,
        }}
      >
        {/* LEFT ROTATING CIRCLE */}
        <Box sx={{ width: 300, height: 300, position: "relative" }}>
          {/* Dashed border */}
          <Box
            sx={{
              position: "absolute",
              top: 30,
              left: 30,
              width: 240,
              height: 240,
              border: "2px dashed rgba(46,125,50,0.25)",
              borderRadius: "50%",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              transform: `rotate(${rotationDeg}deg)`,
              transition: "transform 0.6s ease",
            }}
          >
            {testimonials.map((item, i) => {
              const angle = (i * 360) / testimonials.length;
              const radius = 120;
              const rad = (angle * Math.PI) / 180;

              const x = 150 + radius * Math.cos(rad);
              const y = 150 + radius * Math.sin(rad);

              const isActive = i === active;

              return (
                <Box
                  key={i}
                  onClick={() => setActive(i)}
                  sx={{
                    position: "absolute",
                    top: y,
                    left: x,
                    transform: `translate(-50%, -50%) rotate(${-rotationDeg}deg)`,
                    transition: "0.4s",
                    cursor: "pointer",
                    zIndex: isActive ? 5 : 1,
                  }}
                >
                  <Avatar
                    src={item.avatar}
                    sx={{
                      width: isActive ? 82 : 58,
                      height: isActive ? 82 : 58,
                      border: isActive ? "4px solid #2e7d32" : "2px solid transparent",
                      boxShadow: isActive
                        ? "0 8px 25px rgba(46,125,50,0.35)"
                        : "0 3px 8px rgba(0,0,0,0.2)",
                      transition: "0.3s",
                      bgcolor: "#fff",
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* RIGHT SIDE TEXT */}
        <Fade in={fadeIn} timeout={500}>
          <Box sx={{ flex: 1, maxWidth: 500, position: "relative", pl: 4 }}>
            <FormatQuoteIcon
              sx={{
                position: "absolute",
                top: -10,
                left: -10,
                fontSize: 70,
                color: "#2e7d32",
                opacity: 0.25,
              }}
            />

            <Typography variant="body1" sx={{ fontStyle: "italic", mb: 4 }}>
              “{testimonials[active].message}”
            </Typography>

            <Typography variant="h6" fontWeight={700}>
              {testimonials[active].name}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Rating value={testimonials[active].rating} readOnly precision={0.1} />
              <Typography sx={{ ml: 1 }} color="text.secondary">
                {testimonials[active].rating} on {testimonials[active].date}
              </Typography>
            </Box>
              <Typography>Products : {testimonials[active].Products}</Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 5 }}>
              <IconButton onClick={handlePrev}>
                <ChevronLeftIcon />
              </IconButton>
              <IconButton onClick={handleNext}>
                <ChevronRightIcon />
              </IconButton>

              {/* Dots */}
              <Box sx={{ display: "flex", gap: 1.3 }}>
                {testimonials.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setActive(i)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      cursor: "pointer",
                      bgcolor: active === i ? "#2e7d32" : "grey.400",
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default Testimonials;