import React from 'react'
import { FaLinkedin, FaGithub, FaMailBulk, FaMailchimp } from 'react-icons/fa'
import { EmailIcon } from '@chakra-ui/icons'
import { Stack, Text, VisuallyHidden, chakra, useColorModeValue } from '@chakra-ui/react'

const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }

const SocialLinks = () => {
  return (
    <>
        <Stack direction={'row'} spacing={6}>
          <Text alignSelf={'center'}>© 2022 </Text>
        
          <SocialButton label={'Github'} href={'#'}>
            <FaGithub />
          </SocialButton>

          <SocialButton label={'LinkedIn'} href={'#'}>
            <FaLinkedin />
          </SocialButton>

          <SocialButton label={'LinkedIn'} href={'#'}>
            <EmailIcon />
          </SocialButton>
        </Stack>
    </>
  )
}

export default SocialLinks