import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendingMovies from "./components/TrendingMovies";
import Awards from "./components/Awards";
import "./styles/app.css";
import Quotations from "./components/Quotations";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Navbar />

                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<HeroSection />} />

                    {/* Trending Movies Page */}
                    <Route path="/trending" element={<TrendingMovies />} />

                    {/* Awards Page */}
                    <Route path="/awards" element={<Awards />} />

                </Routes>
                <Quotations></Quotations>
                <Footer></Footer>
            </div>
        </Router>
    );
};

export default App;
