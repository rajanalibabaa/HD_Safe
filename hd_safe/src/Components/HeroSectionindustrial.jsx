import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Import your image
import constructionImg from "../assets/HeroSectionprofileimages.jpg"; // change path

const HeroIndustrialSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#111",
        color: "#fff",
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* LEFT SIDE CONTENT */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="overline"
            sx={{ color: "#bbb", fontSize: "14px", letterSpacing: 2 }}
          >
            WELCOME TO HD SAFE INDUSTRIAL SOLUTIONS
          </Typography>

          <Typography
            variant="h3"
            sx={{
              mt: 1,
              fontWeight: 700,
              lineHeight: 1.2,
              fontSize: { xs: "32px", md: "42px" },
            }}
          >
            WE BUILD HOMES, WE BUILD TRUST.  
            <br /> LET US MAKE YOUR HOME.
          </Typography>

          <Typography
            sx={{
              mt: 3,
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#ccc",
              maxWidth: "90%",
            }}
          >
            We build multi-family and affordable housing communities, industrial
            facilities, fitness centers, healthcare buildings and more. Our
            sustainable construction process improves efficiencies and helps
            build environments that foster creativity and long-term value.
          </Typography>

          {/* Bullet Points */}
          <Box sx={{ mt: 3 }}>
            {[
              "Trusted Expertise in Construction",
              "Innovative & Sustainable Solutions",
              "Commitment to Quality & Excellence",
            ].map((text, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", mb: 1.3 }}
              >
                <CheckCircleIcon sx={{ color: "#ff6d00", mr: 1 }} />
                <Typography sx={{ fontSize: "16px" }}>{text}</Typography>
              </Box>
            ))}
          </Box>

          <Button
            variant="outlined"
            sx={{
              mt: 4,
              color: "#ff6d00",
              borderColor: "#ff6d00",
              px: 4,
              py: 1.2,
              fontSize: "15px",
              "&:hover": { borderColor: "#ff8c33" },
            }}
          >
            READ MORE →
          </Button>
        </Grid>

        {/* RIGHT SIDE IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              height: { xs: "280px", md: "520px" },
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={constructionImg}
              alt="industry"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Play Button Style (STATIC) */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120px",
                height: "120px",
                bgcolor: "rgba(255,255,255,0.2)",
                borderRadius: "50%",
                backdropFilter: "blur(4px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.3)",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  width: "0",
                  height: "0",
                  borderTop: "20px solid transparent",
                  borderBottom: "20px solid transparent",
                  borderLeft: "28px solid #fff",
                  ml: "6px",
                }}
              ></Box>
            </Box>
          </Box>

          {/* ORANGE INFO BOX */}
          <Box
            sx={{
              mt: -8,
              ml: { xs: 0, md: 4 },
              bgcolor: "#ff6d00",
              p: 4,
              color: "#fff",
              maxWidth: "480px",
              borderRadius: "4px",
              position: "relative",
              zIndex: 20,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, lineHeight: 1.3 }}
            >
              A LEADING PROVIDER OF  
              <br /> SAFE INDUSTRIAL SOLUTIONS
            </Typography>

            <Typography sx={{ mt: 2, fontSize: "15px", lineHeight: 1.6 }}>
              Our brand has over 4000 skilled industrial professionals operating
              across global projects with a strong focus on safety,
              sustainability, and engineering excellence.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                mt: 3,
                borderColor: "#fff",
                color: "#fff",
                px: 4,
                py: 1.2,
                fontSize: "15px",
                "&:hover": { borderColor: "#eee", color: "#111", bgcolor: "#fff" },
              }}
            >
              LEARN MORE →
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroIndustrialSection;
