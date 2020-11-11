import React, {useEffect, useContext} from 'react'
import '../FilmList.css'
import FilmsRater from '../API/FilmsRater'
import { FilmContext } from '../context/FilmContext'
import { useHistory } from 'react-router-dom'

const FilmList = (props) => {
    const {films, setFilms} = useContext(FilmContext)
    let history = useHistory()
    console.log(films)
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await FilmsRater.get('/')
                console.log(response)
                setFilms(response.data.data.films)
                console.log(response)
             }catch(err){
                console.log("failing get",err)
             }
            
        };
        fetchData()
    },[])

    const handleDelete = async (id) =>{
        try{
           const response = await FilmsRater.delete(`/${id}`)
           setFilms(films.filter(films=>{
               return films.id !== id
           }))
          
        }catch(err){}
    }

    const handleUpdate = async (id) =>{
        history.push(`/films/${id}/update`)
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Film Title</th>
                        <th>Genre</th>
                        <th>Rating</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr> 
                    </thead>
                    <tbody>   
                        { 
                        films.map((films)=>{
                          return(
                            <tr key ={films.id}>
                            <td>{films.name}</td>
                            <td>{films.genre}</td>
                            <td>Reviews</td>
                            <td><button onClick={()=>handleUpdate(films.id)}>Update</button></td>
                            <td><button onClick={()=>handleDelete(films.id)}>Delete</button></td>
                        </tr>
                          )  

                        })
                    /* <tr>
                        <td>Dances With Wolves</td>
                        <td>Horror</td>
                        <td>5</td>
                        <td><button>Update</button></td>
                        <td><button>Delete</button></td>
                    </tr> */}
                    </tbody>     
            </table>
            
        </div>
    )}


export default FilmList
