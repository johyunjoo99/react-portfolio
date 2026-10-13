import { useState, useRef, useEffect } from 'react'

import ProjectData from '../../data/projectData'
import BoardInfo from '../board/BoardInfo'
import ViewMore from '../common/ViewMore'
import ProjectRow from './ProjectRow'

const PAGE_SIZE = 10;

const ProjectBoard = ({
  searchType,
  searchKeyword,
  filters
}) => {
  const tbodyRef = useRef(null);
  const focusIndexRef = useRef(null);

  //BoardInfo
  const [sort, setSort] = useState('latest');

  //More
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // 검색·필터·정렬 조건이 바뀌면 노출 개수를 처음(10개)으로 초기화
  // (effect 대신 렌더 중 이전 조건과 비교하는 방식으로 불필요한 재렌더 방지)
  const conditionKey = JSON.stringify([filters, searchType, searchKeyword, sort]);
  const [prevConditionKey, setPrevConditionKey] = useState(conditionKey);

  if(conditionKey !== prevConditionKey){
    setPrevConditionKey(conditionKey);
    setVisibleCount(PAGE_SIZE);
  }

  // 더보기 후 새로 추가된 첫 항목으로 포커스 이동 (키보드 사용자 탐색 위치 유지)
  useEffect(() => {
    if(focusIndexRef.current === null) return;

    const rows = tbodyRef.current?.querySelectorAll('tr');

    rows?.[focusIndexRef.current]?.querySelector('.title')?.focus();
    focusIndexRef.current = null;
  }, [visibleCount]);

  const handleMore = () => {
    focusIndexRef.current = visibleCount;
    setVisibleCount((prev) => prev + PAGE_SIZE);
  }

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

  //More
  const visibleProjectData = sortedProjectData.slice(0, visibleCount);
  const hasMore = sortedProjectData.length > visibleCount;

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
          <tbody ref={tbodyRef}>
            {
              !visibleProjectData.length
              ? <tr className="noData">
                  <td colSpan="6">
                    <p>검색 결과가 없습니다.</p>
                  </td>
                </tr>
              : visibleProjectData.map((project, idx) => (
                  <ProjectRow
                    key={project.id}
                    project={project}
                    num={idx + 1}
                  />
                ))
            }
          </tbody>
        </table>
      </div>
      {
        hasMore && (
          <div className="board-more">
            <ViewMore onClick={handleMore}>
              프로젝트 더보기
            </ViewMore>
          </div>
        )
      }
    </div>
  )
}

export default ProjectBoard
