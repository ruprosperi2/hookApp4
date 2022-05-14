import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import AboutScrenn from "./AboutScrenn";


const AppRouter = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/login" className="nav-item nav-link">Login</Link>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/about" element={<AboutScrenn/>}/>
                <Route path="login/" element={<LoginScreen/>}/>
            </Routes>
        </>
    );
};

export default AppRouter;
