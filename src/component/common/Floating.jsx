import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import useReducedMotion from '../../hooks/useReducedMotion'

const Floating = () => {
  const [showTop, setShowTop] = useState(false)
  const reducedMotion = useReducedMotion();
  const { pathname } = useLocation();

  useEffect(() => {
    function handleScroll(){
      let top = window.scrollY > 0;

      if(pathname === '/'){
        // Main
        const hero = document.querySelector("#hero");

        if(hero){
          top = window.scrollY >= hero.offsetHeight - window.innerHeight;
        }
      }

      setShowTop(top);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [pathname]);

  function scrollTop(){
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <div id="floating">
        <div className="float">
          <button
            type="button"
            id="top"
            className={showTop ? 'show' : ''}
            aria-label="페이지 맨 위로 이동"
            inert={!showTop}
            onClick={scrollTop}
          >
            <i aria-hidden="true"></i>
          </button>
        </div>
    </div>
  )
}

export default Floating
