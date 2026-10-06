import React from 'react'

import ProjectData from '../../data/projectData'
import BoardInfo from '../board/BoardInfo'
import ProjectItem from './ProjectItem'

const ProjectBoard = ({ 
  popupRef, 
  setSelectedProject,
  searchType,
  searchKeyword, 
  filters
}) => {
  //SearchBox
  const filteredProjectData = ProjectData.filter((project) => {
    //SearchFilter
    const environmentMatch = filters.environment === 'all' || project.environment.toLowerCase() === filters.environment;

    const languageMatch = filters.language.some((language) => (
      project.language.includes(language.toUpperCase())
    ));

    const colorMatch = filters.color === 'all' || project.color === filters.color;

    if(!environmentMatch || !languageMatch || !colorMatch){
      return false;
    }

    //SearchBox
    if(!searchKeyword){
      return true;
    }
    
    const keyword = searchKeyword.toLowerCase();
    const title = project.kor.toLowerCase();
    const contents = [
      project.description,
      ...(project.detail?.tasks || []),
      ...(project.detail?.features || [])
    ].filter(Boolean).join(' ').toLowerCase();

    if(searchType === "title"){
      return title.includes(keyword);
    }

    if(searchType === 'contents'){
      return contents.includes(keyword);
    }

    return (
      title.includes(keyword) || contents.includes(keyword)
    )
  });

  const sortedProjectData = [...filteredProjectData].sort((a, b) => (
    new Date(b.period.end.replace(/\./g, '-')) - new Date(a.period.end.replace(/\./g, '-'))
  ))

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
            <ProjectItem 
              ProjectData={sortedProjectData} 
              popupRef={popupRef}
              setSelectedProject={setSelectedProject}
            />
          </tbody>
        </table>
      </div> 
    </div>
  )
}

export default ProjectBoard