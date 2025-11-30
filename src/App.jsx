import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Competences from './components/Competences'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <div className='p-5 md:px-[15%]'>
        <Navbar/>
        <Home/>
      </div>
      <About/>
      <div className='p-5 md:px-[15%]'>
        <Competences/>
        <Projects/>
      </div>
      <Footer/>
    </>
  )
}

export default App
