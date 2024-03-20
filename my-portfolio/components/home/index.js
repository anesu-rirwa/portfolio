import React from 'react'
import Navbar from '../navbar'
import Hero from '../hero'
import Footer from '../footer'
import Projects from '../projects'
import AboutMe from '../aboutMe'

const HomePage = ({projects}) => {
  return (
    <>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Footer />
    </>
  )
}

export default HomePage