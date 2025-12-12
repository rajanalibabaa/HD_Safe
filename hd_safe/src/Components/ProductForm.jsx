import React, { useState, forwardRef } from "react";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  Slide,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineRounded from "@mui/icons-material/CheckCircleOutlineRounded";
import Close from "@mui/icons-material/Close";

const SlideDown = forwardRef(function SlideDown(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const QuickAssistanceForm = ({ slideIndex }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    requirement: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, mobile, email, requirement } = formData;
    
    // Validation
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
    if (mobile.length < 10) {
      alert("Please enter a valid mobile number");
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
        // Reset form
        setFormData({ 
          fullName: "", 
          mobile: "", 
          email: "", 
          requirement: "" 
        });
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
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Box
          sx={{
            p: "2px",
            borderRadius: "22px",
            background: "linear-gradient(135deg, #ffcc00, #ff9500, #ff5e00)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 3,
              borderRadius: "20px",
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
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
                WebkitTextFillColor: "transparent",
              }}
            >
              Quick Assistance
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="fullName"
                label="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ 
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                  }
                }}
                required
                disabled={loading}
              />

              <TextField
                name="mobile"
                label="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ 
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                  }
                }}
                required
                disabled={loading}
                type="tel"
                inputProps={{
                  pattern: "[0-9]{10}",
                  title: "Please enter a 10-digit mobile number"
                }}
              />

              <TextField
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ 
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                  }
                }}
                required
                disabled={loading}
                type="email"
              />

              <TextField
                name="requirement"
                label="Your Requirement"
                multiline
                rows={3}
                value={formData.requirement}
                onChange={handleChange}
                size="small"
                fullWidth
                sx={{ 
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                  }
                }}
                required
                disabled={loading}
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
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    background: "linear-gradient(90deg,#ff9800,#ff6a00)",
                    transform: "translateY(-1px)",
                    boxShadow: "0 4px 12px rgba(255, 126, 0, 0.3)",
                  },
                  "&:disabled": {
                    background: "#ccc",
                    color: "#666",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {loading ? "Submitting…" : "Submit Enquiry"}
              </Button>
            </Box>
          </Paper>
        </Box>
      </motion.div>

      {/* SUCCESS POP-UP */}
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
            position: "relative",
            border: "1px solid rgba(0,0,0,0.1)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() => setShowPopup(false)}
          sx={{ 
            position: "absolute", 
            top: 8, 
            right: 8,
            color: "#666",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.05)",
            }
          }}
        >
          <Close />
        </IconButton>

        <DialogContent>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <CheckCircleOutlineRounded
              sx={{ 
                fontSize: 72, 
                color: "#4caf50", 
                mb: 1,
                filter: "drop-shadow(0 4px 8px rgba(76, 175, 80, 0.3))"
              }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Typography variant="h5" fontWeight={700} sx={{ color: "#4caf50" }}>
              Thank You!
            </Typography>

            <Typography
              variant="body1"
              sx={{ 
                mt: 1.5, 
                mb: 3, 
                color: "text.secondary",
                lineHeight: 1.6
              }}
            >
              Your enquiry has been submitted successfully.
              <br />
              We'll get back to you within 24 hours.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="contained"
              onClick={() => setShowPopup(false)}
              sx={{
                px: 4,
                py: 1.2,
                borderRadius: 20,
                background: "linear-gradient(90deg,#ffb400,#ff7e00)",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": {
                  background: "linear-gradient(90deg,#ff9800,#ff6a00)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 4px 12px rgba(255, 126, 0, 0.3)",
                },
                transition: "all 0.2s ease",
              }}
            >
              Close
            </Button>
          </motion.div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickAssistanceForm;