import "animate.css";
import './App.css';
import './mode.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { Route, Routes, useLocation } from 'react-router-dom';
import ProjectDetails from "./components/details";
import { enableDarkMode } from "./components/mode";
import { useEffect } from "react";
import { AnimatePresence, useScroll, motion } from "framer-motion";
import arrow from "./images/icons/arrow-up.svg";
function App() {
  const location = useLocation();
    const { scrollYProgress } = useScroll();
    useEffect(() => {
        if (localStorage.getItem("mode") === "dark") {
            enableDarkMode();
        }
    }, [])
    return (
      <div className="App">
        <motion.div
            style={{ scaleX: scrollYProgress }} 
            className="progressbar"
            />
        <AnimatePresence>
          <Routes key={location.pathname} location={location}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/detail/:name' element={<ProjectDetails />} />
            <Route path='*' element={<h2 className='p-5'>Not found</h2>} />
          </Routes>
        </AnimatePresence>
        <a href="#Navbar" className="back-to-top d-flex align-items-center justify-content-center">
            <img src={arrow} alt="" />
        </a>
      </div>
  );
}

export default App;
