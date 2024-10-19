import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'
import { navLinks } from '../constant'

const NavBar = () => {
  return (
    <nav>
      <div className='nav_logo'>
        <Link to="/" className='nav_logo-link'>
          <img src={logo} alt='logo' />
        </Link>
        
      </div>
      <ul className='menu_list'>
        {navLinks.map((nav) => (
          <li key={nav.id} className='list'>
            <a className='list_link' href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        {/* <li className='list'>
          <Link className='list_link' to="/">Courses</Link>
        </li>
        <li className='list'>
          <Link className='list_link' to="">Teachers</Link>
        </li>
        <li className='list'>
          <Link className='list_link' to="">Offers</Link>
        </li>
        <li className='list'>
          <Link className='list_link' to="">Contact</Link>
        </li> */}
      </ul>
      <div className='nav_btn'>
        <button>Sign In</button>
        <button>Free Trial</button>
      </div>
    </nav>
  )
}

export default NavBar
