import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  Rating,
  Container,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const testimonials = [
  {
    name: "Madhan Anand",
    rating: 4.9,
    date: "26-June-25",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    message:
      "Overall pleasurable experience. Pay a little first and pay a little during the development...",
  },
  {
    name: "Mohamed Laizal",
    rating: 4,
    date: "16-June-25",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    message:
      "They have awesome customer service. I wouldn't recommend going anywhere else.",
  },
  {
    name: "Lakshmanan N P",
    rating: 4.5,
    date: "07-June-24",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    message: "Amazing experience. Smooth process and great communication!",
  },
  {
    name: "ZAHID AMIR",
    rating: 5,
    date: "26-February-24",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    message: "Amazing experience. Smooth process and great communication!",
  },
  {
    name: "Ganesh Moorthy",
    rating: 4.6,
    date: "11-July-24",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    message: "Amazing experience. Smooth process and great communication!",
  },
  {
    name: "Siraj",
    rating: 4.7,
    date: "25-May-24",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    message: "Amazing experience. Smooth process and great communication!",
  },
];

const SIZE = 420;
const CENTER = SIZE / 2;
const RADIUS = 150;
const STEP = 360 / testimonials.length;

const Testimonials = () => {
  const [rotationIndex, setRotationIndex] = useState(0);

  const active = (testimonials.length - (rotationIndex % testimonials.length)) % testimonials.length;
  const rotationDeg = rotationIndex * STEP;

  useEffect(() => {
    const interval = setInterval(() => {
      setRotationIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setRotationIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setRotationIndex((prev) => prev + 1);
  };

  return (
    <>
    <Typography
             variant="h2"
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
        Customer Reviews
      </Typography>
    <Container sx={{ py: 5 , px: { xs: 2, md: 10 }}} justifyContent="center">
    

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* LEFT ROTATING CIRCLE */}
        <Box sx={{ width: SIZE, height: SIZE, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              margin: "auto",
              width: 300,
              height: 300,
              border: "2px dashed rgba(46,125,50,0.25)",
              borderRadius: "50%",
            }}
          />

          <motion.div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            animate={{ rotate: rotationDeg }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {testimonials.map((item, i) => {
              const angle = i * STEP;
              const rad = (angle * Math.PI) / 180;

              const x = CENTER + RADIUS * Math.cos(rad);
              const y = CENTER + RADIUS * Math.sin(rad);

              const isActive = i === active;

              return (
                <Box
                  key={i}
                  sx={{
                    position: "absolute",
                    top: y,
                    left: x,
                    transform: `translate(-50%, -50%) rotate(${-rotationDeg}deg)`,
                    zIndex: isActive ? 5 : 1,
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Avatar
                      src={item.avatar}
                      sx={{
                        width: isActive ? 110 : 78,
                        height: isActive ? 110 : 78,
                        border: isActive
                          ? "4px solid #2e7d32"
                          : "2px solid transparent",
                        boxShadow: isActive
                          ? "0 8px 25px rgba(46,125,50,0.35)"
                          : "0 3px 8px rgba(0,0,0,0.2)",
                        transition: "0.3s",
                        bgcolor: "#fff",
                      }}
                    />
                  </motion.div>
                </Box>
              );
            })}
          </motion.div>
        </Box>

        {/* RIGHT CONTENT CARD */}
        <Box sx={{ width: "100%", maxWidth: 480 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Card
                elevation={6}
                sx={{
                  borderRadius: 4,
                  position: "relative",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <FormatQuoteIcon
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      fontSize: 60,
                      color: "#2e7d32",
                      opacity: 0.15,
                    }}
                  />

                  <Typography sx={{ fontStyle: "italic", mb: 3 }}>
                    "{testimonials[active].message}"
                  </Typography>

                  <Typography variant="h6" fontWeight={700}>
                    {testimonials[active].name}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Rating
                      value={testimonials[active].rating}
                      readOnly
                      precision={0.1}
                    />
                    <Typography sx={{ ml: 1 }} color="text.secondary">
                      {testimonials[active].rating} on{" "}
                      {testimonials[active].date}
                    </Typography>
                  </Box>

                 

                 
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default Testimonials;