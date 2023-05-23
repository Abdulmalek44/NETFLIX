import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import axios from 'axios';


const Row = ({ title, URL, rowID }) => {

    //States 
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((response => { setMovies(response.data.results) }))
    }, [URL])

    //Functons 
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };


    return (
        <div className=' w-full h-auto text-white' >
            <h1 className='text-xl sm:text-2xl md:text-3x p-4 font-bold'> {title} </h1>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    size={40}
                    className='hidden bg-white text-black rounded-full opacity-60 hover:opacity-100 duration-300 
                    left-2 absolute z-10 cursor-pointer group-hover:block '
                />
                <div
                    id={'slider' + rowID}
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide  relative 
               '>
                    {
                        movies.map((item, id) => {
                            if (item?.backdrop_path != null) {
                                return <CardMovie key={id} movie={item} />;
                            }
                            return null;
                        })
                    }
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    size={40}
                    className='hidden bg-white text-black rounded-full opacity-60 hover:opacity-100 duration-300
                     right-2 absolute z-10 cursor-pointer  group-hover:block  '
                />
            </div>
        </div>

    )
}

export default Row
