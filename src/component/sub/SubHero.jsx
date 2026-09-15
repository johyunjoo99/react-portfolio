import React from 'react'
import { Link } from 'react-router-dom'

import AnimateText from './AnimateText'

const SubHero = ({ page }) => {
  return (
    <section id="sub-hero" className={`hero${page.num}`}>
        <div className="w1700">
            <div id="lnb" className={`lnb${page.num}`}>
                <ul>
                    <li className="home">
                        <Link to="/">
                            <i></i>
                        </Link>
                    </li>
                    <li className="local01">
                        <Link to={page.link}>{page.title}</Link>
                    </li>
                </ul>
            </div>
            <div className="text">
                <h2><AnimateText>{page.title}</AnimateText></h2>
            </div>
        </div>
    </section>
  )
}

export default SubHero