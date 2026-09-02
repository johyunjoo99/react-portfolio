import { useRef, useEffect } from 'react'

import WebPublisher from '../svg/WebPublisher'

const Hero = () => {    
    const heroRef = useRef(null);
    const dummyRef = useRef(null);

    const currentPercent = useRef(0);
    const targetPercent = useRef(0);
    const animationFrameId = useRef(null);
    const easeFactor = 0.1;

    function setProgress(target, progress) {
        target.style.setProperty("--up", progress.toFixed(2));
        target.style.setProperty("--down", (100 - progress).toFixed(2));
        target.style.setProperty("--upPercent", `${progress.toFixed(2)}%`);
        target.style.setProperty("--downPercent", `${(100 - progress).toFixed(2)}%`);
    }
    
    function animateScroll() {
        const target = heroRef.current;

        if (!target) return;

        currentPercent.current += (targetPercent.current - currentPercent.current) * easeFactor;
    
        setProgress(target, currentPercent.current);
    
        if (Math.abs(targetPercent.current - currentPercent.current) > 0.1) {
            animationFrameId.current = requestAnimationFrame(animateScroll);
        } else {
            currentPercent.current = targetPercent.current;
    
            setProgress(target, currentPercent.current);
    
            animationFrameId.current = null;
        }
    }
    
    function updateScrollProgress() {
        const trigger = dummyRef.current;

        if (!trigger) return;

        const scrollTop = window.scrollY;
        const offset = trigger.getBoundingClientRect().top + window.scrollY;
        const height = trigger.offsetHeight;
    
        let scrollProgress =
            (scrollTop - offset) /
            (height - window.innerHeight) *
            100;
    
        scrollProgress = Math.max(0, Math.min(scrollProgress, 100));
    
        targetPercent.current = scrollProgress;
    
        if (animationFrameId.current === null) {
            animationFrameId.current = requestAnimationFrame(animateScroll);
        }
    }
    
    useEffect(() => {
        updateScrollProgress();
        window.addEventListener("scroll", updateScrollProgress);

        return () => {
            window.removeEventListener("scroll", updateScrollProgress);
        }
    }, []);
  
    return (
    <section id="hero" ref={heroRef}>
        <div className="area">
            <div className="trigger">
                <div className="pin black">
                    <div className="svg">
                        <WebPublisher/>
                    </div>
                </div>
                <div className="pin white">
                    <div className="bg">
                        <div></div>
                    </div>
                    <div className="svg">
                        <WebPublisher/>
                    </div>
                </div>
            </div>
        </div>
        <div className="dummy" ref={dummyRef}></div>
    </section>
  )
}

export default Hero