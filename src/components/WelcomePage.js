import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory, useLocation, useParams } from 'react-router-dom'
import '../Welcome.css'

const welcome = () => {
    return (
        <div>
            <div className="background" >
                <span className="title" >The<br />Film Rater</span>
            </div>
            <div className="about">
                <h5 className="shade"><span>ABOUT THE APP</span></h5>
                <p>I created the movie rater app, because I have a passion for film, I wanted others to be able to document their favorite films give them a star rating.</p>
                <p>Click below and start adding your favorite films!!</p>
              <Link to ="/welcome"> <button>Add Movies</button></Link> 
            </div>
        </div>
    )
}

export default welcome