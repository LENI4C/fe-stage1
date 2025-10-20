import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProfileCard from "./components/ProfileCard";
import ContactUs from "./components/ContactUs";
import AboutMe from "./components/AboutMe";

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <Navigation />
                <main className="container mx-auto px-4 py-8">
                    <Routes>
                        <Route path="/" element={<ProfileCard />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/about" element={<AboutMe />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
