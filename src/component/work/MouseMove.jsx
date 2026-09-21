import { useRef } from 'react'

const MouseMove = ({ children, className }) => {
  const hoverRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    hoverRef.current.style.left = `${x}px`;
    hoverRef.current.style.top = `${y}px`;
  }

  return (
    <div className={className} onMouseMove={handleMouseMove}>
        <div className="hover" ref={hoverRef}></div>
        {children}
    </div>
  )
}

export default MouseMove