import React from 'react'
import duolingo from '../assets/duolingo.png'
import magic from '../assets/magic leap.png'
import microsoft from '../assets/Group 70.png'
import codecov from '../assets/Codecov.png'
import ut from '../assets/Group 71.png'
import fr5 from '../assets/Group 59.png'
import { service } from '../constant'
import '../styles/Features.css'

const Features = () => {
  return (
    <div className='features'>
      <div className='features_branch'>
        <img src={duolingo} alt='duolingo' />
        <img src={magic} alt='magic' />
        <img src={microsoft} alt='microsoft' />
        <img src={codecov} alt='codecov' />
        <img src={ut} alt='ut' />
      </div>
      <div className='features_search'>
        <p>Search Courses</p>
        <div className='search_input'>
          <input type='text' placeholder='Search for over 50+ courses' />
          <button>Search</button>
        </div>
      </div>
      <div className='features_main'>
        <div className='features_main-bg'>
          <img src={fr5} alt='main' />
        </div>
        <div className='features_main-context'>
          <p><span>Benefits</span> From Our Online<br />Learning</p>
          <ul className='features_main-context-list'>
            {service.map((ser) => (
              <li key={ser.id} className='features_main-context-list-content'>
                <img src={ser.icon} alt={ser.title}/>
                <div>
                  <p>{ser.title}</p>
                  <p>{ser.context}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Features
