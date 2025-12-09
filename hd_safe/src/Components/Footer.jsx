import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

import footerbg from "../assets/FooterBg.jpg";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        pt: { xs: 4, sm: 5, md: 7, lg: 8 },
        pb: { xs: 3, sm: 4, md: 5 },
        mt: 6,
        position: "relative",
      }}
    >
      <Box sx={{ maxWidth: "1400px", mx: "auto", px: { xs: 2, sm: 3, md: 4 } }}>
        
        {/* MAIN GRID */}
        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6 }}
          justifyContent="space-evenly"
        >
          {/* LOCATION */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: { xs: "1rem", md: "1.2rem" } }}
            >
              Our Location
            </Typography>

            <Box
              sx={{
                width: "40px",
                height: "3px",
                bgcolor: "#E53935",
                mt: 0.5,
                mb: 2,
              }}
            />

            <Typography sx={{ mb: 1.2, lineHeight: 1.6 }}>
              HDSAFE Industrial Solutions LLP
            </Typography>

            <Typography sx={{ mb: 1.2, lineHeight: 1.6 }}>
              1st, 3-2, Singanna Naicken St,<br />
              Parrys, George Town,<br />
              Chennai, Tamil Nadu 600001
            </Typography>

            <Link
              href="#"
              underline="none"
              sx={{
                color: "#FF4D00",
                fontWeight: 600,
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              View on map
            </Link>
          </Grid>

          {/* CONTACT */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: { xs: "1rem", md: "1.2rem" } }}
            >
              Contact
            </Typography>

            <Box
              sx={{
                width: "40px",
                height: "3px",
                bgcolor: "#E53935",
                mt: 0.5,
                mb: 2,
              }}
            />

            <Box sx={{ display: "flex", alignItems: "center", mb: 1.4 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography>088257 47587</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1.4 ,}}>
              <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography>sanjaydaveytax@gmail.com</Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2,ml:-1}}>
              <IconButton sx={{ color: "#fff" }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }}>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, fontSize: { xs: "1rem", md: "1.2rem" } }}
            >
              Quick Links
            </Typography>

            <Box
              sx={{
                width: "40px",
                height: "3px",
                bgcolor: "#E53935",
                mt: 0.5,
                mb: 2,
              }}
            />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              {["Home", "About Us", "Products", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    "&:hover": { color: "#FF4D00" },
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* DIVIDER */}
      <Divider
        sx={{
          my: { xs: 3, md: 5 },
          borderColor: "rgba(255, 255, 255, 0.3)",
          maxWidth: "1100px",
          mx: "auto",
        }}
      />

      {/* BOTTOM FOOTER */}
      <Box sx={{ textAlign: "center", mt: 2, px: 2 }}>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            mb: 1,
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
          }}
        >
          © {new Date().getFullYear()}{" "}
          <Typography
            component="span"
            sx={{
              color: "#FF4D00",
              fontWeight: 700,
              fontSize: "inherit",
            }}
          >
            HDSAFE Industrial Solutions LLP.
          </Typography>
        </Typography>

       <Typography
  sx={{
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
    textAlign: "center"
  }}
>
  All Rights Reserved | Built with 💗 in India

  {/* Powered By (breaks line on mobile) */}
  <Box
    component="span"
    sx={{
      display: { xs: "block", sm: "inline" },
      ml: { sm: 2 },   
      mt: { xs: 1, sm: 0 }
    }}
  >
    Powered by:{" "}
    <a
      href="https://cholabiz.com/"
      style={{
        textDecoration: "none",
        color: "#FF4D00",
        fontWeight: 700,
      }}
    >
      CholaBiz.com
    </a>
  </Box>
</Typography>

      </Box>
    </Box>
  );
}
