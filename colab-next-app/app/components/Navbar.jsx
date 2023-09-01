import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className='h-20 md:h-[88px] z-30 bg-white w-full flex justify-between items-center drop-shadow-lg px-5 py-4 lg:px-24'>
        <Link href="/">
        <Image
        src={'https://assets.website-files.com/5f5e3428a1c1478d81e71075/64c76081208ae4da83d6eb05_Co.Lab%20Logo.svg'}
        height={'46'}
        width={'160'}
        alt='Co.lab Company Logo'
         />
        </Link>
        <ul className='text-lg hidden lg:flex'>
            <li><Link href="/#welcome" className='py-8 px-4'>Home</Link></li>
            <li><Link href="/#AboutMe" className='py-8 px-4'>About Me</Link></li>
            <li><Link href="/#Projects" className='py-8 px-4'>Projects</Link></li>
            <li><Link href="/#Contact" className='py-8 px-4'>Contact</Link></li>
        </ul>
        <div className='lg:hidden h-16 flex flex-1 justify-end items-center'>
        {toggle ? (
          <RxHamburgerMenu
            className='w-8 h-8 hover:cursor-pointer'
            onClick={handleClick}
          />
        ) : (
          <AiOutlineClose
            className='w-8 h-8 hover:cursor-pointer'
            onClick={handleClick}
          />
        )}
        <div
          className={`${
            toggle ? 'hidden' : 'flex'
          }  bg-white w-48 shadow-lg text-lg justify-center absolute top-20 right-0 mx-4 my-2 min-[440px]:my-8 min-[440px]:mx-8 text-center rounded-xl sidebar`}
        >
          <ul className='flex flex-col text-black w-full py-4'>
          <li><Link href="/#welcome" className='py-2 w-full block hover:bg-gray-200'>Home</Link></li>
            <li><Link href="/#AboutMe" className='py-2 w-full block hover:bg-gray-200'>About Me</Link></li>
            <li><Link href="/#Projects" className='py-2 w-full block hover:bg-gray-200'>Projects</Link></li>
            <li><Link href="/Resume" className='py-2 w-full block hover:bg-gray-200'>Resume</Link></li>
            <li><Link href="/#Contact" className='py-2 w-full block hover:bg-gray-200'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar