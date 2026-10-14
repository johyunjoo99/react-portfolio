import { useRef, useEffect } from 'react'

import useReducedMotion from '../../hooks/useReducedMotion'
import WebPublisher from '../svg/WebPublisher'

const EASE_FACTOR = 0.1;

function setProgress(target, progress) {
    target.style.setProperty("--up", progress.toFixed(2));
    target.style.setProperty("--down", (100 - progress).toFixed(2));
    target.style.setProperty("--upPercent", `${progress.toFixed(2)}%`);
    target.style.setProperty("--downPercent", `${(100 - progress).toFixed(2)}%`);
}

const Hero = () => {
    const heroRef = useRef(null);
    const dummyRef = useRef(null);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        // 동작 줄이기: 스크롤 전환 없이 완료 상태로 고정
        if (reducedMotion) {
            if (heroRef.current) setProgress(heroRef.current, 100);
            return;
        }

        let currentPercent = 0;
        let targetPercent = 0;
        let animationFrameId = null;

        // 목표값까지 매 프레임 일정 비율로 다가가는 이징(lerp)
        function animateScroll() {
            const target = heroRef.current;

            if (!target) return;

            currentPercent += (targetPercent - currentPercent) * EASE_FACTOR;

            if (Math.abs(targetPercent - currentPercent) > 0.1) {
                setProgress(target, currentPercent);
                animationFrameId = requestAnimationFrame(animateScroll);
            } else {
                currentPercent = targetPercent;
                setProgress(target, currentPercent);
                animationFrameId = null;
            }
        }

        function updateScrollProgress() {
            const trigger = dummyRef.current;

            if (!trigger) return;

            const scrollTop = window.scrollY;
            const offset = trigger.getBoundingClientRect().top + window.scrollY;
            const height = trigger.offsetHeight;

            const scrollProgress =
                (scrollTop - offset) /
                (height - window.innerHeight) *
                100;

            targetPercent = Math.max(0, Math.min(scrollProgress, 100));

            if (animationFrameId === null) {
                animationFrameId = requestAnimationFrame(animateScroll);
            }
        }

        updateScrollProgress();
        window.addEventListener("scroll", updateScrollProgress, { passive: true });

        return () => {
            window.removeEventListener("scroll", updateScrollProgress);

            if (animationFrameId !== null) {
                cancelAnimationFrame(animationFrameId);
            }
        }
    }, [reducedMotion]);

    return (
    <section id="hero" ref={heroRef}>
        <div className="area">
            <div className="trigger">
                <div className="pin black">
                    <h2 className="svg">
                        <span className="blind">Web Publisher</span>
                        <WebPublisher/>
                    </h2>
                </div>
                {/* 색상 전환 효과를 위한 복제 레이어 */}
                <div className="pin white" aria-hidden="true">
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
