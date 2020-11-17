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

    const handleDelete = async (e,id) =>{
        e.stopPropagation()
        try{
           const response = await FilmsRater.delete(`/${id}`)
           setFilms(
               films.filter((film)=>{
                   return film.id !==id;
               })
           )
          
        }catch(err){}
    }

    const handleUpdate = async (e,id) =>{
        e.stopPropagation()
        history.push(`/films/${id}/update`)
    }

    const handleFilmSelect = (id)=>{
        history.push(`/films/${id}`)
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Film Title</th>
                        <th>Genre</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr> 
                    </thead>
                    <tbody>   
                        { 
                        films.map((films)=>{
                          return(
                            <tr onClick ={()=>handleFilmSelect(films.id)} key ={films.id}>
                            <td className ="mouse">{films.name}</td>
                            <td className = "mouse">{films.genre}</td>
                            <td><button onClick={(e)=>handleUpdate(e,films.id)}>Update</button></td>
                            <td><button onClick={(e)=>handleDelete(e,films.id)}>Delete</button></td>
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
