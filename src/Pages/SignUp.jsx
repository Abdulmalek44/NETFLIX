import React, { useState } from 'react'
import img from '../assets/signup.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const SignUp = () => {
    //user ertyutrewrtyuk
    const { signUp } = UserAuth()
    const navigate = useNavigate()

    //States
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    //Functions
    const handleNameChange = (e) => {
        const value = e.target.value
        setName(value)

    }
    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)

    }
    const handlePasswordChange = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const handleClick = async (e) => {
        e.preventDefault()

        if (name.length < 4) { setErrorName('Name should be at least four characters.'); }
        else { setErrorName('') }

        if (email === '') { setErrorEmail('Please enter your email.'); }
        else { setErrorEmail('') }

        if (password.length < 6) { setErrorPassword('Password should be at least 6 characters.'); }
        else { setErrorPassword('') }

        try {
            await signUp(email, password)
            navigate('/NETFLIX')
        }
        catch (error) {
            console.log(error)
        }

    }




    return (
        <div className='w-full h-screen text-white'>
            <img src={img} alt='No_photo'
                className='hidden sm:block absolute w-full h-full object-cover' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen flex justify-center items-center'>
                <div className='w-[400px] h-[500px] bg-black/75 flex mt-6 rounded-md ' >
                    <div className=' w-[75%] m-auto  '>
                        <h1 className='font-bold text-4xl mb-6'> Sign Up </h1>
                        <form className='w-full h-full'>
                            <input
                                onChange={handleNameChange}
                                type='text'
                                placeholder='Name'
                                required
                                className='w-full h-12 my-2 px-4 bg-[#333333] focus:bg-[#454545] rounded-md outline-none focus:border-b-2 border-[#e50914]'
                            />
                            <p className='text-[#e50914] text-xs pl-2 font-bold'>
                                {errorName}
                            </p>
                            <input
                                onChange={handleEmailChange}
                                type='email'
                                placeholder='Email'
                                required
                                className='w-full h-12 my-2 px-4 bg-[#333333] focus:bg-[#454545] rounded-md outline-none focus:border-b-2 border-[#e50914]'
                            />
                            <p className='text-[#e50914] text-xs pl-2 font-bold'>
                                {errorEmail}
                            </p>
                            <input
                                onChange={handlePasswordChange}
                                type='password'
                                placeholder='Password'
                                required
                                className='w-full h-12 my-2 px-4 bg-[#333333] focus:bg-[#454545] rounded-md outline-none focus:border-b-2 border-[#e50914] '
                            />
                            <p className='text-[#e50914] text-xs pl-2 font-bold'>
                                {errorPassword}
                            </p>
                            <NavLink to='account'>
                                <button
                                    onClick={handleClick}
                                    type='submit'
                                    className='w-full h-12 mb-2 mt-8 bg-[#e50914] hover:bg-[#B00710] duration-300
                                    rounded-md text-center font-semibold'>
                                    Sign Up
                                </button>
                            </NavLink>
                            <div className='flex items-center justify-between'>
                                <p className='text-sm text-[#8c8c8c] flex'>
                                    <input
                                        type='checkbox'
                                        className='mr-1  bg-green-500 text-red-500 '
                                    />
                                    Remember me
                                </p>
                                <p className='text-sm text-[#8c8c8c] hover:underline'>Need help?</p>
                            </div>
                            <div className='w-full flex mt-10'>
                                <h2 className='text-[#8c8c8c] text-base mr-1'> I already have an account  </h2>
                                <NavLink to='/signin' className='hover:underline'>
                                    Sign In
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignUp