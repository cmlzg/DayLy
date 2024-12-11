import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./Components/Navigation";
import Home from "./Pages/HomePage";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* Only show Footer if not on Login or Register pages */}
        {window.location.pathname !== "/login" && window.location.pathname !== "/register" && <Footer />}
      </div>
    </Router>
  );
}

export default App;
