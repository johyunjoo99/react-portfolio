import { useCallback, useEffect, useRef } from 'react'

import Nav from './Nav'

const Menu = ({ activeSection, isMenuOpen, setIsMenuOpen, menuBtnRef }) => {
  const menuRef = useRef(null);

  const closeMenu = useCallback(() => {
    // 닫히면 inert로 메뉴 안의 포커스가 사라지므로, 메뉴 안에 있던 포커스는 메뉴 버튼으로 복귀
    if(menuRef.current?.contains(document.activeElement)){
      menuBtnRef.current?.focus({ preventScroll: true });
    }

    setIsMenuOpen(false);
  }, [menuBtnRef, setIsMenuOpen]);

  // ESC 키로 메뉴 닫기
  useEffect(() => {
    if(!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if(e.key === 'Escape') closeMenu();
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMenuOpen, closeMenu]);

  return (
    // 닫혀 있을 때는 inert로 키보드 포커스 차단
    <div id="menu" ref={menuRef} inert={!isMenuOpen}>
        <div className="blank" onClick={closeMenu}></div>
        <div className="inner">
            <Nav onMenuClose={closeMenu} activeSection={activeSection}/>
        </div>
    </div>
  )
}

export default Menu
