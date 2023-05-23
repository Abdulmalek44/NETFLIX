import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';


const AccountMovie = ({ movie, deleteShow }) => {
    return (
        <div className='w-[190px] sm:w-[200px] md:w-[240px] lg:w-[285px] xl:w-[320px] inline-block
         cursor-pointer relative p-2 text-white'
        >
            <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/original${movie?.img}`}
                alt={movie?.title}
            />
            <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/70  hover:opacity-100'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {movie?.title}
                </p>
                <p onClick={() => deleteShow(movie.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
            </div>
        </div>
    )
}

export default AccountMovie
