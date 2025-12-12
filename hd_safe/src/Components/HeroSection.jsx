  // HeroSection.jsx
  import React, { useState, useEffect, forwardRef } from "react";
  import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    Dialog,
    DialogContent,
    Slide,
    IconButton
  } from "@mui/material";
  import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
  import Close from "@mui/icons-material/Close";
  import { motion, AnimatePresence } from "framer-motion";

  import img1 from "../assets/HdSafeHero1.jpg";
  import img2 from "../assets/HdSafeHero2.jpg";
  import img3 from "../assets/HdSafeHero3.jpg";

  const backgroundImages = [img1, img2, img3];

  const heroContent = [
    {
      number: "01",
      title: "Complete Industrial Safety & Engineering Solutions",
      subtitle:
        "End-to-end industrial safety, fabrication, electrical, and construction services designed to meet modern industry standards.",
      button: "Explore Services"
    },
    {
      number: "02",
      title: "Reliable Solutions for Industrial Automation & Infrastructure",
      subtitle:
        "We deliver high-quality automation, MEP works, industrial installations, and structural projects with precision and expertise.",
      button: "Our Expertise"
    },
    {
      number: "03",
      title: "Your Trusted Partner for Industrial Projects",
      subtitle:
        "From planning to execution — we ensure safe, efficient, and compliant solutions for factories, plants, warehouses, and commercial industries.",
      button: "Get a Quote"
    }
  ];

  const SlideDown = forwardRef(function SlideDown(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  export default function HeroSection() {
    const [index, setIndex] = useState(0);
    const [formData, setFormData] = useState({
      fullName: "",
      mobile: "",
      email: "",
      requirement: ""
    });
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
      const id = setInterval(
        () => setIndex((p) => (p + 1) % backgroundImages.length),
        3000
      );
      return () => clearInterval(id);
    }, []);

    const handleChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      const { fullName, mobile, email, requirement } = formData;
      if (!fullName || !mobile || !email || !requirement) {
        alert("Please fill in all required fields");
        setLoading(false);
        return;
      }
      if (!email.includes("@")) {
        alert("Please enter a valid email address");
        setLoading(false);
        return;
      }

      const submission = new FormData();
      submission.append("Full Name", fullName);
      submission.append("Mobile", mobile);
      submission.append("Email", email);
      submission.append("Requirement", requirement);
      submission.append("_subject", "New Fast Enquiry Submission");
      submission.append("_captcha", "false");
      submission.append("_template", "box"); 
      submission.append(
        "_autoresponse",
        `Thank you ${fullName} for contacting us!`
      );

      try {
        const res = await fetch(
          "https://formsubmit.co/evanjelineaswini@gmail.com", 
          { method: "POST", body: submission }
        );

        if (res.ok) {
          setShowPopup(true);
          setFormData({ fullName: "", mobile: "", email: "", requirement: "" });
        } else {
          alert("Failed to submit form. Please try again.");
        }
      } catch (err) {
        console.error(err);
        alert("Network error. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    return (
      <>
        <Box
          sx={{
            width: "100%",
            height: { xs: "90vh", sm: "70vh", md: "100vh" },
            position: "relative",
            overflow: "hidden"
          }}
        >
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${backgroundImages[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "brightness(0.55)"
              }}
            />
          </AnimatePresence>

          <Grid
            container
            sx={{
              position: "relative",
              zIndex: 10,
              height: "100%",
              alignItems: "center",
              px: { xs: 1, md: 2 },
              flexWrap: "nowrap"
            }}
            spacing={3}
          >
            {/* left column – numbers */}
            <Grid
              item
              xs={2}
              md={1}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: { xs: "center", md: "flex-start" },
                gap: { xs: 0.9, md: 1.2 }
              }}
            >
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  sx={{
                    width: { xs: 28, sm: 32, md: 38, lg: 42 },
                    height: { xs: 28, sm: 32, md: 38, lg: 42 },
                    borderRadius: "8px",
                    ml: 0.8,
                    border: "2px solid #fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: index === i ? "#ffb400" : "transparent",
                    color: index === i ? "#000" : "#fff",
                    fontSize: { xs: 12, sm: 14, md: 16, lg: 18 },
                    fontWeight: 700,
                    transition: ".3s"
                  }}
                >
                  {`0${i + 1}`}
                </Box>
              ))}
            </Grid>

            {/* middle column – hero text */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                pl: { xs: 1, md: 2 },
                pr: { md: "450px" }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        textAlign: { xs: "center", md: "left" },
                        color: "#fff",
                        fontWeight: 700,
                        mb: 2,
                        fontSize: { xs: 32, md: 48 },
                        lineHeight: 1.2
                      }}
                    >
                      {heroContent[index].title}
                    </Typography>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.9 }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: { xs: "center", md: "left" },
                        color: "#eaeaea",
                        mb: 4,
                        fontSize: { xs: 16, md: 20 }
                      }}
                    >
                      {heroContent[index].subtitle}
                    </Typography>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </Grid>
          </Grid>

        <Box
  sx={{
    display: { xs: "none", md: "block" },
    position: "absolute",
    top: "50%",
    right: "3vw",
    transform: "translateY(-50%)",
    zIndex: 15,
    width: 360
  }}
