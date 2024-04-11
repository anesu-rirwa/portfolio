'use client'

import {
  Box,
  Container,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import SocialLinks from '../socials'

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>       
      </Container>

      <SocialLinks />
    </Box>
  )
}