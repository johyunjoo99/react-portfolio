import { useRef, useState } from 'react'
import { BASE_URL } from '../constants/constants'

import SubLayout from '../component/sub/SubLayout'
import SearchBox from '../component/board/SearchBox'
import SearchFilter from '../component/board/SearchFilter'
import ProjectBoard from '../component/work/ProjectBoard'
import LayerPopup from '../component/board/LayerPopup'
import ProjectPopup from '../component/work/ProjectPopup'

const Work = () => {
  const popupRef = useRef(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchType, setSearchType] = useState('all');
  const [inputKeyword, setInputKeyword] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  //SearchBox
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchKeyword(inputKeyword.trim());
  }

  //SearchFilter
  const [filters, setFilters] = useState({
    environment: 'all',
    language: ['kor', 'eng', 'chn', 'jpn'],
    color: 'all',
  });

  return (
    <>
      <SubLayout id="work">
        <div className="w1700">
          <form onSubmit={handleSearch}>
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
            popupRef={popupRef} 
            setSelectedProject={setSelectedProject}
            searchType={searchType}
            searchKeyword={searchKeyword}
            filters={filters}
          />
        </div>
        <LayerPopup id={"project"} ref={popupRef}>
          <ProjectPopup project={selectedProject}/>
        </LayerPopup>
      </SubLayout>
    </>
  )
}

export default Work