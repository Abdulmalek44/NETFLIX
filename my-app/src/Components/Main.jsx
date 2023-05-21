import React, { useEffect, useState } from 'react'
import requests from '../requests '
import axios from 'axios'

const Main = () => {

    //States 
    const [movies, setMovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    //Functions

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, 200) + '...'
        } else {
            return str
        }
    }


    useEffect(() => {
        axios.get(requests.requestPopular)
            .then((response) => { setMovies(response.data.results) })

    }, [])
    return (
        <div className='w-full h-[600px] text-white'>
            <div className='w-full h-full'>
                <div className=' absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
                <img
                    className='w-full h-full object-cover'
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                    alt={movie?.title}
                />
                <div className='absolute w-full top-32 px-6'>
                    <h1 className=' font-bold text-3xl mb-4  sm:text-5xl '> {movie?.title} </h1>
                    <div className='mb-6'>
                        <button className='px-4 py-2 text-black mr-4  border-white border-2 bg-white font-semibold'>
                            Paly
                        </button>
                        <button className='px-4 py-2 font-semibold border-white border-2' > watch Later </button>
                    </div>
                    <h2 className=' font-bold text-lg mb-4  sm:text-xl text-gray-400'> released {movie?.release_date} </h2>
                    <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-400 text-xl'  >
                        {truncateString(movie?.overview, 150)}
                    </p>
                </div>

            </div>
        </div >
    )
}

export default Main