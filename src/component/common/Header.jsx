import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <h1 id="logo">
          <Link to="/">
            <img src="../src/img/common/logo.svg" alt="" />
          </Link>
        </h1>
      <header>
        <nav>
          <ul className="depth01">
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Work</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </nav>
        <a href="https://github.com/johyunjoo99" target="_blank" className="redBtn"><i className="github"></i>GitHUB</a>
        <button className="menuBtn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  )
}

export default Header