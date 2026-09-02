import React from 'react'
import { Link } from 'react-router-dom'

import '../../style/_main.scss'

import Hero from './Hero.jsx'
import About from './About.jsx'

const  Main = () => {
  return (
    <>
        <main>
            <Hero/>
            <About/>
        </main>
    </>
  )
}

export default Main