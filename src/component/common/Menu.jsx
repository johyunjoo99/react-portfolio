import { useEffect } from 'react'

import Nav from './Nav'

const Menu = ({ activeSection, isMenuOpen, setIsMenuOpen }) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // ESC 키로 메뉴 닫기
  useEffect(() => {
    if(!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if(e.key === 'Escape') setIsMenuOpen(false);
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    // 닫혀 있을 때는 inert로 키보드 포커스 차단
    <div id="menu" inert={!isMenuOpen}>
        <div className="blank" onClick={closeMenu}></div>
        <div className="inner">
            <Nav onMenuClose={closeMenu} activeSection={activeSection}/>
        </div>
    </div>
  )
}

export default Menu
