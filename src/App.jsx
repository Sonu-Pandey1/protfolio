// import React from 'react'
import { Route, Routes } from "react-router-dom"
import "../src/App.css"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Header/Hero"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Portfolio from "./Components/Myportfolio/Portfolio"
import Contact from "./Components/Contact/Contact"


export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Exprences/> */}
      <Portfolio/>
      <Contact/>
      <footer>
        <div className="container-fulid mt-5 p-4 text-center bg-light ">
          <h1 className="display-6 footerh1">Created By Mr. Sonu Pandey | © All Right Reseved!</h1>
        </div>
      </footer>

      <div className="wrapper">
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
        <div><span className="dot"></span></div>
    </div>

      
{/* 
      <Routes>
        <Route path="/" element={<h1></h1>}/>
        <Route path="/about" element={<h1>about</h1>}/>
        <Route path="/services" element={<h1>service</h1>}/>
        <Route path="/portfolio" element={<h1>portfolio</h1>}/>
        <Route path="/contact" element={<h1>contact</h1>}/>
        <Route path="/downloadcv" element={""}/>
        <Route path="/*" element={<h1>404 Page Not Found</h1>}/>
      </Routes> */}

    </div>
  )
}
