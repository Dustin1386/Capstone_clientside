import React, { useContext, useState } from 'react'
import '../AddFilm.css'
import FilmsRater from '../API/FilmsRater'
import { FilmContext } from '../context/FilmContext'

const AddFilm = () => {
        const{addFilm} = useContext(FilmContext)
        const[name, setName] = useState("")
        const[genre, setGenre] = useState("")

        const handleSubmit = async (e)=>{
            e.preventDefault()
            try{
               const response = await FilmsRater.post("/",{
                    name: name,
                    genre: genre
                })
                console.log(response.data.data.films)
             addFilm(response.data.data.films)
            }catch(err){
            console.log(err)
        }
    }
    const [rating, setRating] = useState("")
    return (
        <div className ="container">
            <form>
                <div className="col">
                    <label htmlFor="filmname">Film Name:</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="text" required="required" className="text-name" placeholder="Name"/>
                </div>
                <div className="col">
                    <label htmlFor="filmgenre">Film Genre:</label>
                    <select value={genre} onChange={e => setGenre(e.target.value)} type="text"className="text-name" placeholder="Genre">
                        <option value="Horror">Horror</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Action">Action</option>
                        
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="filmrating">Film rating:</label>
                    <select id="cars" name="cars" value ={rating} onChange={e => setRating(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <button onClick = {handleSubmit} type ="submit" className="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default AddFilm