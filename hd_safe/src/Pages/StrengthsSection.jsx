import React, { useMemo } from "react";
import {
 
  useTheme,
  styled,
 
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useReducedMotion } from "framer-motion";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const strengthsData = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: "Prompt Delivery",
    description: "Ensuring timely shipping with dependable logistics support.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <MonetizationOnIcon fontSize="large" />,
    title: "Transparent Pricing",
    description: "Fair pricing with complete transparency across all orders.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <VerifiedIcon fontSize="large" />,
    title: "Trusted Brands",
    description: "Strong associations with top-quality and reputable partners.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    title: "Expert Team",
    description: "Our experts provide guidance with deep product knowledge.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Support",
    description: "Dedicated assistance before, during & after your purchase.",
    gradient: "linear-gradient(135deg, #FF4D00 0%, #FFB347 100%)",
    color: "#FF4D00"
  }
];


// Floating shape animation via CSS keyframes (GPU-accelerated)
const Floating = styled("div")(({ theme }) => ({
  position: "absolute",
  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
  opacity: 0.06,
  background: "#000",
  pointerEvents: "none",
  filter: "none", // avoid blur for perf (optional)
  willChange: "transform",
  animationName: "floatAnim",
  animationTimingFunction: "linear",
  animationIterationCount: "infinite",
}));

const addGlobalKeyframes = (() => {
  let added = false;
  return (doc = document) => {
    if (added || typeof doc === "undefined") return;
    const style = doc.createElement("style");
    style.textContent = `
      @keyframes floatAnim {
        0% { transform: translate3d(0,0,0) rotate(0deg); }
        50% { transform: translate3d(var(--dx, 10px), var(--dy, -8px), 0) rotate(180deg); }
        100% { transform: translate3d(0,0,0) rotate(360deg); }
      }
    `;
    doc.head.appendChild(style);
    added = true;
  };
})();

addGlobalKeyframes();

const EnhancedCard = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "gradient" && prop !== "color"
})(({ theme, gradient }) => ({
  position: "relative",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 3,
  background: "rgba(255,255,255,0.92)",
  overflow: "hidden",
  cursor: "pointer",
  height: "100%",
  minHeight: 220,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.25s ease, box-shadow 0.25s ease",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  willChange: "transform",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: gradient || "transparent",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: 0
  },
  "&:hover, &:focus-visible": {
    transform: "translateY(-6px)",
    "&::before": { opacity: 0.08 }
  },
  "& > *": { zIndex: 2 }
}));

const IconContainer = styled(motion.div, {
  shouldForwardProp: (prop) => prop !== "color"
})(({ color }) => ({
  position: "relative",
  width: 64,
  height: 64,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 12,
  willChange: "transform",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: -6,
    borderRadius: "50%",
    background: color || "#000",
    opacity: 0.2,
    filter: "blur(8px)",
    zIndex: -1
  }
}));

/* Motion variants (outside render to avoid re-creation) */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: [0.2, 0.9, 0.2, 1] } }
};

const iconVariants = {
  hidden: { rotate: -140, scale: 0 },
  visible: { rotate: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 14 } }
};

/* Small, memoized card to avoid extra work */
const StrengthCard = React.memo(function StrengthCard({ item, idx, reducedMotion }) {
  return (
    <EnhancedCard
      gradient={item.gradient}
      variants={cardVariants}
      initial="hidden"
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={reducedMotion ? {} : { scale: 1.02 }}
      whileFocus={reducedMotion ? {} : { scale: 1.02 }}
      tabIndex={0}
      role="article"
      aria-label={item.title}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      sx={{ width: "100%", maxWidth: 380 }}
    >
      <IconContainer
        color={item.color}
        variants={iconVariants}
        initial="hidden"
        animate={reducedMotion ? { scale: 1 } : "visible"}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: item.gradient,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "1.6rem"
          }}
        >
          {item.icon}
        </Box>
      </IconContainer>

      <Box sx={{ textAlign: "center", px: 1 }}>
        <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 1.5 }}>
          {item.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {item.description}
        </Typography>
      </Box>

      <Box
        sx={(theme) => ({
          position: "absolute",
          top: 0,
          right: 0,
          width: 44,
          height: 44,
          borderTopRightRadius: theme.shape.borderRadius * 3,
          borderBottomLeftRadius: "100%",
          background: `linear-gradient(135deg, ${item.color}22, transparent)`,
          zIndex: 1
        })}
        aria-hidden
      />
    </EnhancedCard>
  );
});

export default function StrengthsSectionPerf() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const reducedMotion = useReducedMotion();

  // generate floating shapes once — avoids new random values each render
  const floatShapes = useMemo(() => {
    const count = isXs ? 3 : isSm ? 4 : 6;
    return Array.from({ length: count }).map((_, i) => {
      const base = strengthsData[i % strengthsData.length];
      // small transforms to keep movement subtle and cheap
      const dx = `${Math.round((Math.random() * 40 - 20))}px`;
      const dy = `${Math.round((Math.random() * 30 - 15))}px`;
      const dur = 14 + Math.round(Math.random() * 12);
      const size = 80 + Math.round(Math.random() * 180);
      const top = Math.round(Math.random() * 86);
      const left = Math.round(Math.random() * 86);

      return {
        id: i,
        color: base.color,
        top,
        left,
        size,
        dx,
        dy,
        dur
      };
    });
    // depend on breakpoints so shapes re-create only when layout changes
  }, [isXs, isSm]);

  return (
    <Box component="section" sx={{ position: "relative", py: { xs: 6, md: 10 }, overflow: "hidden" }}>
      {/* Render CSS-driven floating shapes */}
      {floatShapes.map((s) => (
        <Floating
          key={s.id}
          // use CSS variables to parameterize animation — cheap and off main thread
          style={{
            width: s.size,
            height: s.size,
            top: `${s.top}%`,
            left: `${s.left}%`,
            background: s.color,
            // CSS variables used by keyframes
            ["--dx"]: s.dx,
            ["--dy"]: s.dy,
            animationDuration: `${reducedMotion ? 0 : s.dur}s`,
            opacity: reducedMotion ? 0 : undefined
          }}
        />
      ))}

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.45 }}
          sx={{ textAlign: "center", mb: { xs: 4, md: 8 }, px: { xs: 2, sm: 3 } }}
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
            Our Key Strengths
          </Typography>
        </Box>

        <Box component={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {strengthsData.map((item, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                <StrengthCard item={item} idx={idx} reducedMotion={reducedMotion} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
