import React from 'react'

const animateText = ({ children }) => {
  const text = String(children);

  return (
    <>
        {
            text.split("").map((char, index) => (
                <span className="char" key={`${char}-${index}`} style={{ "--idx" : index }}>
                    {char === " " ? "\u00A0" : char}
                </span>
            ))
        }
    </>
  )
}

export default animateText