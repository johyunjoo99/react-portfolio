import { useCallback, useState } from 'react'

import FilterData from '../data/projectSearchFilter'
import SubLayout from '../component/sub/SubLayout'
import SearchBox from '../component/board/SearchBox'
import SearchFilter from '../component/board/SearchFilter'
import ProjectBoard from '../component/work/ProjectBoard'
import LayerPopup from '../component/board/LayerPopup'
import ProjectPopup from '../component/work/ProjectPopup'

const POPUP_TITLE_ID = 'project-popup-title';

const Work = () => {
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
  // 닫힘 애니메이션 동안 내용이 유지되도록 선택 프로젝트와 열림 상태를 분리
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKeyword(inputKeyword.trim());
  }

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  }

  const closePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

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
          onSelect={openPopup}
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
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            titleId={POPUP_TITLE_ID}
            onClose={closePopup}
          />
        )}
      </LayerPopup>
    </SubLayout>
  )
}

export default Work
