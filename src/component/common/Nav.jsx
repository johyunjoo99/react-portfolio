import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
        <nav>
          <ul className="depth01">
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Work</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </nav>
    </>
  )
}

export default Nav