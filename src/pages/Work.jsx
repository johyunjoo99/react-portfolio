import React from 'react'

import '../style/_sub.scss'

import SubLayout from '../component/sub/SubLayout'
import SearchBox from '../component/work/SearchBox'
import SearchFilter from '../component/work/SearchFilter'

const Work = () => {
  return (
    <>
        <SubLayout id="work">
          <div className="w1700">
            <form action="">
              <SearchBox/>
              <SearchFilter/>
            </form>
          </div>
        </SubLayout>
    </>
  )
}

export default Work