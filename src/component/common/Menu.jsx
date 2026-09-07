import React from 'react'

import Nav from './Nav'

const Menu = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <>
        <div id="menu">
            <div className="blank" onClick={closeMenu}></div>
            <div className="inner">
                <Nav onMenuClose={closeMenu} activeSection={activeSection}/>
            </div>
        </div>
    </>
  )
}

export default Menu