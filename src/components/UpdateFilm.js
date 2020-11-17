import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import FilmsRater from '../API/FilmsRater'
import { FilmContext } from '../context/FilmContext'


 export const UpdateFilm = (props) => {
  let history = useHistory()
  const {id} = useParams()
  const {films} = useContext(FilmContext)
  const [name, setName] = useState("")
  const [genre, setGenre] = useState("")

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await FilmsRater.get(`/${id}`)
            console.log(response.data.data)
            setName(response.data.data.films.name)
            setGenre(response.data.data.films.genre)

        }
        fetchData()
    },[])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const updateFilm = await FilmsRater.put(`/${id}`,{
            name,
            genre
        })
        console.log(updateFilm)
       history.push('/') 
       
    }
    return (
        <div>
            <form> 
                <div>
                <label htmlFor= "name">name</label>
                <input value ={name} onChange={(e) => setName(e.target.value)} placeholder="name"></input>
                <label htmlFor= "genre">Genre</label>
                <input value ={genre} onChange={(e) => setGenre(e.target.value)} placeholder="genre"></input>
               </div> 
               <button type ='submit' onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}
// export default UpdateFilm