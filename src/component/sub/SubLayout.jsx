import React from 'react'
import { useLocation } from 'react-router-dom'

import subLnb from '../../data/subLnb'
import SubHero from './SubHero'

const SubLayout = ({ children, id }) => {
  const { pathname } = useLocation();
  const menu = pathname.split('/')[1];
  const currentPage = subLnb[menu];

  return (
    <main id="sub">
        <SubHero page={currentPage}/>
        <div id={id} className="sub-content">
            {children}
        </div>
    </main>
  )
}

export default SubLayout