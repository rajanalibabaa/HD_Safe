import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
} from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';
import banner from '../assets/Aboutbg.jpg';
import img from '../assets/AboutUs.jpg';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EngineeringIcon from '@mui/icons-material/Engineering';

const features = [
  {
    icon: <ShieldIcon sx={{ fontSize: 36, color: '#ff6a00' }} />,
    title: 'Trusted Quality',
    description: 'Certified products with proven reliability.',
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 36, color: '#ff6a00' }} />,
    title: 'Industry Expertise',
    description: 'Years of experience with industrial clients.',
  },
  {
    icon: <EngineeringIcon sx={{ fontSize: 36, color: '#ff6a00' }} />,
    title: 'End-to-End Solutions',
    description: 'Consultation, supply, training & support.',
  },
];

const AboutUs = () => {
  const prefersReducedMotion = useReducedMotion();

  // Variants
  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const featuresContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const featureCard = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 14,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    hover: {
      y: prefersReducedMotion ? 0 : -8,
      scale: prefersReducedMotion ? 1 : 1.01,
      transition: { type: 'spring', stiffness: 320, damping: 22 },
    },
    tap: { scale: prefersReducedMotion ? 1 : 0.995 },
  };

  const badge = {
    hidden: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.9, y: prefersReducedMotion ? 0 : 6 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const statsContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  };

  const statItem = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: 320, md: 470 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.45)',
            zIndex: 1,
          }}
        />

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          sx={{
            zIndex: 2,
            textAlign: 'center',
            px: 2,
            maxWidth: 700,
          }}
        >
          <Typography variant="h3" fontWeight={800} sx={{ mb: 2 }}>
            About the Company
          </Typography>
          <Typography variant="h6" sx={{ color: '#eaeaea', fontWeight: 400 }}>
            Our commitment is to ensure safer workplaces with trusted, certified, and durable
            safety equipment.
          </Typography>
        </Box>

        {/* Curve */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            zIndex: 2,
            lineHeight: 0,
          }}
        >
          <svg viewBox="0 0 1440 100" width="100%" height="80" preserveAspectRatio="none">
            <path fill="#fff" d="M0,80 C480,150 960,0 1440,80 L1440,100 L0,100 Z" />
          </svg>
        </Box>
      </Box>

      {/* Main Content */}
      <Container sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Typography
          variant="h2"
          fontWeight={800}
          sx={{
            mb: 2,
            background: 'linear-gradient(90deg, #ff6a00, #ff914d)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          HDSAFE Industrial Solutions LLP
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 750, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}
        >
          Your trusted partner for comprehensive industrial safety solutions in Chennai and beyond.
        </Typography>

        <Box
          sx={{
            mt: 10,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 5,
            mb: 10,
          }}
        >
          <Box
            component={motion.img}
            src={img}
            alt="About HDSAFE Industrial Solutions"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            sx={{
              width: { xs: '100%', md: '40%' },
              borderRadius: 3,
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            }}
          />

          <Box
            component={motion.div}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            sx={{ width: { xs: '100%', md: '70%' } }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 2, textAlign: 'justify' }}
            >
              HDSAFE Industrial Solutions LLP is a trusted name in the field of industrial safety
              products and personal protective equipment (PPE). Based in Parrys, Chennai, the company
              supplies high-quality safety solutions to manufacturing, construction, fire safety,
              logistics, and various industries. Our mission is to deliver dependable safety products backed by timely service and
              competitive pricing. With years of expertise, we help organizations create safer
              workplaces and comply with industrial safety regulations.
            </Typography>
          </Box>
        </Box>

       
      </Container>
    </Box>
  );
};

export default AboutUs;
