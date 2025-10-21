import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import CraftSection from '../components/CraftSection'
import Services from '../components/Services'
import ConnectSection from '../components/ConnectSection'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <CraftSection/>
        <Services/>
        <ConnectSection/>
        <Gallery/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default Home