'use client'

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon} from '@chakra-ui/icons'
import { FcContacts, FcIdea, FcDiploma1, FcBusinessman, FcDocument } from 'react-icons/fc'

const Links = ['01.about-me', '02.projects', '03.experience', '04.blog', '05.contact-me']

const NavLink = (props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <Box>Anesu Rirwa</Box>

          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} alignSelf={'center'}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <Flex alignItems={'center'}>
          
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
            <MenuList>
              <MenuItem icon={<FcBusinessman />} >
                About Me
              </MenuItem>
              <MenuItem icon={<FcIdea />} >
                Projects
              </MenuItem>
              <MenuItem icon={<FcDiploma1 />} >
                Experience
              </MenuItem>
              <MenuItem icon={<FcDocument />} >
                Blog
              </MenuItem>
              <MenuItem icon={<FcContacts />} >
                Contact Me
              </MenuItem>
            </MenuList>
          </Menu>    
          </Flex>
        </Flex>        
      </Box>

    </>
  )
}