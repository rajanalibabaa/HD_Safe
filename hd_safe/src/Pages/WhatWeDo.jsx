import React, { useMemo } from "react";
import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";

import CheckIcon from "@mui/icons-material/CheckCircle";
import FireIcon from "@mui/icons-material/LocalFireDepartment";
import FallIcon from "@mui/icons-material/SportsKabaddi";
import EyeIcon from "@mui/icons-material/Visibility";
import WorkIcon from "@mui/icons-material/Work";
import SecurityIcon from "@mui/icons-material/Security";
import { motion, useReducedMotion } from "framer-motion";

import FancyButton from "../Components/FancyButton";

import img1 from "../assets/Whatwedo/UdyogiLogo.png";
import img2 from "../assets/Whatwedo/Kanex.png";
import img3 from "../assets/Whatwedo/Stanleysafety.png";
import img4 from "../assets/Whatwedo/Safepro.png";
import img5 from "../assets/Whatwedo/Mallcom.png";
import img6 from "../assets/Whatwedo/karamsafety.webp";

const featureList = [
  { text: "Personal Protective Equipment (PPE)", icon: <SecurityIcon /> },
  {
    text: "Fire extinguishers and firefighting accessories",
    icon: <FireIcon color="error" />,
  },
  { text: "Fall-protection gear", icon: <FallIcon color="info" /> },
  {
    text: "Eye, ear & respiratory protection",
    icon: <EyeIcon color="success" />,
  },
  {
    text: "Safety shoes, helmets, gloves & reflective jackets",
    icon: <WorkIcon color="warning" />,
  },
];

const brands = [
  { name: "Udyogi", img: img1 },
  { name: "Karam", img: img6 },
  { name: "Stanley", img: img3 },
  { name: "Safepro", img: img4 },
  { name: "Kanex", img: img2 },
  { name: "Mallcom", img: img5 },
];

const leftParent = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, ease: [0.2, 0.9, 0.2, 1] },
  },
};
const leftChild = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
const btnHover = { scale: 1.03, translateY: -4 };
const canvasParent = {
  hidden: { opacity: 0, scale: 0.98, y: 12 },
  show: { opacity: 1, scale: 1, y: 0, transition: { staggerChildren: 0.06 } },
};
const hexVariants = (delay = 0, reduced = false) =>
  reduced
    ? {
        initial: { opacity: 1, scale: 1 },
        hover: { scale: 1.02 },
      }
    : {
        initial: { opacity: 0, scale: 0.86 },
        appear: {
          opacity: 1,
          scale: 1,
          transition: { type: "spring", stiffness: 220, damping: 22, delay },
        },
        idle: {
          y: [0, -6, 0],
          transition: {
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        },
        hover: {
          scale: 1.12,
          rotate: 3,
          transition: { type: "spring", stiffness: 220 },
        },
        tap: { scale: 0.96 },
      };

const HexBrand = React.memo(function HexBrand({
  left,
  top,
  size,
  border,
  logo,
  name,
  stroke,
  delay = 0,
  reduceMotion = false,
}) {
  // hex clip path
  const hexClip =
    "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)";

  const variants = hexVariants(delay, reduceMotion);

  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        left,
        top,
        cursor: "pointer",
        display: "block",
        willChange: "transform",
      }}
      initial={reduceMotion ? "initial" : "initial"}
      animate={reduceMotion ? "initial" : ["appear", "idle"]}
      whileHover="hover"
      whileTap="tap"
      variants={variants}
      aria-label={name}
      role="img"
      title={name}
    >
      {/* SVG outline stroke */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{ position: "absolute" }}
      >
        <polygon
          points="25 6.7 75 6.7 100 50 75 93.3 25 93.3 0 50"
          fill="none"
          stroke={stroke}
          strokeWidth={Math.max(1, border * 1.8)}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Inner hex with clipped image */}
      <Box
        sx={{
          position: "absolute",
          inset: border,
          clipPath: hexClip,
          WebkitClipPath: hexClip,
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 1,
        }}
      >
        <img
          src={logo}
          alt={name}
          loading="lazy"
          style={{
            width: "78%",
            height: "78%",
            objectFit: "contain",
            display: "block",
            userSelect: "none",
          }}
          draggable={false}
        />
      </Box>
    </motion.div>
  );
});

