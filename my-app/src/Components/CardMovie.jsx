import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const CardMovie = ({ movie }) => {

    //States 
    const [like, setLike] = useState(false);

    //Functions
    const handleLike = () => setLike(!like);


    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 text-white'>
            <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt={movie?.title}
            />
            <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/70  hover:opacity-100'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {movie?.title}
                </p>
                <span onClick={handleLike} className='absolute left-4 top-4'>
                    {like ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
                </span>
            </div>
        </div>
    )
}

export default CardMovie