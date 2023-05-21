import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import axios from 'axios';


const Row = ({ title, URL }) => {

    //States 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((response => { setMovies(response.data.results) }))
    }, [URL])


    return (
        <div className=' w-full h-auto my-5 text-white' >
            <h1 className='text-xl sm:text-2xl md:text-3x p-4 font-bold'> {title} </h1>
            <div id='slider'>
                {
                    movies.map((item, id) => <CardMovie
                        key={id}
                        movie={item}
                    />)
                }
            </div>
        </div>

    )
}

export default Row
