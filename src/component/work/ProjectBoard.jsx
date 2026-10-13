import { useState } from 'react'

import ProjectData from '../../data/projectData'
import BoardInfo from '../board/BoardInfo'
import ProjectRow from './ProjectRow'

const ProjectBoard = ({
  onSelect,
  searchType,
  searchKeyword,
  filters
}) => {
  //BoardInfo
  const [sort, setSort] = useState('latest');

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

  //BoardInfo
  // 날짜가 'YYYY.MM.DD' 고정 형식이라 문자열 비교로 정렬
  const sortedProjectData = [...filteredProjectData].sort((a, b) => {
    if(sort === 'latest'){
      return b.period.end.localeCompare(a.period.end);
    }

    if(sort === 'oldest'){
      return a.period.end.localeCompare(b.period.end);
    }

    if(sort === 'title-asc'){
      return a.kor.localeCompare(b.kor);
    }

    if(sort === 'title-desc'){
      return b.kor.localeCompare(a.kor);
    }

    return 0;
  })

  return (
    <div className="board-ctn" data-aos="fade-up">
      <BoardInfo
       total={filteredProjectData.length}
       sort={sort}
       setSort={setSort}
      />
      <div className="project-board">
        <table>
          <caption className="blind">프로젝트 목록 (제목 선택 시 상세 팝업 열림)</caption>
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
              <th scope="col">No.</th>
              <th scope="col">Color</th>
              <th scope="col">Title</th>
              <th scope="col">Period</th>
              <th scope="col">Skill</th>
              <th scope="col"><span className="blind">상세 보기</span></th>
            </tr>
          </thead>
          <tbody>
            {
              !sortedProjectData.length
              ? <tr className="noData">
                  <td colSpan="6">
                    <p>검색 결과가 없습니다.</p>
                  </td>
                </tr>
              : sortedProjectData.map((project, idx) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    num={idx + 1}
                    onSelect={onSelect}
                  />
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProjectBoard
