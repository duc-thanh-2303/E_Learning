import React from 'react'
import frame from '../assets/Group 65.png'
import '../styles/Instructor.css'

const Instructor = () => {
  return (
    <div className='instructor'>
      <div className='left_instructor'>
        <h3 className='instructor-title'>If You Are A Certified Teacher<br/> Then <span>Become An Instructor</span></h3>
        <p>Unlock the opportunity to inspire and educate by joining<br/>our team of intructors. If you're a certified teacher,<br />elevate your impact and share your expertise with<br /> learners worldwide.</p>
        <h3 className='instructor-list-title'>Enjoy Many Perks</h3>
        <ul className='instructor-list'>
          <li className='instructor_menu-list'><p>Global Impact</p></li>
          <li className='instructor_menu-list'><p>Flexible Schedule</p></li>
          <li className='instructor_menu-list'><p>Innovative Teaching Tools</p></li>
          <li className='instructor_menu-list'><p>Recognition And Reputation</p></li>
          <li className='instructor_menu-list'><p>Creative Freedom</p></li>
          <li className='instructor_menu-list'><p>Monetize Development</p></li>
          <li className='instructor_menu-list'><p>Professional Development</p></li>
          <li className='instructor_menu-list'><p>Networking Opportunities</p></li>
        </ul>
        <button>Become an Instructor</button>
      </div>
      <div className='right_instructor'>
        <img src={frame} alt='frame' />
      </div>
    </div>
  )
}

export default Instructor
