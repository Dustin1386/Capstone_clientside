import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import '../AddReview.css'
import FilmsRater from '../API/FilmsRater'

const AddReview = () => {
    const {id} = useParams()
    const location = useLocation()
    const history = useHistory()

    const [name, setName] = useState("")
    const [reviewText, setReviewText] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmitReview = async(e)=>{
        e.preventDefault()
        try{
            const response = await FilmsRater.post(`/${id}/addReview`,{
                name,
                review: reviewText,
                rating
    
            })
            history.push("/")
            history.push(location.pathname)

        }catch(err){
            
        }
        
    }

    return (
        <div className="container2">
            <form id="rating">
                <label htmlFor="fname">First Name</label>
                <input value ={name} onChange={e => setName(e.target.value)} type="text" id="fname" name="firstname" placeholder="Your name.."/>
                <label htmlFor="rating">Rating</label>
                <select value ={rating} onChange={e => setRating(e.target.value)} id="rating" name="rating">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="Review">Subject</label>
                <textarea value ={reviewText} onChange={e => setReviewText(e.target.value)}  id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>
                <input onClick ={handleSubmitReview} type="submit" value="Submit"/>
            </form>
        </div>
    )
}
export default AddReview
