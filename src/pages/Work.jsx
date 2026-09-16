import { useState } from 'react'

import '../style/_sub.scss'

import SubLayout from '../component/sub/SubLayout'
import SearchBox from '../component/board/SearchBox'
import SearchFilter from '../component/board/SearchFilter'
import ProjectBoard from '../component/work/ProjectBoard'

const Work = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
            <ProjectBoard/>
          </div>
        </SubLayout>
    </>
  )
}

export default Work