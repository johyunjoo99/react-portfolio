import { useState, useEffect, cloneElement, forwardRef, useImperativeHandle } from 'react'

const LayerPopup = forwardRef(({ children, id }, ref) => {
  const body = document.body;
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function popupOpen(){
    body.classList.add('lock');
    setIsPopupOpen(true);
  }

  function popupClose(){
    body.classList.remove('lock');
    setIsPopupOpen(false);
  }

  useImperativeHandle(ref, () => ({
    popupOpen
  }))

  useEffect(() => {
    if (isPopupOpen) {
      const scrollContent = document.querySelector(`#${id} .scroll-content`);

      if(scrollContent){
        scrollContent.scrollTop = 0
      }
    }
  }, [isPopupOpen, id])

  return (
    <div id={id} className={`layer-popup ${isPopupOpen ? 'is-open' : ''}`}>
      <div className="blank" onClick={popupClose}></div>

      <div className="inner">
        {cloneElement(children, { popupClose })}
      </div>
    </div>
  )
})

export default LayerPopup