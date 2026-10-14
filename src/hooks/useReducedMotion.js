import { useSyncExternalStore } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)';

const subscribe = (callback) => {
    const mediaQuery = window.matchMedia(QUERY);

    mediaQuery.addEventListener('change', callback);

    return () => {
        mediaQuery.removeEventListener('change', callback);
    }
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

// OS의 '동작 줄이기' 설정 여부 (설정을 바꾸면 새로고침 없이 반영)
function useReducedMotion(){
    return useSyncExternalStore(subscribe, getSnapshot);
}

export default useReducedMotion
