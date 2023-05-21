import React from 'react'
import { Main, Row } from '../Components'
import requests from '../requests '

const Home = () => {
    return (
        <div className='w-full h-screen ' >
            <Main />
            <Row title='Popular' URL={requests.requestPopular} />

        </div>
    )
}

export default Home