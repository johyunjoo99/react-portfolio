import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../constants/constants'

import Nav from './Nav'
import Menu from './Menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    document.body.classList.toggle('open', isMenuOpen);
  
    return () => {
      document.body.classList.remove('open');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll('main > section');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
  
      sections.forEach((section, i) => {
        const offset = section.offsetTop;
        const end = offset + section.offsetHeight;
  
        if (scrollTop >= offset && scrollTop < end) {
          setActiveSection(section.id);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <h1 id="logo">
        <Link to="/">
          <img src={`${BASE_URL}img/common/logo.svg`} alt="" />
        </Link>
      </h1>
      <header>
        <Nav activeSection={activeSection}/>
        <a href="https://github.com/johyunjoo99" target="_blank" className="redBtn"><i className="github"></i>GitHUB</a>
        <button className="menuBtn" onClick={() => setIsMenuOpen(prev => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={activeSection}/>
    </>
  )
}

export default Header