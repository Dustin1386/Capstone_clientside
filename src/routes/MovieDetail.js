import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FilmsRater from '../API/FilmsRater'
import Reviews from '../components/Reviews'
import StarRating from '../components/StarRating'
import '../Reviews.css'
import { FilmContext } from '../context/FilmContext'
import AddReview from '../components/AddReview'
import '../MovieDetail.css'

const MovieDetail = () => {
    const {id} = useParams()
    const {selectedFilm, setSelectedFilm} = useContext(FilmContext)

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await FilmsRater.get(`/${id}`)
            setSelectedFilm(response.data.data)
            console.log(response)
            }catch(err){
                console.log(err)
            }
            
        }
        fetchData()
    },[])
    return (
        <div>
            {selectedFilm && (
        <><h1>{selectedFilm.films.name}</h1>
        <div className="avrating"><StarRating rating ={selectedFilm.films.average_rating}/></div>
            <div>
            <Reviews reviews={selectedFilm.reviews}/>
            </div>
            <AddReview />
                
        </>   
)}
</div>
    );
    }

export default MovieDetail
