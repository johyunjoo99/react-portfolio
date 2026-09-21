import { useState, cloneElement } from 'react'

const LayerPopup = ({ children, id }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function popupClose(){
    setIsPopupOpen(false);
  }

  return (
    <div id={id} className={`layer-popup ${isPopupOpen ? 'is-open' : ''}`}>
      <div className="blank" onClick={popupClose}></div>
      <div className="inner">
        {cloneElement(children, { popupClose })}
      </div>
    </div>
  )
}

export default LayerPopup