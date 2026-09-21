import React from 'react'
import { Link } from 'react-router-dom'

const ViewMore = ({
  href,
  children,
  external = false,
  targetBlank = false,
}) => {
  if(external){
    return(
      <a 
        href={href}
        target={targetBlank ? '_blank' : undefined}
        rel={targetBlank ? 'noreferrer' : undefined}
        className="viewmore"
      >
          <i></i>
          <span>{children}</span>
      </a>
    )
  }

  return (
    <Link to={href} className="viewmore">
      <i></i>
      <span>{children}</span>
    </Link>
  )
}

export default ViewMore