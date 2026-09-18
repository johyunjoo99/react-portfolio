import React from 'react'

import ProjectData from '../../data/projectData'
import BoardInfo from '../board/BoardInfo'
import ProjectItem from './ProjectItem'

const ProjectBoard = () => {
  return (
    <div className="board-ctn">
      <BoardInfo Data={ProjectData}/>
      <div className="project-board">
        <table>
          <colgroup>
            <col className="s"/>
            <col className="m" />
            <col />
            <col className="l" />
            <col className="l" />
            <col className="s"/>
          </colgroup>
          <thead>
            <tr>
              <th>No.</th>
              <th>Color</th>
              <th>Title</th>
              <th>Period</th>
              <th>Skill</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <ProjectItem ProjectData={ProjectData}/>
          </tbody>
        </table>
      </div> 
    </div>
  )
}

export default ProjectBoard