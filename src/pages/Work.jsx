import { useCallback, useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { SITE_TITLE } from '../constants/constants'

import ProjectData from '../data/projectData'
import FilterData from '../data/projectSearchFilter'
import SubLayout from '../component/sub/SubLayout'
import SearchBox from '../component/board/SearchBox'
import SearchFilter from '../component/board/SearchFilter'
import ProjectBoard from '../component/work/ProjectBoard'
import LayerPopup from '../component/board/LayerPopup'
import ProjectPopup from '../component/work/ProjectPopup'

const POPUP_TITLE_ID = 'project-popup-title';

const Work = () => {
  const { projectId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  //SearchBox
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [searchType, setSearchType] = useState('all');
  const [inputKeyword, setInputKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  //SearchFilter
  const [filters, setFilters] = useState({
    environment: 'all',
    language: Object.keys(FilterData.language),
    color: 'all',
  });

  //LayerPopup
  // URL(/work/:projectId)을 팝업 상태로 사용 → 직접 접속·새로고침·공유 시에도 같은 팝업이 열림
  const currentProject = projectId
    ? ProjectData.find((project) => project.id === projectId)
    : null;
  const isPopupOpen = Boolean(currentProject);

  // 닫힘 애니메이션 동안 내용이 유지되도록 마지막으로 연 프로젝트 기억
  const [lastProject, setLastProject] = useState(currentProject);

  if(currentProject && currentProject !== lastProject){
    setLastProject(currentProject);
  }

  // 목록에서 열었으면 뒤로가기, 주소로 직접 들어왔으면 목록 경로로 교체
  const fromList = Boolean(location.state?.fromList);

  const closePopup = useCallback(() => {
    if(fromList){
      navigate(-1);
    }else{
      navigate('/work', { replace: true });
    }
  }, [fromList, navigate]);

  // 팝업이 열리면 문서 제목에 프로젝트명 표시
  useEffect(() => {
    if(!currentProject) return;

    document.title = `${currentProject.kor} | ${SITE_TITLE}`;

    return () => {
      document.title = SITE_TITLE;
    }
  }, [currentProject]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKeyword(inputKeyword.trim());
  }

  // 존재하지 않는 프로젝트 ID로 접속하면 목록으로 이동
  if(projectId && !currentProject){
    return <Navigate to="/work" replace/>;
  }

  return (
    <SubLayout id="work">
      <div className="w1700">
        <form role="search" onSubmit={handleSearch}>
          <SearchBox
            isFilterOpen={isFilterOpen}
            setIsFilterOpen={setIsFilterOpen}
            searchType={searchType}
            setSearchType={setSearchType}
            inputKeyword={inputKeyword}
            setInputKeyword={setInputKeyword}
          />
          <SearchFilter
            isFilterOpen={isFilterOpen}
            filters={filters}
            setFilters={setFilters}
          />
        </form>
        <ProjectBoard
          searchType={searchType}
          searchKeyword={searchKeyword}
          filters={filters}
        />
      </div>
      <LayerPopup
        id="project"
        isOpen={isPopupOpen}
        onClose={closePopup}
        labelledBy={POPUP_TITLE_ID}
      >
        {lastProject && (
          <ProjectPopup
            project={lastProject}
            titleId={POPUP_TITLE_ID}
            onClose={closePopup}
          />
        )}
      </LayerPopup>
    </SubLayout>
  )
}

export default Work
