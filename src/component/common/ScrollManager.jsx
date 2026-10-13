import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// 페이지 이동 시 스크롤 위치 처리
// hash가 있으면 해당 섹션으로, 없으면 페이지 최상단으로 이동
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if(hash){
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager
