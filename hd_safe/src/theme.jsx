import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#ff6700", contrastText: "#FFFFFF" }, // Safety Orange
    secondary: { main: "#2B2B2B", contrastText: "#FFFFFF" }, // Steel Grey / Black
    background: { default: "#FFFFFF" },
    text: { primary: "#2B2B2B" },
  },
  typography: {
    button: { textTransform: "none", fontWeight: 600 },
  },
});

export default theme;
