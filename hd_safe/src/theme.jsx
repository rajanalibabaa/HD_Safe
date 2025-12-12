import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#FF6700", contrastText: "#FFFFFF" }, 
    secondary: { main: "#2B2B2B", contrastText: "#FFFFFF" }, 
    background: { default: "#FFFFFF" },
    text: { primary: "#000000ff" },
  },
  typography: {
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
