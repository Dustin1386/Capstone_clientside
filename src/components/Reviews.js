import React from 'react'
import StarRating from './StarRating'

const Reviews = ({reviews}) => {
    return (
        <div className ="grid">
          {reviews.map((review)=>{
            return(
              <div key={reviews.id} className="card">
              <div class="text">
                <h4><b>{review.name}</b></h4><br/>
                <p><StarRating rating={review.rating}/></p>
                <h4><b>{review.review}</b></h4>
              </div>
            </div>
            )

          })}
        </div>
    )
}

export default Reviews
