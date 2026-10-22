import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BASE_URL, MOBILE_MENU_QUERY } from '../../constants/constants'

import Nav from './Nav'
import Menu from './Menu'

const Header = () => {
  const { pathname } = useLocation();
  const isMain = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const menuBtnRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle('open', isMenuOpen);

    // 메뉴가 열려 있는 동안 뒤쪽 콘텐츠는 inert로 포커스 차단 (로고·GitHub·메뉴 버튼·메뉴 안에서만 이동)
    const outside = document.querySelectorAll('#wrap, footer');

    outside.forEach((el) => {
      el.inert = isMenuOpen;
    });

    return () => {
      document.body.classList.remove('open');

      outside.forEach((el) => {
        el.inert = false;
      });
    }
  }, [isMenuOpen]);

  // 메뉴 버튼이 사라지는 너비로 커지면 메뉴 닫기 (뒤쪽 콘텐츠가 inert로 남지 않도록)
  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MENU_QUERY);

    const handleChange = (e) => {
      if(!e.matches) setIsMenuOpen(false);
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // 메인: 화면 상단에 걸친 섹션을 현재 메뉴로 활성화
  useEffect(() => {
    if(!isMain) return;

    const sections = document.querySelectorAll('main > section');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting){
          setActiveSection(entry.target.id);
        }
      });
    }, {
      rootMargin: '0px 0px -99% 0px',
    });

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    }
  }, [isMain]);

  // 서브(Work) 페이지에서는 Work 메뉴 활성화
  const currentSection = isMain ? activeSection : 'project';

  return (
    <>
      <h1 id="logo">
        <Link to="/">
          <img src={`${BASE_URL}img/common/logo.svg`} alt="조현주 포트폴리오" />
        </Link>
      </h1>
      <header>
        <Nav activeSection={currentSection}/>
        <a
          href="https://github.com/johyunjoo99"
          target="_blank"
          rel="noopener noreferrer"
          className="redBtn"
        >
          <i className="github" aria-hidden="true"></i>GitHub<span className="blind">(새 창 열림)</span>
        </a>
        <button
          type="button"
          ref={menuBtnRef}
          className="menuBtn"
          aria-label={isMenuOpen ? '전체 메뉴 닫기' : '전체 메뉴 열기'}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} activeSection={currentSection} menuBtnRef={menuBtnRef}/>
    </>
  )
}

export default Header
