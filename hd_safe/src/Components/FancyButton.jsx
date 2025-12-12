import React from "react";
import { styled } from "@mui/material";
import { motion } from "framer-motion";

const FancyButtonRoot = styled(motion.button)(({ theme, variant = "primary" }) => ({
  position: "relative",
  cursor: "pointer",
  padding: theme.spacing(1.5, 4),
  fontFamily: "'Barlow', sans-serif",
  fontSize: "0.95rem",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
color: variant === "primary" ? theme.palette.common.white : theme.palette.text.primary,
  border: 0,
  borderRadius: theme.shape.borderRadius * 2,
 background: variant === "primary"
    ? "linear-gradient(135deg, #FF4D00 0%, #FF6700 100%)"
    : "#fff",

  overflow: "hidden",

  "& .shine": {
    position: "absolute",
    top: 0,
    left: "-75%",
    width: "40%",
    height: "100%",
    background: "rgba(255,255,255,.25)",
    transform: "rotate(12deg)",
    filter: "blur(4px)",
    transition: "left 1s ease-in-out",
  },
  
  "&:hover .shine": { 
    left: "125%" 
  },

  "& .corner": {
    position: "absolute",
    borderColor: variant === "primary" 
      ? "rgba(255,255,255,0.8)" 
      : "#FF4D00",
  },
  
  "& .tl": { 
    top: 0, 
    left: 0, 
    width: "50%", 
    height: "20%", 
    borderTop: "2px solid", 
    borderLeft: "2px solid" 
  },
  
  "& .tr": { 
    top: 0, 
    right: 0, 
    width: "50%", 
    height: "60%", 
    borderTop: "2px solid", 
    borderRight: "2px solid", 
    transition: "height .3s" 
  },
  
  "& .bl": { 
    bottom: 0, 
    left: 0, 
    width: "50%", 
    height: "60%", 
    borderBottom: "2px solid", 
    borderLeft: "2px solid", 
    transition: "height .3s" 
  },
  
  "& .br": { 
    bottom: 0, 
    right: 0, 
    width: "50%", 
    height: "20%", 
    borderBottom: "2px solid", 
    borderRight: "2px solid" 
  },
  
  "&:hover .tr, &:hover .bl": { 
    height: "90%" 
  },

  "&.small": {
    padding: theme.spacing(1, 3),
    fontSize: "0.85rem",
  },

  "&.large": {
    padding: theme.spacing(2, 5),
    fontSize: "1.1rem",
  },

  "&.fullWidth": {
    width: "100%",
  },

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
    "&:hover": {
      transform: "none",
    }
  },
}));

const FancyButton = ({ 
  children, 
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  className = "",
  onClick,
  ...props 
}) => {
  const sizeClass = {
    small: "small",
    medium: "",
    large: "large",
  }[size];

  const buttonClasses = [
    sizeClass,
    fullWidth ? "fullWidth" : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <FancyButtonRoot
      type="button"
      variant={variant}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.05, y: -2 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      {...props}
    >
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      <span className="shine" />
      {["tl", "tr", "bl", "br"].map((c) => (
        <span key={c} className={`corner ${c}`} />
      ))}
    </FancyButtonRoot>
  );
};

export default FancyButton;