import React from 'react'
import MouseMove from './MouseMove'

const ProjectCardLayout = ({ title, children }) => {
  return (
    <MouseMove className="box">
        <dl>
            <dt>{title}</dt>
            <dd className="eng">
                {children}
            </dd>
        </dl>
    </MouseMove>
  )
}

export default ProjectCardLayout