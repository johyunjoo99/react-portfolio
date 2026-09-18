import React from 'react'

const LayerPopup = ({ children, id }) => {
  return (
    <div id={id} className="layer-popup">
        <div className="blank"></div>
        <div className="inner">
            {children}
        </div>
    </div>
  )
}

export default LayerPopup