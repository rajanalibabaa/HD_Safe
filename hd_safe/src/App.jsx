import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useEffect,useState } from "react";
import HomePage from './Pages/HomePage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/ContactUs";
import FAQSection from "./Components/Faq";

import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from "@mui/icons-material/Message";
import Fab from "@mui/material/Fab";


const colors = {
  primary: "#c21f24",
  secondary: "#c21f24",
};

// WhatsApp Button (always visible)
const WhatsAppButton = () => {
  const mobileNumber = "+918248638595";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${mobileNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Fab
      onClick={handleWhatsAppClick}
      sx={{
        position: "fixed",
        bottom: { xs: 170, sm: 470, md: 370, lg: 200 },
        right: { xs: 4, sm: 20, md: 25 },
        backgroundColor: "#25D366",
        color: "#fff",
        width: { xs: 58, sm: 55, md: 55, lg: 60 },
        height: { xs: 58, sm: 55, md: 55, lg: 60 },
        zIndex: 9999,
        "&:hover": {
          backgroundColor: "#1ebe5d",
          transform: "scale(1.1)",
        },
        transition: "all 0.3s ease",
      }}
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon sx={{ fontSize: { xs: 28, sm: 26, md: 30, lg: 32 } }} />
    </Fab>
  );
};

const WhatsAppButton2 = () => {
  return (
    <Fab
      onClick={() => {
        window.location.href = "/contact";
        window.scrollTo(0, 0);
      }}
      sx={{
        position: "fixed",
        bottom: { xs: 100, sm: 120, md: 140 },
        right: { xs: 4, sm: 20, md: 25 },
        backgroundColor: "#25D366",
        color: "#fff",
        width: { xs: 58, sm: 55, md: 55, lg: 60 },
        height: { xs: 58, sm: 55, md: 55, lg: 60 },
        zIndex: 9999,
        "&:hover": {
          backgroundColor: "#1ebe5d",
          transform: "scale(1.1)",
        },
        transition: "all 0.3s ease",
      }}
      aria-label="Contact via Message"
    >
      <MessageIcon sx={{ fontSize: { xs: 28, sm: 26, md: 30, lg: 32 } }} />
    </Fab>
  );
};

// Scroll button
const SmartScrollButton = () => {
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const isAtTop = scrollY <= 50;
      const isAtBottom = scrollY + windowHeight >= fullHeight - 50;

      if (isAtBottom) setScrollDirection("up");
      else if (isAtTop) setScrollDirection("down");
      else setScrollDirection("up");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    if (scrollDirection === "up") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <Fab
      onClick={handleScrollClick}
      size="medium"
      aria-label="Scroll button"
      sx={{
        position: "fixed",
        bottom: { xs: 25, sm: 50, md: 25 },
        right: { xs: 5, sm: 15, md: 25 },
        background: `#c21f24`,
        color: "#fff",
        "&:hover": {
          transform: "translateY(-4px)",
          background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})`,
        },
        transition: "all 0.3s ease",
        zIndex: 9999,
        width: { xs: 54, sm: 58, md: 52 },
        height: { xs: 54, sm: 58, md: 52 },
      }}
    >
      {scrollDirection === "up" ? (
        <KeyboardDoubleArrowUpIcon
          sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }}
        />
      ) : (
        <KeyboardDoubleArrowDownIcon
          sx={{ fontSize: { xs: 20, sm: 22, md: 24 } }}
        />
      )}
    </Fab>
  );
};

function App() {
   const isMobileOrTablet = useMediaQuery("(max-width: 1024px)");

  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      
    </Router>

      <WhatsAppButton />

      {isMobileOrTablet && <WhatsAppButton2 />}

      <SmartScrollButton />
    </>
  )
}

export default App
