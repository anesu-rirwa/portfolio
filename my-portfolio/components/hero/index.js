'use client'

import {
  Box,
  Heading,
  Container,
  Text,
  Show,
  Stack,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'
import { TypeAnimation } from 'react-type-animation'
import NavLinks from '../navbar/links'
import SocialLinks from '../socials'
import MyInfo from '../aboutMe/info'

export default function Hero() {
  return (
    <>
      <Container maxW={'3xl'}  px={{base: "10", lg: "12"}} height={'100vh'}
      bg={useColorModeValue('gray.100', 'gray.900')}>
        <Stack
          as={Box}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 10, md: 12 }}>
          
          <Heading
            fontWeight={600}
            lineHeight={'110%'}>
            <Show above='md'>
              <Text as={'span'} textAlign={'center'} >
                Hi! I'm Anesu👋<br />
              </Text>
            </Show>

            <Show below='md'>
              <Flex align={{base: "center", md: "start"}}
              justifyContent={{base: "center", md: "start"}}>
                <Text as={'span'} textAlign={'center'} fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>
                  Hi There! 👋<br />
                </Text>
              </Flex>
            </Show>

            <Flex align={{base: "center", md: "start"}}
              justifyContent={{base: "center", md: "start"}}>
              <Text as={'span'} color={'green.400'} fontSize={{ base: '2xl', sm: '3xl', md: '3xl' }}>
                <TypeAnimation 
                  sequence={[
                    'Web Developer',
                    3000,
                    'Mobile Developer',
                    3000,
                    'Machine Learning',
                    3000
                  ]}
                  wrapper='span'
                  cursor={true}
                  repeat={Infinity}
                />
              </Text>
            </Flex>
          </Heading>

          <Show below='md'>
            <MyInfo />
          </Show>

          <Show above="md">
            <Stack>
              <NavLinks />
            </Stack>
          </Show>

          <SocialLinks />
          
        </Stack>
      </Container>
    </>
  )
}

