import React from 'react'
import {
    Flex,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
import { IoDesktopOutline, IoGitBranch, IoPhonePortraitOutline, IoServerOutline, IoLockClosedOutline, IoLogoMarkdown, IoLogoAndroid } from 'react-icons/io5'
  
const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
}

const TechStack = () => {
  return (
    <Flex>
        <Stack
            spacing={4}
            divider={
            <StackDivider borderColor={useColorModeValue('gray.300', 'gray.700')} />
            }>
            <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Tech Stack
            </Text>

            <Feature
            icon={<Icon as={IoDesktopOutline} color={'black.500'} w={5} h={5} />}
            text={'Frontend: JavaScript (ES6+), React.js, React Native, Flutter'}
            />
            <Feature
            icon={<Icon as={IoLogoAndroid} color={'green.500'} w={5} h={5} />}
            text={'AI & ML: Python, TensorFlow, PyTorch'}
            />
            <Feature
            icon={<Icon as={IoPhonePortraitOutline} w={5} h={5} />}
            text={'Mobile Development: React Native, Flutter'}
            />
            <Feature
            icon={<Icon as={IoGitBranch} w={5} h={5} />}
            text={'Tools & Version Control: Git, Subversion (SVN), Docker'}
            />
            <Feature
            icon={<Icon as={IoServerOutline} color={'purple.500'} w={5} h={5} />}
            text={'Data Management: SQL, NoSQL (MongoDB), Firebase Realtime Database'}
            />
            <Feature
            icon={<Icon as={IoLockClosedOutline} w={5} h={5} />}
            text={'Security & Authentication: JWT, OAuth, Firebase Authentication'}
            />
            <Feature
            icon={<Icon as={IoLogoMarkdown} w={5} h={5} />}
            text={'Markup & Styling: Markdown, HTML5, CSS3, SASS/SCSS, styled-components'}
            />
        </Stack>
    </Flex>
  )
}

export default TechStack