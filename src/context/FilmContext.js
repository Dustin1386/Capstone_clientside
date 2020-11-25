import React, {useState, createContext} from "react"

export const FilmContext = createContext()

export const FilmContextProvider = (props) => {
    const [films, setFilms] = useState([])
    const [selectedFilm,setSelectedFilm] = useState(null)

    const addFilm = (film) =>{
        setFilms([...films, film])
    }

    return (
        <FilmContext.Provider value ={{films,setFilms,addFilm,selectedFilm,setSelectedFilm}}>
            {props.children}
        </FilmContext.Provider>
    )
}