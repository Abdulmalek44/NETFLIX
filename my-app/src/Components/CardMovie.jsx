import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { db } from '../Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const CardMovie = ({ movie }) => {

    //States 
    const [like, setLike] = useState(false);
    const { user } = UserAuth()
    const navigate = useNavigate()

    const movieID = doc(db, 'users', `${user?.email}`);

    //Functions
    const saveMovie = async () => {
        if (user?.email) {
            setLike(!like)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: movie?.id,
                    title: movie?.title,
                    img: movie?.backdrop_path
                })
            })

        } else {
            navigate('/signin')
        }
    };


    return (
        <div className='w-[250px] sm:w-[300px] md:w-[340px] lg:w-[380px] inline-block cursor-pointer relative p-2 text-white'>
            <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                alt={movie?.title}
            />
            <div className=' absolute top-0 left-0 w-full h-full opacity-0 hover:bg-black/70  hover:opacity-100'>
                <p className='white-space-normal text-sm md:text-lg font-bold flex justify-center items-center h-full text-center'>
                    {movie?.title}
                </p>
                <span onClick={saveMovie} className='absolute left-4 top-4 '>
                    {like ? <FaHeart size={20} className='text-red-500' /> : <FaRegHeart size={20} />}
                </span>
            </div>
        </div>
    )
}

export default CardMovie