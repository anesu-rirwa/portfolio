import React from 'react'
import { Stack, Tooltip, useColorModeValue, useClipboard, IconButton, Box } from '@chakra-ui/react'
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const SocialLinks = () => {
  const { hasCopied, onCopy } = useClipboard('example@example.com')
  
  return (
    <>
      <Stack
            spacing={{ base: 4, md: 8, lg: 20 }}
            direction={"row"}
            align={{base: "center", md: "start"}}
            justify={{base: "center", md: "start"}}
            >
          <Stack
            direction={'row'}>
            <Tooltip
              label={hasCopied ? 'Email Copied!' : 'Copy Email'}
              closeOnClick={false}
              hasArrow>
              <IconButton
                aria-label="email"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<MdEmail />}
                _hover={{
                  bg: 'blue.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                onClick={onCopy}
                isRound
              />
            </Tooltip>

            <Box as="a" href="#">
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                fontSize="3xl"
                icon={<BsGithub />}
                _hover={{
                  bg: 'blue.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                isRound
              />
            </Box>

            <Box as="a" href="#">
              <IconButton
                aria-label="twitter"
                variant="ghost"
                size="lg"
                icon={<BsTwitter size="28px" />}
                _hover={{
                  bg: 'blue.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                isRound
              />
            </Box>

            <Box as="a" href="#">
              <IconButton
                aria-label="linkedin"
                variant="ghost"
                size="lg"
                icon={<BsLinkedin size="28px" />}
                _hover={{
                  bg: 'blue.500',
                  color: useColorModeValue('white', 'gray.700'),
                }}
                isRound
              />
            </Box>
          </Stack>
        </Stack>
    </>
  )
}

export default SocialLinks