import React from "react";
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import { motion } from "framer-motion";
import bgimg from "../assets/ContactUs.jpg";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const MotionBox = motion(Box);

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Box sx={{ minHeight: "100vh", pt: { xs: 0, md: 0 } }}>
      {/* Banner Section with Image */}
      <Box
        sx={{
          position: "relative",
          height: {
            xs: "60vh",    
            sm: "70vh",     // Small mobile
            md: "60vh",     // Tablet
            lg: "70vh",     // Desktop
          },
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: { xs: "scroll", md: "fixed" }, 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.45)',
          }}
        />
        
        {/* Banner Content */}
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              color: "white",
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 3, sm: 4 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2rem",     // Extra small mobile
                  sm: "2.5rem",   // Small mobile
                  md: "3rem",     // Tablet
                  lg: "3.5rem",   // Desktop
                  xl: "4rem",     // Large desktop
                },
                fontWeight: 800,
                mb: { xs: 1, sm: 2 },
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                lineHeight: { xs: 1.2, sm: 1.3, md: 1.4 },
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: "1rem",     // Extra small mobile
                  sm: "1.1rem",   // Small mobile
                  md: "1.3rem",   // Tablet
                  lg: "1.5rem",   // Desktop
                },
                fontWeight: 400,
                maxWidth: "800px",
                mx: "auto",
                textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                lineHeight: { xs: 1.4, sm: 1.5, md: 1.6 },
                px: { xs: 1, sm: 2 },
              }}
            >
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{ 
        mt: { 
          xs: -6,     // Extra small mobile
          sm: -7,     // Small mobile  
          md: -8,     // Tablet
          lg: -10,    // Desktop
        }, 
        position: "relative", 
        zIndex: 3,
        px: { xs: 2, sm: 3, md: 4 },
      }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 4, sm: 5, md: 6 },
            mb: { xs: 6, sm: 7, md: 8 },
          }}
        >
          {/* Contact Info Card */}
          <MotionBox
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            sx={{
              flex: 1,
              background: "white",
              borderRadius: { xs: 2, sm: 3 },
              p: {
                xs: 3,    // Extra small mobile
                sm: 4,    // Small mobile
                md: 5,    // Tablet & Desktop
              },
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "2px solid #f0f0f0",
            }}
          >
            <Typography 
              variant="h4" 
              fontWeight={700} 
              sx={{ 
                mb: { xs: 2, sm: 3 }, 
                color: "#2B2B2B", 
                textAlign: "center",
                fontSize: {
                  xs: "1.5rem",   // Extra small mobile
                  sm: "1.75rem",  // Small mobile
                  md: "2rem",     // Tablet
                  lg: "2.125rem", // Desktop (h4 default)
                }
              }}
            >
              Contact Information
            </Typography>

            <Typography variant="body1" color="text.secondary" sx={{ 
              mb: { xs: 4, sm: 5 },
              fontSize: {
                xs: "0.875rem",  // Extra small mobile
                sm: "0.9375rem", // Small mobile
                md: "1rem",      // Tablet & Desktop
              }
            }}>
              Feel free to reach out to us through any of the following channels. 
              Our team is ready to assist you with your queries and concerns.
            </Typography>

            {/* Contact Info List */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, sm: 4 },  }}>
              {/* Phone */}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #FF4D00 0%, #FF7F3E 100%)",
                    borderRadius: "50%",
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  <PhoneIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    fontWeight={600} 
                    sx={{ 
                      color: "#2B2B2B",
                      fontSize: {
                        xs: "1rem",     // Extra small mobile
                        sm: "1.125rem", // Small mobile & up
                      }
                    }}
                  >
                    Phone
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" } }}>
                    (+91) 88257 47587
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" } }}>
                    Mon-Fri from 9am to 6pm
                  </Typography>
                </Box>
              </Box>

              {/* Email */}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #FF4D00 0%, #FF7F3E 100%)",
                    borderRadius: "50%",
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  <EmailIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    fontWeight={600} 
                    sx={{ 
                      color: "#2B2B2B",
                      fontSize: {
                        xs: "1rem",     // Extra small mobile
                        sm: "1.125rem", // Small mobile & up
                      }
                    }}
                  >
                    Email
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" } }}>
                    sanjaydaveytax@gmail.com
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" } }}>
                    We reply within 24 hours
                  </Typography>
                </Box>
              </Box>

              {/* Address */}
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: { xs: 2, sm: 3 } }}>
                <Box
                  sx={{
                    background: "linear-gradient(135deg, #FF4D00 0%, #FF7F3E 100%)",
                    borderRadius: "50%",
                    width: { xs: 48, sm: 56 },
                    height: { xs: 48, sm: 56 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    flexShrink: 0,
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: { xs: 22, sm: 26 } }} />
                </Box>
                <Box>
                  <Typography 
                    variant="h6" 
                    fontWeight={600} 
                    sx={{ 
                      color: "#2B2B2B",
                      fontSize: {
                        xs: "1rem",     // Extra small mobile
                        sm: "1.125rem", // Small mobile & up
                      }
                    }}
                  >
                    Address
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" } }}>
                    1st, 3-2, Singanna Naicken St,
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" } }}>
                    Parrys, George Town,
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem", md: "0.875rem" } }}>
                    Chennai, Tamil Nadu 600001
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Social Media Section */}
            <Box sx={{ mt: { xs: 5, sm: 6 } }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: { xs: 2, sm: 3 }, 
                  color: "#2B2B2B",
                  fontSize: {
                    xs: "1rem",     // Extra small mobile
                    sm: "1.125rem", // Small mobile & up
                  }
                }}
              >
                Follow Us:
              </Typography>
              <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, justifyContent: { xs: "center", sm: "flex-start" } }}>
                {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map((Icon, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      background: "#f5f5f5",
                      color: "#2B2B2B",
                      width: { xs: 40, sm: 48 },
                      height: { xs: 40, sm: 48 },
                      "&:hover": {
                        background: "linear-gradient(135deg, #FF4D00 0%, #FF7F3E 100%)",
                        color: "white",
                        transform: "translateY(-4px)",
                        transition: "all 0.3s ease",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: { xs: 20, sm: 24 } }} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </MotionBox>

          {/* Contact Form Card */}
          <MotionBox
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            sx={{
              flex: 1,
              background: "linear-gradient(135deg, #2B2B2B 0%, #444444 100%)",
              borderRadius: { xs: 2, sm: 3 },
              p: {
                xs: 3,    // Extra small mobile
                sm: 4,    // Small mobile
                md: 5,    // Tablet & Desktop
              },
              boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              border: "2px solid #FF4D00",
            }}
          >
            <Typography 
              variant="h4" 
              fontWeight={700} 
              sx={{ 
                mb: { xs: 1, sm: 1 }, 
                color: "white", 
                textAlign: "center",
                fontSize: {
                  xs: "1.5rem",   // Extra small mobile
                  sm: "1.75rem",  // Small mobile
                  md: "2rem",     // Tablet
                  lg: "2.125rem", // Desktop (h4 default)
                }
              }}
            >
              Send a Message
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: { xs: 3, sm: 4 }, 
                color: alpha("#fff", 0.8), 
                textAlign: "center",
                fontSize: {
                  xs: "0.875rem",  // Extra small mobile
                  sm: "0.9375rem", // Small mobile
                  md: "1rem",      // Tablet & Desktop
                }
              }}
            >
              Fill out the form below and we'll get back to you shortly.
            </Typography>

            <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: { xs: 3, sm: 4 } }}>
              <Box sx={{ display: "flex", gap: { xs: 2, sm: 2 }, flexDirection: { xs: "column", sm: "row" } }}>
                <TextField
                  fullWidth
                  label="First Name"
                  size={isSmallMobile ? "small" : "medium"}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      borderRadius: 1,
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FF4D00",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FF4D00",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  size={isSmallMobile ? "small" : "medium"}
                  variant="outlined"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "white",
                      borderRadius: 1,
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FF4D00",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FF4D00",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
                    },
                  }}
                />
              </Box>

              <TextField
                fullWidth
                label="Email"
                type="email"
                size={isSmallMobile ? "small" : "medium"}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1,
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF4D00",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF4D00",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Phone"
                size={isSmallMobile ? "small" : "medium"}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1,
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF4D00",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF4D00",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
                  },
                }}
              />

              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={isSmallMobile ? 3 : isMobile ? 4 : 5}
                size={isSmallMobile ? "small" : "medium"}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: 1,
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF4D00",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#FF4D00",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: { xs: "0.875rem", sm: "0.9375rem", md: "1rem" },
                  },
                }}
              />

              {/* Centered Button Container */}
              <Box sx={{ 
                display: "flex", 
                justifyContent: "center", 
                width: "100%", 
                mt: { xs: 0, sm: 1 } 
              }}>
                <Button
                  variant="contained"
                  size={isSmallMobile ? "medium" : "large"}
                  endIcon={<SendIcon />}
                  sx={{
                    background: "linear-gradient(135deg, #FF4D00 0%, #FF7F3E 100%)",
                    color: "white",
                    py: {
                      xs: 1,      // Extra small mobile
                      sm: 1.25,   // Small mobile
                      md: 1.5,    // Tablet & Desktop
                    },
                    fontSize: {
                      xs: "0.875rem",  // Extra small mobile
                      sm: "1rem",      // Small mobile
                      md: "1.1rem",    // Tablet & Desktop
                    },
                    fontWeight: 600,
                    borderRadius: 2,
                    "&:hover": {
                      background: "linear-gradient(135deg, #E64400 0%, #FF6E20 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 20px rgba(255, 77, 0, 0.3)",
                    },
                    transition: "all 0.3s ease",
                    width: { xs: "100%", sm: "fit-content" },
                    px: {
                      xs: 4,    
                      sm: 5,      
                      md: 6,      
                    },
                    textTransform: "none",
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          </MotionBox>
        </Box>

        {/* Map Section */}
        <MotionBox
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          sx={{ mb: { xs: 6, sm: 7, md: 8 } }}
        >
          <Typography 
            variant="h4" 
            fontWeight={700} 
            sx={{ 
              mb: { xs: 2, sm: 3 }, 
              textAlign: "center", 
              color: "#2B2B2B",
              fontSize: {
                xs: "1.5rem",   
                sm: "1.75rem",  
                md: "2rem",     
                lg: "2.125rem", 
              }
            }}
          >
            Find Us Here
          </Typography>
          <Box
            sx={{
              borderRadius: { xs: 2, sm: 3 },
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              height: { 
                xs: "250px",  
                sm: "300px",  
                md: "350px",  
                lg: "400px",  
              },
              border: "2px solid #f0f0f0",
            }}
          >
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3894.5882319915914!2d80.28453897501049!3d13.092585287240795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5018d68be3%3A0xc21889bf29295431!2sHDSAFE%20Industrial%20Solutions%20LLP!5e0!3m2!1sen!2sin!4v1733825400000!5m2!1sen!2sin"
            ></iframe>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ContactUs;