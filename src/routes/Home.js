import React from 'react'
import AddFilm from '../components/AddFilm'
import FilmList from '../components/FilmList'
import Header from '../components/Header'
import MovieDetail from './MovieDetail'

const Home = () => {
    return (
        <div>
           <Header />
           <AddFilm />
           <FilmList/>
           
        </div>
    )
}

export default Home
