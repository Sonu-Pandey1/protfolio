// import React from 'react'
import { Route, Routes } from "react-router-dom"
import "../src/App.css"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Header/Hero"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
<<<<<<< HEAD
import Portfolio from "./Components/Myportfolio/Portfolio"
=======
>>>>>>> 12c8960e02cd47f80689012ab1376dc0a3c201c2
// import Exprences from "./Components/Exprences/Exprences"

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      {/* <Exprences/> */}
<<<<<<< HEAD
      <Portfolio/>
=======
>>>>>>> 12c8960e02cd47f80689012ab1376dc0a3c201c2

      <Routes>
        <Route path="/" element={<h1></h1>}/>
        <Route path="/about" element={<h1>about</h1>}/>
        <Route path="/services" element={<h1>service</h1>}/>
        <Route path="/portfolio" element={<h1>portfolio</h1>}/>
        <Route path="/contact" element={<h1>contact</h1>}/>
        <Route path="/downloadcv" element={<h1>DOWNLOAD CV</h1>}/>
        <Route path="/*" element={<h1>404 Page Not Found</h1>}/>
      </Routes>

    </div>
  )
}
