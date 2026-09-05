import React from 'react'
import { Link } from 'react-router-dom'

import Nav from './Nav'

const Header = () => {
  return (
    <>
      <h1 id="logo">
          <Link to="/">
            <img src="/img/common/logo.svg" alt="" />
          </Link>
        </h1>
      <header>
        <Nav/>
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