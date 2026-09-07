import React from 'react'

const Nav = ({ activeSection, onMenuClose }) => {
  const handleClick = (e) => {
    const link = e.target.closest('a');

    if(!link) return;

    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    if(target){
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    onMenuClose?.();
  }

  return (
    <>
        <nav onClick={handleClick}>
          <ul className="depth01">
            <li className={activeSection === 'hero' ? 'on' : ''}><a href="#hero">Home</a></li>
            <li className={activeSection === 'about' ? 'on' : ''}><a href="#about">About</a></li>
            <li className={activeSection === 'project' ? 'on' : ''}><a href="#project">Work</a></li>
            <li className={activeSection === 'contact' ? 'on' : ''}><a href="#contact">Contact</a></li>
          </ul>
        </nav>
    </>
  )
}

export default Nav