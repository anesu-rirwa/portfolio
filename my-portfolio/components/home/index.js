import React from 'react'
import Navbar from '../navbar'
import Hero from '../hero'
import Footer from '../footer'
import Projects from '../projects'
import AboutMe from '../aboutMe'
import Contact from '../contact'

const HomePage = ({projects}) => {
  return (
    <>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default HomePage