export default function WhatWeDo() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const reduce = useReducedMotion();

  const BORDER = isXs ? 3 : 4;
  const INNER = isXs ? 100 : isSm ? 130 : 150; // inner visible hex size
  const OUTER = INNER + BORDER * 4; // outer box for placement
  const CANVAS_SIZE = isXs ? 280 : isSm ? 360 : 460; // canvas (width & height)
  const RADIUS = isXs ? 110 : isSm ? 150 : 190;
  const stroke = "#ff6700";

  // Precompute hex positions only when dimensions/brands change (useMemo)
  const brandPositions = useMemo(() => {
    // place 6 hexes in a ring around center
    const center = CANVAS_SIZE / 2;
    return brands.map((b, idx) => {
      const theta = (idx / brands.length) * Math.PI * 2 - Math.PI / 6;
      const left = Math.round(center + RADIUS * Math.cos(theta) - OUTER / 2);
      const top = Math.round(center + RADIUS * Math.sin(theta) - OUTER / 2);
      const delay = 0.18 + idx * 0.08;
      return { ...b, left, top, delay };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CANVAS_SIZE, OUTER, RADIUS, brands.length]);

  const handleContactClick = () => navigate("/contact");
  const handleCatalogueClick = () => navigate("/products");

  return (
    <Box
      component="section"
      sx={{ py: { xs: 0, md: 8 }, px: { xs: 2, md: 4 } }}
    >
      <motion.div
        initial={reduce ? {} : { opacity: 0, y: 10 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <Typography
          variant={isXs ? "h4" : "h2"}
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
          WHAT WE DO
        </Typography>

        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="center"
          justifyContent="center"
          sx={{ maxWidth: 1400, mx: "auto" }}
        >
          {/* Left column: list + actions */}
          <Grid item xs={12} md={5}>
            <motion.div
              variants={leftParent}
              initial={reduce ? undefined : "hidden"}
              whileInView={reduce ? undefined : "show"}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={leftChild}>
                <Typography
                  color="text.primary"
                  mb={2}
                  sx={{ fontWeight: "bold" }}
                >
                  We specialise in the distribution and supply of a wide range
                  of industrial safety and firefighting products such as:
                </Typography>
              </motion.div>

              <List dense sx={{ pt: 0 }}>
                {featureList.map(({ text }, idx) => (
                  <motion.div key={text} variants={leftChild}>
                    <ListItem disableGutters sx={{ py: 0.6 }}>
                      <ListItemIcon
                        sx={{ minWidth: 34, color: theme.palette.primary.main }}
                      >
                        <CheckIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{ variant: "body1" }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>

              <motion.div variants={leftChild}>
                <Stack
                  direction={{ xs: "row", sm: "row" }}
                  spacing={2}
                  mt={3}
                  justifyContent={{ xs: "center", md: "flex-start" }}
                >
                  <motion.div
                    whileHover={!reduce ? btnHover : {}}
                    style={{ display: "inline-block" }}
                  >
                    <FancyButton
                      onClick={handleContactClick}
                      sx={{
                        background: "#000",
                        color: "#fff",
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.05, md: 1.3 },
                        fontSize: { xs: "14px", md: "15px" },
                        fontWeight: 600,
                        borderRadius: 0,
                        textTransform: "none",
                        "&:hover": {
                          background: "#111",
                        },
                        boxShadow: "none",
                      }}
                    >
                      Contact us
                    </FancyButton>
                  </motion.div>

                  <motion.div
                    whileHover={!reduce ? btnHover : {}}
                    style={{ display: "inline-block" }}
                  >
                    <FancyButton
                      onClick={handleCatalogueClick}
                      sx={{
                        background: "#fff",
                        color: "#000",
                        border: "1px solid #000",
                        px: { xs: 3, md: 4 },
                        py: { xs: 1.05, md: 1.3 },
                        fontSize: { xs: "14px", md: "15px" },
                        fontWeight: 600,
                        borderRadius: 0,
                        textTransform: "none",
                        "&:hover": {
                          background: "#f6f6f6",
                        },
                        boxShadow: "none",
                      }}
                    >
                      View catalogue
                    </FancyButton>
                  </motion.div>
                </Stack>
              </motion.div>
            </motion.div>
          </Grid>

          {/* Right column: hex brand canvas */}
          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 0 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <motion.div
              variants={canvasParent}
              initial={reduce ? {} : "hidden"}
              whileInView={reduce ? {} : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              <Box
                sx={{
                  width: { xs: CANVAS_SIZE, sm: CANVAS_SIZE, md: CANVAS_SIZE },
                  height: { xs: CANVAS_SIZE, sm: CANVAS_SIZE, md: CANVAS_SIZE },
                  position: "relative",
                }}
                aria-hidden={false}
                role="group"
              >
                {/* Center hex label */}
                <motion.div
                  initial={reduce ? {} : { opacity: 0, scale: 0.96 }}
                  whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45 }}
                  style={{
                    position: "absolute",
                    width: INNER + (isXs ? 8 : 12),
                    height: INNER,
                    left: "33%",
                    top: "32%",
                    transform: "translate(-50%,-50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    paddingLeft: 12,
                    paddingRight: 12,
                    clipPath:
                      "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
                    background: "white",
                    willChange: "transform",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 750,
                      color: "#ff6700",
                      fontSize: { xs: "1rem", md: "1.4rem" },
                    }}
                  >
                    Brands
                    <br />
                    we deal in
                  </Typography>
                </motion.div>

                {brandPositions.map((b, idx) => (
                  <HexBrand
                    key={b.name}
                    left={b.left}
                    top={b.top}
                    size={OUTER}
                    border={BORDER}
                    logo={b.img}
                    name={b.name}
                    stroke={stroke}
                    delay={b.delay}
                    reduceMotion={reduce}
                  />
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
}
