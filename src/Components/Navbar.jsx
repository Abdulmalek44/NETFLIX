import React from 'react'
import logo from '../assets/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Navbar = () => {

    const { user, logOut } = UserAuth()
    const navigate = useNavigate()
    console.log(user)

    //Functions
    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className='fixed w-full h-20 bg-transparent text-white z-50' >
            <nav className='w-full h-full flex justify-between items-center px-6' >
                <div>
                    <NavLink to='/NETFLIX'>
                        <img src={logo} alt='No_photo' className=' md:w-44 w-32 cursor-pointer' />
                    </NavLink>
                </div>
                <div>
                    <div className={user?.email ? 'flex' : 'hidden'}>
                        <NavLink to='account'>
                            <button className='py-2 px-4'>
                                Account
                            </button>
                        </NavLink>
                        <button
                            onClick={handleLogout}
                            className='py-2 px-4 rounded-md font-medium bg-[#E50914] hover:bg-[#B00710] duration-300'
                        >
                            Logout
                        </button>
                    </div>
                    <div className={user?.email ? 'hidden' : 'flex'}>
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
