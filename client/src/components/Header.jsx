import { Button, Navbar, NavbarLink, NavbarToggle, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
import { NavbarCollapse} from 'flowbite-react'

export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
          <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>MyLikes</span>
          Blog
        </Link>
        <form >
            <TextInput 
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        <Button className='w-16 h-10 lg:hidden' color='light' pill>
            <AiOutlineSearch />
        </Button>

        <div className="flex gap-2.5 md:order-2">
            <Button className='w-16 h-10 hidden sm:inline' color='light' pill>
                <FaMoon />
            </Button>
            <Link to='/sign-in'>
            <Button color='pink' outline>
                Sign In
            </Button>
            </Link>
            <NavbarToggle />
        </div>

        <NavbarCollapse>
                <NavbarLink active={path ==='/'} as={Link} to='/'>
                Home
                </NavbarLink>

                <NavbarLink active={path ==='/about'} as={Link} to='/about'>
                About 
                </NavbarLink>

                <NavbarLink active={path ==='/projects'} as={Link} to='/projects'>
                Projects 
                </NavbarLink>
                
                

            </NavbarCollapse>
    </Navbar>
  )
}
