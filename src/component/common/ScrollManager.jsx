import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// 경로의 첫 번째 구간을 페이지 단위로 사용 (/work, /work/:projectId → 'work')
const getPageKey = (pathname) => pathname.split('/')[1];

// 페이지 이동 시 스크롤 위치 처리
// hash가 있으면 해당 섹션으로, 다른 페이지로 이동하면 최상단으로 이동
// 같은 페이지 안에서 하위 경로만 바뀌는 경우(팝업 열기/닫기)는 스크롤 유지
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const prevPathnameRef = useRef(null);

  // AOS가 새 요소의 노출 여부를 판단하기 전에 스크롤을 먼저 초기화해야 함
  // (useEffect면 이전 페이지 스크롤 위치 기준으로 판단해 애니메이션이 미리 실행됨)
  useLayoutEffect(() => {
    const prevPathname = prevPathnameRef.current;
    prevPathnameRef.current = pathname;

    if(hash){
      document.getElementById(hash.slice(1))?.scrollIntoView();
      return;
    }

    if(prevPathname !== null && getPageKey(prevPathname) === getPageKey(pathname)){
      return;
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollManager
