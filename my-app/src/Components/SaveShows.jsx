import React, { useEffect, useState } from 'react'
import { UserAuth } from '../Context/AuthContext';
import { db } from '../Firebase';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'
import AccountMovie from './AccountMovie';

const SaveShows = () => {
    //States
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth()
    const movieRef = doc(db, 'users', `${user?.email}`);

    //Functons 
    const deleteShow = async (Id) => {
        try {
            const result = movies.filter(item => item.id !== Id)
            await updateDoc(movieRef, {
                savedShows: result,
            })
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

    return (
        <>        <div className=' w-[94%] mx-auto text-white flex items-center justify-center ' >
            <div className='grid grid-cols-2 sm:grid-cols-3   2xl:grid-cols-4  ' >
                {
                    movies.map((item, id) => <AccountMovie
                        key={id}
                        movie={item}
                        deleteShow={deleteShow}
                    />)
                }
            </div>
        </div>
        </>

    )
}

export default SaveShows