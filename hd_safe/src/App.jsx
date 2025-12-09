import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Box component="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
