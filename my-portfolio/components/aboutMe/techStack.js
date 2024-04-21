import React from 'react'
import {
    Flex,
    Text,
    Stack,
    SimpleGrid,
    Box
} from '@chakra-ui/react'
  
const Feature = ({ text }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Text>{text}</Text>
      </Stack>
    )
}

const TechStack = () => {
  return (
    <Flex mt={10}>
        <Stack
            spacing={4}
            w={'full'}
            >
            <Text
            textTransform={'uppercase'}
            color={'black'}
            fontWeight={600}
            fontSize={'sm'}
            bg={'white'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Tech Stack
            </Text>

            <Box>
              <SimpleGrid columns={{base: 3, lg: 6}}>
                <Feature
                  text={'# Git'}
                />

                <Feature
                  text={'# Java'}
                />

                <Feature
                  text={'# Javascript'}
                />

                <Feature
                  text={'# NextJs'}
                />

                <Feature
                  text={'# React.js'}
                />

                <Feature
                  text={'# Flutter'}
                />
              </SimpleGrid>

              <SimpleGrid columns={{base: 3, lg: 6}}>
                <Feature
                  text={'# NextJs'}
                />

                <Feature
                  text={'# React.js'}
                />

                <Feature
                  text={'# MongoDB'}
                />

                <Feature
                  text={'# Python'}
                />
                
                <Feature
                  text={'# TensorFlow'}
                />

                <Feature
                  text={'# scikit-learn'}
                />
              </SimpleGrid>
            </Box>

        </Stack>
    </Flex>
  )
}

export default TechStack