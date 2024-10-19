import React from 'react'
import { course } from '../constant'
import '../styles/Course.css'

const Courses = () => {
  return (
    <div className='course'>
      <h2>Our Popular Courses</h2>
      <p>Discover our most sought-after courses, carefully curated to meet the demand of today's learners. Dive into engaging content crafted for success in every step of your educational journey.</p>

      <div className='list_course'>
        {course.map((cou) => (
          <div key={cou.id} className='list_course-card'>
            <img src={cou.image} alt={cou.type} />
            <div className='list_course-card-top'>
              <div className='list_course-card-type'>
                <span></span>
                <p>{cou.type}</p>
              </div>
              <div className='list_course-card-rate'>
                <span></span>
                <p>{cou.rate}</p>
              </div>
            </div>
            <p className='list_course-card-title'>{cou.title}</p>
            <div className='list_course-card-infor'>
              <div className='list_course-card-class'>
                <span></span>
                <p>{cou.class}</p>
              </div>
              <div className='list_course-card-student'>
                <span></span>
                <p>{cou.student}</p>
              </div>
            </div>
            <div className='list_course-card-cross'></div>
            <div className='list_course-card-price'>
              <p>{cou.price}</p>
              <div className='list_course-card-author'>
                <img src={cou.avatar} alt={cou.author} />
                <p>{cou.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
