import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Floating = () => {
  const [showTop, setShowTop] = useState(false)
  const location = useLocation();

  useEffect(() => {
    function handleScroll(){
      let top = window.scrollY > 0;

      if(location.pathname === '/'){
        // Main
        const hero = document.querySelector("#hero");
        
        if(hero){
          top = window.scrollY >= hero.offsetHeight - window.innerHeight;
        }
      }

      if(top){
        setShowTop(true);
      }else{
        setShowTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [location.pathname]);
    
  function scrollTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
        <div id="floating">
            <div className="float">
              <button onClick={scrollTop} id="top" className={showTop ? 'show' : ''}>
                <i></i>
              </button>
            </div>
        </div>
    </>
  )
}

export default Floating