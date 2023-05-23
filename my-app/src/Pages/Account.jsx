import React from 'react'
import { SaveShows } from '../Components'

const Account = () => {
    return (
        <>
            <div className='w-full h-auto text-white py-24' >
                <h1 className=' text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 pl-10'>
                    My Shows
                </h1 >
                <SaveShows />
            </div >
        </>
    )
}

export default Account
