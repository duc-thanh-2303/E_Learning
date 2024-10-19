import React from 'react'
import { review } from '../constant'
import '../styles/Review.css'

const Reviews = () => {
  return (
    <div className='review'>
      <h3>Student's Testimonials</h3>
      <p>Here's what our students have to say about their transformative learning experience: Real stories, real growth. Discover firsthand the impact our courses have had on their lives.</p>

      <div className='list_review'>
        {review.map((rev) => (
          <div className='card_review' key={rev.id}>
            <div className='card_review-top'>
              <img src={rev.avatar} alt={rev.author} />
              <div className='card_review-top-infor'>
                <p>{rev.author}</p>
                <p>{rev.type}</p>
              </div>
            </div>
            <p className='card_review-top-content'>{rev.context}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reviews
