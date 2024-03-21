import React from 'react'
import { Image, Text } from '@chakra-ui/react'
import me from '../../public/tech.svg'

const MyImage = () => {
    return (
    <>
        <Image
        height={500}
        src={me.src}
        alt='Anesu Rirwa'
        />
    </>
  )
}

export default MyImage