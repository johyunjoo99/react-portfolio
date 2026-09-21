import React from 'react'

const ProjectListLayout = ({ num, title,children }) => {
  return (
    <div className="list-layout">
        <div className="num">{num}</div> 
        <div className="tit">
            <h5>{title}</h5>
        </div>
        <div className="content">
            {children}
        </div>
    </div>
  )
}

export default ProjectListLayout