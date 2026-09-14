import React from 'react'
import { Link } from 'react-router-dom'

import '../style/_main.scss'

import Hero from '../component/main/Hero.jsx'
import About from '../component/main/About.jsx'
import Project from '../component/main/Project.jsx'
import Contact from '../component/main/Contact.jsx'

const  Main = () => {
  return (
    <>
      <main>
          <Hero/>
          <About/>
          <Project/>
          <Contact/>
      </main>
    </>
  )
}

export default Main