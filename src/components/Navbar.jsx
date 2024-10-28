import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import logo from '../assets/rana-logo.png'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href='/' aria-label='home'>
            <img src={logo} className='mx-2' width={58} height={33} alt='logo'  />

            </a>

        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://www.linkedin.com/in/ammar-mushtaq-395722152/'
        target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
        >
           <FaLinkedin/>


        </a>
        <a href='https://github.com/RanaAmmar344'
        target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
        >
           <FaGithub/>


        </a>
        <a href='https://www.instagram.com/'
        target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
        >
           <FaInstagram/>


        </a>
        <a href='https://twitter.com/?lang-en'
        target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'
        >
           <FaSquareXTwitter/>


        </a>

        </div>
      
    </nav>
  )
}

export default Navbar
