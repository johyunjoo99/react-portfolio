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

  return (
    <>
      <SubLayout id="work">
        <div className="w1700">
          <form action="">
            <SearchBox
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
            />
            <SearchFilter
              isFilterOpen={isFilterOpen}
            />
          </form>
          <ProjectBoard 
            popupRef={popupRef} 
            setSelectedProject={setSelectedProject}
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