import { useEffect } from 'react'

function useViewport(){
    useEffect(() => {
        const updateVw = () => {
            const vw = document.documentElement.clientWidth
            document.documentElement.style.setProperty('--vw', `${vw}px`);
        }

        updateVw();
        window.addEventListener('resize', updateVw);

        return () => {
            window.removeEventListener('resize', updateVw)
        }
    }, [])
}

export default useViewport