import React from 'react'
import { Link } from '@chakra-ui/react'

const NavLinks = () => {
    const links = ['01.about-me', '02.projects', '03.experience', '04.blog', '05.contact-me']

    const renderLinks = () => {
        return links.map((link) => {
            return (<Link href={`#${link}`}>{link}</Link>)
        })
    }

    return (
        <>
            {renderLinks()}
        </>
    )
}

export default NavLinks