import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {NavBar, Hero, Features, Courses, Instructor, Reviews, CTA, Footer} from './components/index'

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <NavBar />
        <Hero />
        <Features />
        <Courses />
        <Instructor />
        <Reviews />
        <CTA />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
