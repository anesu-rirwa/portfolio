'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react'
import TechStack from './techStack'
import MyImage from './image'

export default function AboutMe() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading textAlign={{base: 'center', md: 'left'}}>About Me</Heading>


          <Text color={'gray.500'} textAlign={{base: 'center', md: 'left'}} fontSize={'lg'}>
          Hello there! 👋 I'm Anesu Rirwa, a passionate software developer with a knack for crafting elegant solutions to complex problems. With a strong foundation in both web and mobile development, coupled with my enthusiasm for AI and machine learning, I thrive in dynamic environments where innovation and creativity are valued.
          </Text>
        </Stack>

        <TechStack />
      </SimpleGrid>
    </Container>
  )
}