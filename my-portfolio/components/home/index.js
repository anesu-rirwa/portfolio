import React from 'react'
import Navbar from '../navbar'
import Hero from '../hero'
import Footer from '../footer'
import Projects from '../projects'
import AboutMe from '../aboutMe'
import Contact from '../contact'
import {Flex, Box, Show } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <>
        <Show below="md">
          <Box>
            <Navbar />  
          </Box>
        </Show>  

        <Flex height="100vh" flexDirection={{base: 'column', lg: 'row'}}>
          {/* Fixed section */}
          <Box width={{base: '100%', lg: '40%'}} >
            <Hero />
          </Box>

          {/* Scrollable section */}
          <Box width={{base: '100%', lg: '60%'}} overflowY={{base: 'initial', lg: 'auto'}} >
            <Box h="200vh"> {/* Adding extra height to make content scrollable */}
              {/* Place your scrollable content here */}
              <AboutMe />
              <Projects />
              <Contact />          
            </Box>
          </Box>
        </Flex>

        {/* <Footer /> */}
    </>
  )
}

export default HomePage