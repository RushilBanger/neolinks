import React from 'react'
import Link from 'next/link'
const Navbar = () => {
    return (
        <nav className=' h-16 bg-purple-700 flex justify-between px-3 items-center text-white '>
            <div className=' text-sm logo font-bold md:text-lg'>
                <Link href='/'>NeoLinks</Link>
                </div>
            <ul className='flex justify-center md:gap-3 gap-2 items-center text-xs md:text-base '>
                <Link href='/'><li>Home</li></Link>
                <Link href='/shorten'><li>Shortner</li></Link>
                {/* <Link href='/contact'><li>Contact Us</li></Link>
                <Link href='/about'><li>About</li></Link> */}
                <li className='flex md:gap-3 gap-1'>
                <Link href='/shorten'><button className='bg-purple-900 rounded-lg md:p-3 p-1.5 py-2 font-bold shadow-lg'>Try Now</button></Link>
                <Link href='/www.linkedin.com/in/rushilbanger'><button className='bg-purple-900 rounded-lg md:p-3 p-1.5 py-2 font-bold shadow-lg'>Linked In</button></Link>
               </li>
            </ul >
        </nav >
    )
}

export default Navbar
