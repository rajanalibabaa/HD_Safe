import React from 'react';
import {useTheme } from '@mui/material';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

import { motion, useReducedMotion } from 'framer-motion';
import banner from '../assets/Aboutbg.jpg';
import img from '../assets/AboutUs.jpg';
import missionImg1 from '../assets/Mission2.jpg';
import missionImg2 from '../assets/Mission1.jpg';
import visionImg1 from '../assets/Vission2.jpg';
import visionImg2 from '../assets/Vission1.jpg';
import Testimonials from '../Components/Testimonials';
import Faq from '../Components/Faq';

const AboutUs = () => {
  const prefersReducedMotion = useReducedMotion();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: isMobile ? -20 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: isMobile ? 20 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatAnimation = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Retention' },
  ];

  return (
    <Box component={motion.div} initial="hidden" animate="visible" variants={staggerContainer}>
      {/* HERO SECTION */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 280, sm: 320, md: 400, lg: 470 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Animated Overlay */}
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.45 }}
          transition={{ duration: 0.8 }}
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(255,77,0,0.2) 100%)',
            zIndex: 1,
          }}
        />
        
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1]
          }}
          sx={{ 
            zIndex: 2, 
            textAlign: 'center', 
            px: { xs: 2, sm: 3, md: 4 },
            maxWidth: { xs: '90%', sm: '80%', md: 700 } 
          }}
        >
          <Typography 
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            variant={isMobile ? "h4" : isTablet ? "h3" : "h3"}
            fontWeight={800} 
            sx={{ 
              mb: { xs: 1, sm: 2 },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' }
            }}
          >
            About the Company
          </Typography>
          <Typography 
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            variant={isMobile ? "body2" : "h6"}
            sx={{ 
              color: '#eaeaea', 
              fontWeight: 400,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
            }}
          >
            Our commitment is to ensure safer workplaces with trusted, certified, and durable
            safety equipment.
          </Typography>
        </Box>

        {/* Animated Curve */}
        <Box sx={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 2, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" width="100%" height={isMobile ? "40" : "80"} preserveAspectRatio="none">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              fill="#fff" 
              d="M0,80 C480,150 960,0 1440,80 L1440,100 L0,100 Z" 
            />
          </svg>
        </Box>
      </Box>

      {/* MAIN CONTENT */}
      <Container 
        maxWidth={false} 
        sx={{ 
          py: { xs: 4, sm: 5, md: 6, lg: 7 },
          px: { xs: 2, sm: 3, md: 4 },
          width: { xs: '100%', sm: '95%', md: '90%', lg: '85%' }
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 6, sm: 8, md: 10, lg: 12 } }}>
          <Typography
            component={motion.div}
            variants={fadeInUp}
            variant={isMobile ? "h4" : isTablet ? "h3" : "h2"}
            fontWeight={800}
            sx={{
              mb: { xs: 1, sm: 2 },
              background: '#FF4D00',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% auto',
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem', lg: '3rem' }
            }}
            animate={{
              backgroundPosition: ['0% center', '100% center', '0% center'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            HDSAFE Industrial Solutions LLP
          </Typography>

          <Typography
            component={motion.p}
            variants={fadeInUp}
            variant="body1"
            color="text.secondary"
            sx={{ 
              maxWidth: { xs: '100%', sm: '90%', md: 750 }, 
              mx: 'auto', 
              fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' }, 
              lineHeight: { xs: 1.6, sm: 1.8 }, 
              mb: { xs: 2, sm: 3 },
              px: { xs: 1, sm: 0 }
            }}
          >
            Your trusted partner for comprehensive industrial safety solutions in Chennai and beyond.
          </Typography>

          <Box
            sx={{
              mt: { xs: 4, sm: 5, md: 5 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 4, sm: 4, md: 5 },
              width: '100%'
            }}
          >
            {/* About Image with enhanced animation */}
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
              sx={{
                position: 'relative',
                width: { xs: '100%', sm: '90%', md: '45%', lg: '40%' },
                maxWidth: 600,
                order: { xs: 1, md: 1 }
              }}
            >
              <Box
                component={motion.img}
                src={img}
                alt="About HDSAFE Industrial Solutions"
                variants={scaleIn}
                sx={{
                  width: '100%',
                  height: { xs: 250, sm: 300, md: 350, lg: 400 },
                  borderRadius: { xs: '60px 0 60px 0', sm: '80px 0 80px 0', md: '120px 0 120px 0' },
                  objectFit: 'cover',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
              {/* Floating decorative element */}
              <Box
                component={motion.div}
                variants={floatAnimation}
                sx={{
                  position: 'absolute',
                  top: { xs: -10, sm: -15, md: -20 },
                  right: { xs: -10, sm: -15, md: -20 },
                  width: { xs: 40, sm: 60, md: 80 },
                  height: { xs: 40, sm: 60, md: 80 },
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FF4D00 0%, #FF8C00 100%)',
                  zIndex: 0,
                  opacity: 0.2,
                }}
              />
            </Box>

            {/* About Text */}
            <Box
              component={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
              sx={{ 
                width: { xs: '100%', sm: '90%', md: '55%', lg: '60%' }, 
                textAlign: { xs: 'center', md: 'left' },
                order: { xs: 2, md: 2 }
              }}
            >
              <Typography
                component={motion.div}
                variants={fadeInUp}
                variant="body1"
                sx={{ 
                  lineHeight: { xs: 1.6, sm: 1.8 }, 
                  mb: { xs: 2, sm: 3 },
                  textAlign: { xs: 'left', sm: 'justify' },
                  fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' }
                }}
              >
              HDSAFE Industrial Solutions LLP is a trusted name in the field of industrial safety products and personal protective equipment (PPE). Based in Parrys, Chennai, the company supplies high-quality safety solutions to businesses across industries including manufacturing, construction, fire safety, and logistics. 
              </Typography>

              {/* Stats Section */}
              <Box
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: { xs: 'center', md: 'center' },
                  alignItems: 'center',
                  gap: { xs: 2, sm: 3, md: 4 },
                  mt: { xs: 3, sm: 4 },
                  px: { xs: 1, sm: 0 }
                }}
              >
                {stats.map((item, index) => (
                  <Box
                    key={index}
                    component={motion.div}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 100
                        }
                      }
                    }}
                    whileHover={{ 
                      scale: isMobile ? 1 : 1.05,
                      transition: { duration: 0.2 }
                    }}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: { xs: 'calc(50% - 16px)', sm: '140px', md: '160px' },
                      maxWidth: { xs: 'calc(50% - 16px)', sm: 'none' },
                      position: 'relative',
                      padding: { xs: 2, sm: 2.5, md: 3 },
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 10px 25px rgba(37, 115, 184, 0.2)',
                      },
                      '&:not(:last-child)::after': {
                        content: '""',
                        position: 'absolute',
                        right: { xs: -8, sm: -15, md: -20 },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        height: { xs: '30px', sm: '35px', md: '40px' },
                        width: '1px',
                        backgroundColor: '#eaeaea',
                        display: index === stats.length - 1 || isMobile ? 'none' : 'block',
                      },
                      marginBottom: { xs: index < 2 ? 0 : 2, sm: 0 }
                    }}
                  >
                    <Typography
                      component={motion.div}
                      variants={pulseAnimation}
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem', lg: '2.5rem' },
                        color: '#2573b8',
                        lineHeight: 1.2,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: '#333',
                        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                        textAlign: 'center',
                        mt: { xs: 0.5, sm: 1 },
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* OUR MISSION SECTION */}
        <Box component={motion.section} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <Grid container spacing={{ xs: 4, sm: 4, md: 4 }} alignItems="center" justifyContent="center">
            {/* LEFT — TEXT */}
            <Grid item xs={12} md={6} sx={{ width: { xs: '100%', md: '60%' }, order: { xs: 2, md: 1 } }}>
              <Box sx={{ px: { xs: 1, sm: 2 } }}>
                <Typography 
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight={700} 
                  gutterBottom 
                  sx={{ color: "#FF4D00" }}
                >
                  Our Mission
                </Typography>

                <Typography
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  variant="body1"
                  sx={{ mb: 3, lineHeight: { xs: 1.6, sm: 1.7 }, textAlign: { xs: 'left', sm: 'justify' } }}
                >
                  Our mission is to deliver high-quality industrial safety products and reliable
                  protective equipment that empower organizations to create safer, more compliant,
                  and hazard-free workplaces. We are committed to providing trusted solutions that
                  safeguard lives, enhance workplace efficiency, and build long-term customer
                  confidence through service excellence.
                </Typography>

                {[
                  "Delivering superior industrial safety products with guaranteed reliability",
                  "Promoting workplace safety compliance across all industries",
                  "Providing customer-focused solutions backed by expert guidance",
                  "Ensuring timely delivery and long-term value for every client",
                ].map((point, idx) => (
                  <Box 
                    key={idx} 
                    component={motion.div}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: 1.5 
                    }}
                  >
                    <Box 
                      component={motion.span}
                      animate={{ 
                        rotate: [0, 10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: 1,
                        delay: 0.5 + idx * 0.2
                      }}
                      sx={{ 
                        color: '#4CAF50', 
                        mr: 1, 
                        fontSize: 20,
                        display: 'inline-block',
                        flexShrink: 0
                      }}
                    >
                      ✓
                    </Box>
                    <Typography 
                      component={motion.span}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      variant="body1"
                      sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* RIGHT — IMAGES */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                order: { xs: 1, md: 2 },
                px: { xs: 0, sm: 2 }
              }}
            >
              {/* Main Large Image */}
              <Box
                component={motion.div}
                variants={scaleIn}
                sx={{
                  position: 'relative',
                  width: "100%",
                  maxWidth: { xs: 400, sm: 450, md: 465 },
                  height: { xs: 250, sm: 300, md: 350 },
                  mx: 'auto'
                }}
              >
                <Box
                  component={motion.img}
                  src={missionImg1}
                  alt="Mission Main"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: { xs: 2, sm: 3 },
                    objectFit: "cover",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </Box>

              {/* Small Overlapped Image */}
              <Box
                component={motion.div}
                variants={floatAnimation}
                sx={{
                  position: "absolute",
                  bottom: { xs: -20, sm: -30, md: -40 },
                  left: { xs: 20, sm: 10, md: -40 },
                  width: { xs: 100, sm: 140, md: 180 },
                  height: { xs: 90, sm: 130, md: 160 },
                  borderRadius: { xs: 2, sm: 3 },
                  overflow: 'hidden',
                  boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
                  border: "4px solid white",
                  display: { xs: "none", sm: "block" },
                  zIndex: 3,
                }}
              >
                <Box
                  component={motion.img}
                  src={missionImg2}
                  alt="Mission Secondary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* OUR VISION SECTION */}
        <Box 
          component={motion.section} 
          variants={fadeInUp} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, amount: 0.3 }}
          sx={{ mt: { xs: 8, sm: 10 } }}
        >
          <Grid container spacing={{ xs: 4, sm: 4, md: 4 }} alignItems="center" justifyContent="center">
            {/* LEFT — IMAGES */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                order: { xs: 1, md: 1 },
                px: { xs: 0, sm: 2 }
              }}
            >
              {/* Main Large Image */}
              <Box
                component={motion.div}
                variants={scaleIn}
                sx={{
                  position: 'relative',
                  width: "100%",
                  maxWidth: { xs: 400, sm: 450, md: 465 },
                  height: { xs: 250, sm: 300, md: 350 },
                  mx: 'auto'
                }}
              >
                <Box
                  component={motion.img}
                  src={visionImg1}
                  alt="Vision Main"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: { xs: 2, sm: 3 },
                    objectFit: "cover",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
              </Box>

              {/* Small Overlapped Image */}
              <Box
                component={motion.div}
                variants={floatAnimation}
                sx={{
                  position: "absolute",
                  bottom: { xs: -20, sm: -30, md: -50 },
                  right: { xs: 20, sm: 10, md: -40 },
                  width: { xs: 100, sm: 140, md: 180 },
                  height: { xs: 90, sm: 130, md: 160 },
                  borderRadius: { xs: 2, sm: 3 },
                  overflow: 'hidden',
                  boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
                  border: "4px solid white",
                  display: { xs: "none", sm: "block" },
                  zIndex: 3,
                }}
              >
                <Box
                  component={motion.img}
                  src={visionImg2}
                  alt="Vision Secondary"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6,
                    delay: 0.3
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>

            {/* RIGHT — TEXT */}
            <Grid 
              item 
              xs={12} 
              md={6} 
              sx={{ 
                order: { xs: 2, md: 2 },
                width: { xs: '100%', md: '57%' },
                pl: { md: 4 }
              }}
            >
              <Box sx={{ px: { xs: 1, sm: 2 } }}>
                <Typography 
                  component={motion.div}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  variant={isMobile ? "h5" : "h4"}
                  fontWeight={700} 
                  gutterBottom 
                  sx={{ color: "#FF4D00" }}
                >
                  Our Vision
                </Typography>

                <Typography
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  variant="body1"
                  sx={{ mb: 3, lineHeight: { xs: 1.6, sm: 1.7 }, textAlign: { xs: 'left', sm: 'justify' } }}
                >
                  Our vision is to become India's most trusted provider of industrial safety
                  solutions by delivering innovative, certified, and future-ready protective
                  equipment. We aim to empower industries with safer environments, reduce
                  workplace risks, and set new benchmarks for quality and reliability in the
                  safety equipment sector.
                </Typography>

                {[
                  "Advancing workplace safety through innovation and certified products",
                  "Becoming a one-stop destination for all industrial safety needs",
                  "Building long-term relationships through trust and service quality",
                  "Creating a safer and more responsible industrial ecosystem",
                ].map((point, idx) => (
                  <Box 
                    key={idx} 
                    component={motion.div}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + idx * 0.1 }}
                    viewport={{ once: true }}
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      mb: 1.5 
                    }}
                  >
                    <Box 
                      component={motion.span}
                      animate={{ 
                        rotate: [0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: 1,
                        delay: 0.5 + idx * 0.2
                      }}
                      sx={{ 
                        color: '#2196F3', 
                        mr: 1, 
                        fontSize: 20,
                        display: 'inline-block',
                        flexShrink: 0
                      }}
                    >
                      ✓
                    </Box>
                    <Typography 
                      component={motion.span}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                      variant="body1"
                      sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
                    >
                      {point}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Testimonials/>
      <Faq/>
    </Box>
  );
};

export default AboutUs;