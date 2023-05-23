import React from 'react'
import { Main, Row } from '../Components'
import requests from '../requests '

const Home = () => {
    return (
        <div className='w-full h-screen  scrollbar' >
            <Main />
            <Row rowID='1' title='Trending' URL={requests.requestTrending} />
            <Row rowID='2' title='TopRated' URL={requests.requestTopRated} />
            <Row rowID='3' title='Upcoming' URL={requests.requestUpcoming} />
            <Row rowID='4' title='Popular' URL={requests.requestPopular} />
            <Row rowID='5' title='Horror' URL={requests.requestHorror} />

        </div>
    )
}

export default Home