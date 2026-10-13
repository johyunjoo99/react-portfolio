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
        rel={targetBlank ? 'noopener noreferrer' : undefined}
        className="viewmore"
      >
          <i aria-hidden="true"></i>
          <span>
            {children}
            {targetBlank && <span className="blind">(새 창 열림)</span>}
          </span>
      </a>
    )
  }

  return (
    <Link to={href} className="viewmore">
      <i aria-hidden="true"></i>
      <span>{children}</span>
    </Link>
  )
}

export default ViewMore
