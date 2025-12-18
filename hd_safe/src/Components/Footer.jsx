import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

import footerbg from "../assets/FooterBg.jpg";

export default function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
  ];

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

            <Typography sx={{ mb: 1.2 }}>
              HDSAFE Industrial Solutions LLP
            </Typography>

            <Typography sx={{ mb: 1.2, lineHeight: 1.6 }}>
              1st, 3-2, Singanna Naicken St,
              <br />
              Parrys, George Town,
              <br />
              Chennai, Tamil Nadu 600001
            </Typography>

            <Link
              href="https://www.google.com/maps/place/HDSAFE+Industrial+Solutions+LLP/@13.0925852,80.2871137,17z"
              target="_blank"
              rel="noopener noreferrer"
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
              <Link
                href="tel:08825747587"
                underline="none"
                color="inherit"
              >
                088257 47587
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mb: 1.4 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
              <Link
                href="mailto:sanjaydaveytax@gmail.com"
                underline="none"
                color="inherit"
              >
                sanjaydaveytax@gmail.com
              </Link>
            </Box>

            <Box sx={{ display: "flex", gap: 2, ml: -1 }}>
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
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  sx={{
                    color: "#fff",
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    "&:hover": { color: "#FF4D00" },
                  }}
                >
                  {item.label}
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
          borderColor: "rgba(255,255,255,0.3)",
          maxWidth: "1100px",
          mx: "auto",
        }}
      />

      {/* BOTTOM FOOTER */}
      <Box sx={{ textAlign: "center", px: 2 }}>
        <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" } }}>
          © {new Date().getFullYear()}{" "}
          <Box component="span" sx={{ color: "#FF4D00", fontWeight: 700 }}>
            HDSAFE Industrial Solutions LLP
          </Box>
        </Typography>

        <Typography sx={{ fontSize: { xs: "0.8rem", md: "1rem" }, mt: 1 }}>
          All Rights Reserved | Built with 💗 in India
          <Box
            component="span"
            sx={{
              display: { xs: "block", sm: "inline" },
              ml: { sm: 2 },
              mt: { xs: 1, sm: 0 },
            }}
          >
            Powered by{" "}
            <a
              href="https://cholabiz.com/"
              style={{
                color: "#FF4D00",
                fontWeight: 700,
                textDecoration: "none",
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
