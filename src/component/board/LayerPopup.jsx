import { useEffect, useRef } from 'react'

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

const LayerPopup = ({ id, isOpen, onClose, labelledBy, children }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if(!isOpen) return;

    const popup = popupRef.current;
    const prevFocus = document.activeElement;

    // body 스크롤 잠금 + 콘텐츠 스크롤 초기화 + 팝업 안으로 포커스 이동
    document.body.classList.add('lock');

    const scrollContent = popup.querySelector('.scroll-content');

    if(scrollContent){
      scrollContent.scrollTop = 0;
    }

    popup.querySelector(FOCUSABLE)?.focus({ preventScroll: true });

    const handleKeyDown = (e) => {
      if(e.key === 'Escape'){
        onClose();
        return;
      }

      if(e.key !== 'Tab') return;

      // 포커스 트랩: 팝업 안에서만 Tab 순환
      const focusables = popup.querySelectorAll(FOCUSABLE);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if(!first) return;

      if(e.shiftKey && document.activeElement === first){
        e.preventDefault();
        last.focus();
      }else if(!e.shiftKey && document.activeElement === last){
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    // 닫힘·언마운트 시 잠금 해제 및 이전 포커스 복귀
    return () => {
      document.body.classList.remove('lock');
      document.removeEventListener('keydown', handleKeyDown);
      prevFocus?.focus?.({ preventScroll: true });
    }
  }, [isOpen, onClose]);

  return (
    <div
      id={id}
      ref={popupRef}
      className={`layer-popup ${isOpen ? 'is-open' : ''}`}
      inert={!isOpen}
    >
      <div className="blank" onClick={onClose}></div>

      <div
        className="inner"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
      >
        {children}
      </div>
    </div>
  )
}

export default LayerPopup
