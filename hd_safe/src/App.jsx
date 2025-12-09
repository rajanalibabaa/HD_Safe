import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProductPage from "./Pages/ProductPage";
function App() {

  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
      </Routes>
      <Footer/>
     
    </Router>
    </>
  )
}

export default App
