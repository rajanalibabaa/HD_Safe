import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
<<<<<<< HEAD
    primary: { main: "#FF6700", contrastText: "#FFFFFF" }, 
    secondary: { main: "#2B2B2B", contrastText: "#FFFFFF" }, 
=======
    primary: { main: "#ff6700", contrastText: "#FFFFFF" }, // Safety Orange
    secondary: { main: "#2B2B2B", contrastText: "#FFFFFF" }, // Steel Grey / Black
>>>>>>> 2507c2e5b6d256fc65a772870ca7d5b8f2a0c4cc
    background: { default: "#FFFFFF" },
    text: { primary: "#000000ff" },
  },
  typography: {
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
