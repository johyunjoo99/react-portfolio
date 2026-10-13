import { Link } from 'react-router-dom'

// href 없이 onClick만 전달하면 button으로 렌더 (페이지 이동이 아닌 동작용)
const ViewMore = ({
  href,
  onClick,
  children,
  external = false,
  targetBlank = false,
}) => {
  if(!href){
    return (
      <button type="button" className="viewmore" onClick={onClick}>
        <i aria-hidden="true"></i>
        <span>{children}</span>
      </button>
    )
  }

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
