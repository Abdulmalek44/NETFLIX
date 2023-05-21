import React from 'react'
import logo from '../assets/logo3.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='fixed w-full h-20 bg-transparent text-white z-50' >
            <nav className='w-full h-full flex justify-between items-center px-6' >
                <div>
                    <NavLink to='/'>
                        <img src={logo} alt='No_photo' className=' md:w-44 w-32 cursor-pointer' />
                    </NavLink>
                </div>
                <div>
                    {/* <div className='hidden'>
                        <NavLink to='account'>
                            <button className='py-2 px-4'>
                                Account
                            </button>
                        </NavLink>
                        <button className='py-2 px-4 rounded-md font-medium bg-[#E50914] hover:bg-[#B00710] duration-300'>
                            Logout
                        </button>
                    </div> */}
                    <div>
                        <NavLink to='signin'>
                            <button className='py-2 px-4'>
                                Sign In
                            </button>
                        </NavLink>
                        <NavLink to='signup'>
                            <button className='py-2 px-4 rounded-md font-medium bg-[#E50914] hover:bg-[#B00710] duration-300'>
                                Sign Up
                            </button>
                        </NavLink>
                    </div>
                </div>
            </nav >

        </header >
    )
}

export default Navbar