>

            <Box
              sx={{
                p: "2px",
                borderRadius: "22px",
                background:
                  "linear-gradient(135deg, #ffcc00, #ff9500, #ff5e00)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.15)"
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <Typography
                  variant="h5"
                  fontWeight={700}
                  textAlign="center"
                  sx={{
                    mb: 2,
                    background: "linear-gradient(90deg,#ff7e00,#ffb400)",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                 Quick Assistance 
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  {["fullName", "mobile", "email"].map((name) => (
                    <TextField
                      key={name}
                      name={name}
                      label={
                        name === "fullName"
                          ? "Full Name"
                          : name === "mobile"
                          ? "Mobile Number"
                          : "Email"
                      }
                      value={formData[name]}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      sx={{ mb: 2 }}
                    />
                  ))}

                  <TextField
                    name="requirement"
                    label="Your Requirement"
                    multiline
                    rows={3}
                    value={formData.requirement}
                    onChange={handleChange}
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                    sx={{
                      background: "linear-gradient(90deg,#ffb400,#ff7e00)",
                      color: "#000",
                      fontWeight: 700,
                      py: 1.2,
                      borderRadius: 2,
                      "&:hover": {
                        background: "linear-gradient(90deg,#ff9800,#ff6a00)"
                      }
                    }}
                  >
                    {loading ? "Submitting…" : "Submit"}
                  </Button>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>

        <Dialog
          open={showPopup}
          TransitionComponent={SlideDown}
          keepMounted
          onClose={() => setShowPopup(false)}
          fullWidth
          maxWidth="xs"
          PaperProps={{
            sx: {
              borderRadius: 4,
              p: 3,
              textAlign: "center",
              position: "relative"
            }
          }}
        >
          {/* close icon */}
          <IconButton
            size="small"
            onClick={() => setShowPopup(false)}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <Close />
          </IconButton>

          <DialogContent>
            <CheckCircleOutlineRounded
              sx={{ fontSize: 72, color: "#4caf50", mb: 1 }}
            />
            <Typography variant="h5" fontWeight={700} sx={{ color: "#4caf50" }}>
              Thank You!
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1.5, mb: 3, color: "text.secondary" }}
            >
              Your enquiry has been submitted successfully.<br />
              We’ll get back to you within 24&nbsp;hours.
            </Typography>

            <Button
              variant="contained"
              onClick={() => setShowPopup(false)}
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 20,
                background: "linear-gradient(90deg,#ffb400,#ff7e00)",
                fontWeight: 700,
                "&:hover": {
                  background: "linear-gradient(90deg,#ff9800,#ff6a00)"
                }
              }}
            >
              Close
            </Button>
          </DialogContent>
        </Dialog>
      </>
    );
  }
