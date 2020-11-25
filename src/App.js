import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import welcome from './components/WelcomePage'
import { FilmContextProvider } from './context/FilmContext'
import Home from './routes/Home'
import MovieDetail from './routes/MovieDetail'
import UpdatePage from './routes/UpdatePage'
import welcomePage from './routes/WelcomeRoute'



const App = () =>{
  return(
  <FilmContextProvider>
  <div>
   <Router>
     <Switch>
     <Route exact path="/" component ={welcome}/>
     <Route exact path="/films/:id/update" component ={UpdatePage}/>
     <Route exact path="/films/:id" component ={MovieDetail}/>
     <Route exact path="/welcome" component ={Home}/>
     </Switch>
   </Router>
  </div>
  </FilmContextProvider>
  )}


export default App
