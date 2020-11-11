import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { FilmContextProvider } from './context/FilmContext'
import Home from './routes/Home'
import MovieDetail from './routes/MovieDetail'
import UpdateMovie from './routes/UpdateMovie'



const App = () =>{
  return(
  <FilmContextProvider>
  <div>
   <Router>
     <Switch>
     <Route exact path="/" component ={Home}/>
     <Route exact path="/film/:id/update" component ={UpdateMovie}/>
     <Route exact path="/film/:id" component ={MovieDetail}/>
     </Switch>
   </Router>
  </div>
  </FilmContextProvider>
  )}


export default App;